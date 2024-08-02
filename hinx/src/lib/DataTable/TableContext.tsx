import React, { ReactNode, createContext, useContext } from 'react';

const TableContext = createContext<boolean | undefined>(undefined);
const TableRowContext = createContext<boolean | undefined>(undefined);
const TableCellContext = createContext<boolean | undefined>(undefined);
const TableBodyContext = createContext<boolean | undefined>(undefined);
const TableHeaderContext = createContext<boolean | undefined>(undefined);

export const useTableContext = () => {
  const context = useContext(TableContext);
   return context;
};

export const useTableRowContext = () => {
  const context = useContext(TableRowContext);
   return context;
};
export const useTableBodyContext = () => {
  const context = useContext(TableBodyContext);
   return context;
};
export const useTableHeaderContext = () => {
  const context = useContext(TableHeaderContext);
   return context;
};
export const useTableCellContext = () => {
  const context = useContext(TableCellContext);
  return context;
};
interface ProviderProps {
  children: ReactNode;
}

export const TableProvider: React.FC<ProviderProps> = ({ children }) => {
  return <TableContext.Provider value={true}>{children}</TableContext.Provider>;
};

export const TableRowProvider: React.FC<ProviderProps> = ({ children }) => {
  return <TableRowContext.Provider value={true}>{children}</TableRowContext.Provider>;
};
export const TableBodyProvider: React.FC<ProviderProps> = ({ children }) => {
  return <TableBodyContext.Provider value={true}>{children}</TableBodyContext.Provider>;
};

export const TableHeaderProvider: React.FC<ProviderProps> = ({ children }) => {
  return <TableHeaderContext.Provider value={true}>{children}</TableHeaderContext.Provider>;
};
export const TableCellProvider: React.FC<ProviderProps> = ({ children }) => {
  return <TableCellContext.Provider value={true}>{children}</TableCellContext.Provider>;
};
