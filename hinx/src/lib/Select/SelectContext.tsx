import React,{ ReactNode, createContext, useContext } from "react";
interface ProviderProps {
    children: ReactNode;
  }
const Select = createContext<boolean | undefined>(undefined);
const Option = createContext<boolean | undefined>(undefined);

export const useSelectContext = () => {
    const context = useContext(Select);
    return context;
};
export const useOptionContext = () => {
    const context = useContext(Option);
    return context;
};
export const SelectProvider: React.FC<ProviderProps> = ({ children }) => {
    return <Select.Provider value={true}>{children}</Select.Provider>;
};
  export const OptionProvider: React.FC<ProviderProps> = ({ children }) => {
    return <Option.Provider value={true}>{children}</Option.Provider>;
};