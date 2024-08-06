import React, { ReactNode, createContext, memo, useContext, useState } from "react";
import AccorditionItem from './AccordionItem';
type AccorditionItemType = {
  expanded:string
  setExpanded:(expanded:string) => void
}

const Accordion = createContext<AccorditionItemType | undefined>(undefined);
const AccordionItem = createContext<AccorditionItemType | undefined>(undefined);
const AccordionHeader = createContext<boolean | undefined>(undefined);
const AccordionPanel = createContext<boolean | undefined>(undefined);

export const useAccorditionContext = () => {
  const context = useContext(Accordion);
  return context;
};

export const useAccorditionItemContext = () => {
  const context = useContext(AccordionItem);
  return context;
};

export const useAccordionHeaderContext = () => {
  const context = useContext(AccordionHeader);
  return context;
};

export const useAccordionPanelContext = () => {
  const context = useContext(AccordionPanel);
  return context;
};

interface ProviderProps {
  children: ReactNode;
}

export const AccorditionProvider: React.FC<ProviderProps> = memo(({ children }) => {
  const [expanded, setExpanded] = useState<string>("");

  return <Accordion.Provider value={{expanded,setExpanded}}>{children}</Accordion.Provider>;
});
export const AccordionHeaderProvider: React.FC<ProviderProps> = memo(({
  children,
}) => {
  return (
    <AccordionHeader.Provider value={true}>{children}</AccordionHeader.Provider>
  );
});
export const AccordionPanelProvider: React.FC<ProviderProps> = memo(({
  children,
}) => {
  return (
    <AccordionPanel.Provider value={true}>{children}</AccordionPanel.Provider>
  );
});
type AccordionItemProviderprops ={
  children: ReactNode;
  value:string
}

export const AccordionItemProvider: React.FC<AccordionItemProviderprops> = memo(({
  children,
  value
}) => {
  const [expanded, setExpanded] = useState<string>(value);
  return (
    <AccordionItem.Provider value={{expanded,setExpanded}}>{children}</AccordionItem.Provider>
  );
});
