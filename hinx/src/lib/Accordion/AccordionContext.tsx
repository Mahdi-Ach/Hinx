import React, { ReactNode, createContext, useContext } from "react";


const Accordion = createContext<boolean | undefined>(undefined);
const AccordionItem = createContext<boolean | undefined>(undefined);
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

export const AccorditionProvider: React.FC<ProviderProps> = ({ children }) => {

  return <Accordion.Provider value={true}>{children}</Accordion.Provider>;
};
export const AccordionHeaderProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  return (
    <AccordionHeader.Provider value={true}>{children}</AccordionHeader.Provider>
  );
};
export const AccordionPanelProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  return (
    <AccordionPanel.Provider value={true}>{children}</AccordionPanel.Provider>
  );
};
interface AccordionItemProviderprops {
  children: ReactNode;
}
export const AccordionItemProvider: React.FC<AccordionItemProviderprops> = ({
  children,
}) => {
  return (
    <AccordionItem.Provider value={true}>{children}</AccordionItem.Provider>
  );
};
