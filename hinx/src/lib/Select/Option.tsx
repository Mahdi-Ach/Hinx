import { ReactNode, forwardRef } from "react";
import React from "react";
import { OptionProvider, useSelectContext } from "./SelectContext";

type OptionAttributes = React.ComponentPropsWithoutRef<"option">;
type Ref = HTMLOptionElement;

interface OptionProps extends OptionAttributes {
    children: ReactNode;
  }
  
  const Option = forwardRef<Ref, OptionProps>(
    ({ children, ...props }, ref) => {
      const context = useSelectContext()
      if(!context){
        throw new Error("Option must be used inside Select");
      }
      return (
        <OptionProvider>
            <option {...props} ref={ref}>
                {children}
            </option>
        </OptionProvider>
      );
    }
  );
export default Option;