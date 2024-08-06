import React, { ReactNode, forwardRef, memo } from "react";
import { AccorditionProvider } from "./AccordionContext";
type BaseAccordionAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AccordionProps extends BaseAccordionAttributes {
  children: ReactNode;
}

const Accordion = memo(forwardRef<Ref, AccordionProps>(
  ({ children, ...props }, ref) => {
    return (
      <AccorditionProvider>
        <div {...props} ref={ref}>
        {children}
        </div>
      </AccorditionProvider>
    );
  }
));
export default Accordion;
