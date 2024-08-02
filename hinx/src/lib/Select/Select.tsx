import { ReactNode, forwardRef } from "react";
import { SelectProvider } from './SelectContext';
import React from "react";

type BaseSelectAttributes = React.ComponentPropsWithoutRef<"select">;
type Ref = HTMLSelectElement;

interface SelectProps extends BaseSelectAttributes {
    children: ReactNode;
  }
  
  const Select = forwardRef<Ref, SelectProps>(
    ({ children, ...props }, ref) => {
      
      return (
        <SelectProvider>
          <select {...props} ref={ref}>

          {children}

          </select>

        </SelectProvider>
      );
    }
  );
export default Select;