import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTab";
import React, {useState} from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
 
const CustomTabs = () => {
    return (
        <div className="ContainerTabs">
          <Tabs className="Tabs">
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
     <TabPanel>
              <p>Tab 1 works!</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 2 works!</p>
            </TabPanel>
            <TabPanel>
              <p>Tab 3 works!</p>
            </TabPanel>
          </Tabs>
        </div>
      );
     }
      
//  return (
//    <div className="App">
//      <Tabs className="Tabs">
//        <TabList>
//          <Tab>Tab 1</Tab>
//          <Tab>Tab 2</Tab>
//          <Tab>Tab 3</Tab>
//        </TabList>
// <TabPanel>
//          <p>Tab 1 works!</p>
//        </TabPanel>
//        <TabPanel>
//          <p>Tab 2 works!</p>
//        </TabPanel>
//        <TabPanel>
//          <p>Tab 3 works!</p>
//        </TabPanel>
//      </Tabs>
//    </div>
//  );
// }
 
 
export default CustomTabs;