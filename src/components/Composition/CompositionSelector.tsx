import { Composition } from "../../model/compositions";
import { Flex, FormControl, Switch } from '@chakra-ui/react'
import CompositionDetails from "./CompositionDetails";
import CompositionBox from "./CompositionBox";
import { ChangeEvent } from "react";

type selectedComposition  = Composition & { selected: boolean }

type CompositionSelectorProps = {
  compositions: Array<selectedComposition>;
  onChange:(compositionId:string, value:boolean) => void
};

function CompositionSelector({ compositions, onChange }: CompositionSelectorProps) {
  
  const compositionBoxes = compositions.map((c) => (
    <FormControl key={c.id} display="flex" alignItems="center" width="30%" m="2px"> 
      <Switch defaultChecked={c.selected} mr="5px" onChange={() => onChange(c.id, !c.selected)}/>
      <CompositionBox key={c.id} composition={c} />
    </FormControl>
  ));

  return <Flex flexDirection="column" wrap="wrap" maxHeight="280px" width="100%">
    {compositionBoxes}
  </Flex>;
}

export default CompositionSelector;
