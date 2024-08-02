import React, { ReactNode, forwardRef } from "react";
import { TabListProvider, useTabsContext } from "./TabContext";

type BaseTabListAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface TabListProps extends BaseTabListAttributes {
    children: ReactNode;
  }
  const TabList = forwardRef<Ref, TabListProps>(
    ({ children, ...props }, ref) => {
      const context = useTabsContext();

      if (!context) {
        throw new Error("TabList must be a child of Tabs");
      }
  
      return (
        <TabListProvider>
        <div {...props} ref={ref}>
            {children}
        </div>

        </TabListProvider>
      );
    }
  );
  export default TabList;