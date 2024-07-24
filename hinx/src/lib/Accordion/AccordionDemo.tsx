import React from "react";
import Accordion from "./Accordion";
import AccordionHeader from "./AccordionHeader";
import AccodionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";
const AccordionDemo = () => {
  return (
    <Accordion>
      <AccodionItem value="item-1">
        <AccordionHeader>dsqdsqdsqdsqsqd</AccordionHeader>
        <AccordionPanel>dsqddd</AccordionPanel>
      </AccodionItem>
      <AccodionItem value="item-2">
        <AccordionHeader>dsqdsqdsqdsqsqd</AccordionHeader>
        <AccordionPanel>dsqddd</AccordionPanel>
      </AccodionItem>
    </Accordion>
  );
};
export default AccordionDemo;
