import { AccordionContent } from "@radix-ui/react-accordion";
import React, { ReactNode, forwardRef } from "react";
import {
  AccordionPanelProvider,
  useAccorditionItemContext,
} from "./AccordionContext";

type BaseAccordionAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AccordionProps extends BaseAccordionAttributes {
  children: ReactNode;
}

const AccorditionPanel = forwardRef<Ref, AccordionProps>(
  ({ children, ...props }, ref) => {
    const context = useAccorditionItemContext();
    if (!context) {
      throw new Error("AccorditionPanel must be a child of AccorditionItem");
    }

    return (
      <AccordionPanelProvider>
        <AccordionContent>
                {children}
        </AccordionContent>
      </AccordionPanelProvider>
    );
  }
);
export default AccorditionPanel;
