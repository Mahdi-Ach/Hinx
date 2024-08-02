import React,{ createContext, memo, useContext, useState } from "react";
interface TabsContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }
const Tabs = createContext<TabsContextType | undefined>(undefined)
const TabList = createContext<boolean | undefined>(undefined)
const TabsTrigger = createContext<boolean | undefined>(undefined)
const TabsContent = createContext<boolean | undefined>(undefined)

export const useTabsContext = () => {
  const context = useContext(Tabs)
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context
}

export const useTabListContext = () => {
  const context = useContext(TabList)
  if (!context) {
    throw new Error('useTabsList must be used within a TabsListProvider');
  }
  return context;
}

export const useTabsTriggerContext = () => {
  const context = useContext(TabsTrigger)
  return context
}

export const useTabsContentContext = () => {
  const context = useContext(TabsContent)
  return context
}

interface ProviderProps {
  children: React.ReactNode
}

export const TabsProvider: React.FC<ProviderProps> = memo(({ children }) => {
    const [activeTab, setActiveTab] = useState<string>("");

  return <Tabs.Provider value={{activeTab,setActiveTab}}>{children}</Tabs.Provider>
})

export const TabListProvider: React.FC<ProviderProps> = memo(({ children }) => {
  return <TabList.Provider value={true}>{children}</TabList.Provider>
})

export const TabsTriggerProvider: React.FC<ProviderProps> = ({ children }) => {
  return <TabsTrigger.Provider value={true}>{children}</TabsTrigger.Provider>
}

export const TabsContentProvider: React.FC<ProviderProps> = ({ children }) => {
  return <TabsContent.Provider value={true}>{children}</TabsContent.Provider>
}
