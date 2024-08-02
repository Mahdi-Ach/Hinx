import React, { ReactNode, forwardRef, memo } from "react";
import { TabsContentProvider, useTabsContext } from "./TabContext";

type BaseTabContentAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface TabContentProps extends BaseTabContentAttributes {
    children: ReactNode;
    value:string
  }
  const TabContent = memo(forwardRef<Ref, TabContentProps>(
    ({ children,value, ...props }, ref) => {
      const context  = useTabsContext();
      if (!context) {
          throw new Error("TabContent must be a child of Tabs");
        }
      return (
        <>
            {value === context.activeTab && (
              <TabsContentProvider>
                <div {...props} ref={ref}>
                    {children}
                </div>

              </TabsContentProvider>

            )}
        </>
      );
    }
  ))
  export default TabContent;