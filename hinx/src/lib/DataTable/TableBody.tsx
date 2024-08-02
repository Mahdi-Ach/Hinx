import { ReactNode, forwardRef } from 'react';
import { TableBodyProvider, useTableContext } from './TableContext';
import React from 'react';

type BaseTBodyAttributes = React.ComponentPropsWithoutRef<"tbody">;
type Ref = HTMLTableSectionElement;
interface TbodyProps extends BaseTBodyAttributes {
  children: ReactNode;

}
const TBody = forwardRef<Ref, TbodyProps>(({ children, ...props }, ref) => {
  const isTable = useTableContext();
  if (!isTable) {
    throw new Error('TableHeader must be used within a Table');
  }

  return (
    <TableBodyProvider>
        <tbody ref={ref} {...props}>
            {children}
        </tbody>
    </TableBodyProvider>
  );
});

export default TBody;
