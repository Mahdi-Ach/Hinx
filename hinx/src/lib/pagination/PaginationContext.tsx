import React, { ReactNode, createContext, useContext } from "react";

const Pagination = createContext<boolean | undefined>(undefined);
const PaginationItem = createContext<boolean | undefined>(undefined);
const PaginationPrevious = createContext<boolean | undefined>(undefined);
const PaginationLink = createContext<boolean | undefined>(undefined);
const PaginationNext = createContext<boolean | undefined>(undefined);

export const usePaginationContext = () => {
  const context = useContext(Pagination);
  return context;
};
export const usePaginationItemContext = () => {
  const context = useContext(PaginationItem);
  return context;
};
export const usePaginationPreviousContext = () => {
  const context = useContext(PaginationPrevious);
  return context;
};
export const usePaginationLinkContext = () => {
  const context = useContext(PaginationLink);
  return context;
};
export const usePaginationNextContext = () => {
  const context = useContext(PaginationNext);
  return context;
};

interface ProviderProps {
  children: ReactNode;
}

export const PaginationProvider: React.FC<ProviderProps> = ({ children }) => {
  return <Pagination.Provider value={true}>{children}</Pagination.Provider>;
};

export const PaginationItemProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  return (
    <PaginationItem.Provider value={true}>{children}</PaginationItem.Provider>
  );
};
export const PaginationPreviousProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  return (
    <PaginationItem.Provider value={true}>{children}</PaginationItem.Provider>
  );
};
export const PaginationLinkProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  return (
    <PaginationLink.Provider value={true}>{children}</PaginationLink.Provider>
  );
};
export const PaginationNextProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  return (
    <PaginationNext.Provider value={true}>{children}</PaginationNext.Provider>
  );
};
