import { ReactNode, forwardRef } from 'react';
import { TableHeaderProvider, useTableContext } from './TableContext';
import React from 'react';

type BaseTHeadAttributes = React.ComponentPropsWithoutRef<"thead">;
type Ref = HTMLTableSectionElement;
interface TheadProps extends BaseTHeadAttributes {
  children: ReactNode;
}

const THead = forwardRef<Ref, TheadProps>(({ children, ...props }, ref) => {
  const isTable = useTableContext();
  if (!isTable) {
    throw new Error('TableHeader must be used within a Table');
  }

  return (
    <TableHeaderProvider>
    <thead ref={ref} {...props} className="custom-table-header">
      {children}
    </thead>

    </TableHeaderProvider>
  );
});

export default THead;
