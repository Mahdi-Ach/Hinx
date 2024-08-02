import React, { ReactNode, forwardRef, memo } from "react";
import { TabsTriggerProvider, useTabListContext, useTabsContext } from "./TabContext";

type BaseTabTriggerAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface TabTriggerProps extends BaseTabTriggerAttributes {
    children: ReactNode;
    value:string
  }
  const TabTrigger = memo(forwardRef<Ref, TabTriggerProps>(
    ({ children,value, ...props }, ref) => {
      const context = useTabListContext();

      if (!context) {
        throw new Error("TabTrigger must be a child of TabsList");
      }
      const { setActiveTab } = useTabsContext();
      return (
      <TabsTriggerProvider>
        <div {...props} onClick={()=>{setActiveTab(value)}} ref={ref}>
            {children}
        </div>
      </TabsTriggerProvider>
      );
    }
  ))
  export default TabTrigger;