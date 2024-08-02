import TabContent from "./TabContent";
import { TabListProvider, TabsProvider } from "./TabContext";
import TabsTrigger from "./TabsTrigger";
import Tabs from "./Tabs";
import TabList from './TabList';

const TabDemo = () => {
  return (
    <Tabs>
      <TabList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="account">Password</TabsTrigger>
      </TabList>
      <TabContent value="account">dsq</TabContent>
      <TabContent value="account">dsaaaq</TabContent>
    </Tabs>
  );
};
export default TabDemo;
