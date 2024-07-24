import React, { ReactNode, forwardRef } from "react";
import { AccordionHeaderProvider, useAccorditionItemContext } from "./AccordionContext";
import { AccordionTrigger } from "@radix-ui/react-accordion";


type BaseAccordionAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AccordionProps extends BaseAccordionAttributes {
  children: ReactNode;
}

const AccordionHeader = forwardRef<Ref, AccordionProps>(({ children }, ref) => {
  const context = useAccorditionItemContext();
  if (!context) {
    throw new Error("AccorditionHeader must be a child of AccorditionItem");
  }

  return (
    <AccordionHeaderProvider>
      <AccordionTrigger>
        {children}
      </AccordionTrigger>
    </AccordionHeaderProvider>
  );
});
export default AccordionHeader;
