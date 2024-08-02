import React, { ReactNode, forwardRef } from "react";
type BaseLabelAttributes = React.ComponentPropsWithoutRef<"button">;
type Ref = HTMLButtonElement;
interface ButtonProps extends BaseLabelAttributes {
    children: ReactNode;
  }
const Button = forwardRef<Ref, ButtonProps>(({children,...props}, ref) => {
    return (
        <>
            <button {...props} ref={ref}>
             {children}
             </button>
         </>
    )
})
export default Button;