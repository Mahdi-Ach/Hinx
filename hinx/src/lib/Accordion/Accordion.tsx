import React, { ReactNode, forwardRef, useState } from "react";
import { AccorditionProvider } from "./AccordionContext";
import * as Accordions from '@radix-ui/react-accordion';
type BaseAccordionAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AccordionProps extends BaseAccordionAttributes {
  children: ReactNode;
}

const Accordion = forwardRef<Ref, AccordionProps>(
  ({ children, ...props }, ref) => {
    
    return (
      <AccorditionProvider>
        <Accordions.Root className="AccordionRoot" type="single" collapsible>
        {children}

        </Accordions.Root>
      </AccorditionProvider>
    );
  }
);
export default Accordion;
