import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, Box} from "@chakra-ui/react";
import { ViewIcon } from '@chakra-ui/icons'
import { Hero } from "../../model/heroes";
import HeroCharactericticsTable from "./HeroCharactericticsTable";

type HeroCharacteristicsPopoverProps = {
  heroes: Array<Hero>;
};

function HeroCharacteristicsPopover({ heroes }: HeroCharacteristicsPopoverProps) {

  return (
    <Box width='85px'>
      <Popover isLazy>

        <PopoverTrigger>
          <Button variant='ghost' rightIcon={<ViewIcon/>}>{heroes.length}</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <HeroCharactericticsTable heroes={heroes} />
          </PopoverBody>
        </PopoverContent>

      </Popover>
    </Box>
  );
}

export default HeroCharacteristicsPopover;
