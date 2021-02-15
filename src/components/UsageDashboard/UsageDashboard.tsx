import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { HeroUsageDashboardResult, UsageDashboardResult } from './model';
import { BoxControlsStyle, BoxResultsStyle } from '../../theme/styles';
import CompositionSelector from '../Composition/CompositionSelector';
import UsageDashboardResults from './UsageDashboardResults';
import compositions from '../../data/compositions';
import heroes from '../../data/heroes';

function UsageDashboard() {

  const [usageResult, setUsageResult] = useState<UsageDashboardResult>();
  
  function calculateHeroUsage(compositionIds:Array<string>) {
    const heroUsagesResults = new Map(heroes.map((h): [string, HeroUsageDashboardResult] => [h.id, new HeroUsageDashboardResult(h)]));

    const selectedCompositions = compositions.filter(c => compositionIds.includes(c.id));

    selectedCompositions.forEach((c) => {
        c.coreHeroes.heroes.forEach((hr) => {
          const heroUsageResult = heroUsagesResults.get(hr.hero.id) as HeroUsageDashboardResult;
          heroUsageResult.coreCompositions.push(c);
        });
        c.flexHeroes.forEach((cc) => {
          cc.heroes.forEach((hr) => {
            const heroUsageResult = heroUsagesResults.get(hr.hero.id) as HeroUsageDashboardResult;
            heroUsageResult.flexCompositions.set(c, cc.role);
          });
        });
      });

    setUsageResult(new UsageDashboardResult(
      selectedCompositions.length,
      Array.from(heroUsagesResults.values())
        .sort((ur1, ur2) => 
          // Sort by number of usage > core > flex
          ur2.coreCompositions.length + ur2.flexCompositions.size - ur1.coreCompositions.length - ur1.flexCompositions.size ||
          ur2.coreCompositions.length - ur1.coreCompositions.length ||
          ur2.flexCompositions.size - ur1.flexCompositions.size
        )
      ));
  }

  return (
    <div>
      <Box {...BoxControlsStyle}>
        <CompositionSelector onValidate={calculateHeroUsage} />
      </Box>
      <Box {...BoxResultsStyle}>
        {usageResult && <UsageDashboardResults usageResult={usageResult} />}
      </Box>
    </div>
  );
}

export default UsageDashboard;
