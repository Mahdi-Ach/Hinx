import React, { forwardRef } from "react";
type BaseLabelAttributes = React.ComponentPropsWithoutRef<"label">;
type Ref = HTMLLabelElement;

const Label = forwardRef<Ref, BaseLabelAttributes>(({...props}, ref) => {
    return (
        <>
            <label {...props} ref={ref}/>
        </>
    )
})
export default Label;