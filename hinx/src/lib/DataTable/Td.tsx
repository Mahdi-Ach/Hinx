import React, { ReactNode, forwardRef } from "react";
import { TableCellProvider, useTableRowContext } from "./TableContext";
type BaseCellAttributes = React.ComponentPropsWithoutRef<"td">;
type Ref = HTMLTableCellElement;
interface TableCellProps extends BaseCellAttributes {
  children: ReactNode
}

  
  const Td = forwardRef<Ref, TableCellProps>(({ children, ...props }, ref) => {
    const isTable = useTableRowContext();
  
    if (!isTable) {
      throw new Error('Td must be used within a Tr');
    }
  
    return (
      <TableCellProvider>
        <td  ref={ref} {...props}>
          {children}
        </td>
      </TableCellProvider>
    );
  });
  
  export default Td;