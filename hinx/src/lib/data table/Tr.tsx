import React, { ReactNode, forwardRef } from "react";
import { TableRowProvider, useTableBodyContext, useTableHeaderContext } from "./TableContext";

type BaseRowAttributes = React.ComponentPropsWithoutRef<"tr">;
type Ref = HTMLTableRowElement;
interface RowProps extends BaseRowAttributes {
  children: ReactNode
}

const Tr = forwardRef<Ref, RowProps>(({ children, ...props }, ref) => {
  const isTableBody = useTableBodyContext();
  const isTableHead = useTableHeaderContext();

  if (!isTableBody && !isTableHead) {
    throw new Error("Tr must be used within a Tbody or head");
  }

  return (
    <TableRowProvider>
      <tr ref={ref} {...props}>{children}</tr>
    </TableRowProvider>
  );
});

export default Tr;
