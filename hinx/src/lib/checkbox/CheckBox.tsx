import React, { forwardRef } from "react";
type BaseCheckBoxAttributes = React.ComponentPropsWithoutRef<"input">;
type Ref = HTMLInputElement;

const CheckBox = forwardRef<Ref, BaseCheckBoxAttributes>(({...props}, ref) => {
    return (
        <>
            <input type="checkbox" {...props} ref={ref}/>
        </>
    )
})
export default CheckBox;