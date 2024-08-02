import React, { ReactNode, forwardRef } from "react";
type BaseLabelAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface ButtonProps extends BaseLabelAttributes {
    children: ReactNode;
  }
const Toast = forwardRef<Ref, ButtonProps>(({children,...props}, ref) => {
    return (
            <div {...props} ref={ref}>
                {children}
            </div>
    )
})
export default Toast;