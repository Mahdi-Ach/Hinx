import React, { ReactNode, forwardRef } from "react";
import { TabsProvider } from './TabContext';

type BaseTabsAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface TabsProps extends BaseTabsAttributes {
    children: ReactNode;
  }
  const Tabs = forwardRef<Ref, TabsProps>(
    ({ children, ...props }, ref) => {  
        console.log("tabs rendered")

      return (
        <TabsProvider>
        <div className="qq" {...props} ref={ref}>
            {children}
        </div>
        </TabsProvider>
      );
    }
  );
  export default Tabs;