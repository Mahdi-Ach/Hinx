import React, { ReactNode, forwardRef, memo } from "react";
import { AccordionItemProvider, useAccorditionContext } from "./AccordionContext";

type BaseAccordionAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AccordionProps extends BaseAccordionAttributes {
  children: ReactNode;
  value:string
}

const AccorditionItem = memo(forwardRef<Ref, AccordionProps>(({value,children, ...props }, ref) => {
    const context = useAccorditionContext()
    if(!context){
        throw new Error("AccorditionItem must be used inside Accordition")
    }
    console.log(context)
    return(
        <AccordionItemProvider value={value}>
            <div ref={ref} {...props}>
                {children}
            </div>
        </AccordionItemProvider>
    )
}))
export default AccorditionItem