import React, { ReactNode, forwardRef, memo } from "react";
import { AccordionHeaderProvider, useAccorditionContext, useAccorditionItemContext } from "./AccordionContext";


type BaseAccordionAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AccordionProps extends BaseAccordionAttributes {
  children: ReactNode;
}

const AccordionHeader = memo(forwardRef<Ref, AccordionProps>(({ children,...props }, ref) => {
  const context = useAccorditionItemContext();
  if (!context) {
    throw new Error("AccorditionHeader must be a child of AccorditionItem");
  }
  let accordioncontext = useAccorditionContext()
  return (
    <AccordionHeaderProvider>
      <div {...props} ref={ref} onClick={()=>accordioncontext?.setExpanded(context.expanded == accordioncontext.expanded ? "" : context.expanded)}>
        {children}
      </div>
    </AccordionHeaderProvider>
  );
}));
export default AccordionHeader;
