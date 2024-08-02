import React, { ReactNode, forwardRef } from "react";
type BaseLabelAttributes = React.ComponentPropsWithoutRef<"textarea">;
type Ref = HTMLTextAreaElement;
interface ButtonProps extends BaseLabelAttributes {
    children: ReactNode;
  }
const Input = forwardRef<Ref, ButtonProps>(({children,...props}, ref) => {
    return (
        <>
            <textarea {...props} ref={ref} />
         </>
    )
})
export default Input;