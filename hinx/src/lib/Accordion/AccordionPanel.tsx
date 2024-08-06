import React, { ReactNode, forwardRef, memo } from "react";
import {
  AccordionPanelProvider,
  useAccorditionContext,
  useAccorditionItemContext,
} from "./AccordionContext";

type BaseAccordionAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AccordionProps extends BaseAccordionAttributes {
  children: ReactNode;
}

const AccorditionPanel = memo(forwardRef<Ref, AccordionProps>(
  ({ children, ...props }, ref) => {
    const context = useAccorditionItemContext();
    let AccordionContext = useAccorditionContext()
    if (!context || !AccordionContext) {
      throw new Error("AccorditionPanel must be a child of AccorditionItem");
    }
    return (
      <>
      {AccordionContext.expanded == context.expanded && <AccordionPanelProvider>
        <div {...props} ref={ref}>
                {children}
        </div>

      </AccordionPanelProvider>
      }
      </>
    );
  }
));
export default AccorditionPanel;
