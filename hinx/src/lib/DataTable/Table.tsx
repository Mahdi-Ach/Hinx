import { ReactNode, forwardRef } from 'react';
import { TableProvider } from './TableContext';
import React from 'react';

type BaseTableAttributes = React.ComponentPropsWithoutRef<"table">;
type Ref = HTMLTableElement;
interface TableProps extends BaseTableAttributes {
  children: ReactNode
}

const Table = forwardRef<Ref, TableProps>(({ children, ...props }, ref) => {
  return (
    <TableProvider>
      <table ref={ref} {...props}>
        {children}
      </table>
    </TableProvider>
  );
});

export default Table;
