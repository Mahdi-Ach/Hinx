import React, { ReactNode, forwardRef } from "react";
type BaseLabelAttributes = React.ComponentPropsWithoutRef<"input">;
type Ref = HTMLInputElement;
interface ButtonProps extends BaseLabelAttributes {
    children: ReactNode;
  }
const Input = forwardRef<Ref, ButtonProps>(({children,...props}, ref) => {
    return (
        <>
            <input {...props} ref={ref} />
         </>
    )
})
export default Input;