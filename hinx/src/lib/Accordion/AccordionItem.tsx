import * as Accordions from '@radix-ui/react-accordion';
import React, { ReactNode, forwardRef } from "react";
import { AccordionItemProvider, useAccorditionContext } from "./AccordionContext";

type BaseAccordionAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AccordionProps extends BaseAccordionAttributes {
  children: ReactNode;
  value:string
}

const AccorditionItem = forwardRef<Ref, AccordionProps>(({value,children, ...props }, ref) => {
    const context = useAccorditionContext()
    if(!context){
        throw new Error("AccorditionItem must be used inside Accordition")
    }
    return(
        <AccordionItemProvider>
            <Accordions.Item ref={ref} value={value}>
                {children}
            </Accordions.Item>
        </AccordionItemProvider>
    )
})
export default AccorditionItem