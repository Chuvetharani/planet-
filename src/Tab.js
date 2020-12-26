import React from "react";
import { Tabs } from "@feuer/react-tabs";
import "./styles.css";
import Planets from './Planets'

export default function App() {
  return (
    <div className="App">
      <Tabs
        tabsProps={{
          style: {
            textAlign: "center"
          }
        }}
        activeTab={{
          id: "tab1"
        }}
      >
        <Tabs.Tab id="tab1" title="Tab 1">
          <div style={{ padding: 10 }}>
            <Planets/>
          </div>
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Tab 2">
          <div style={{ padding: 10 }}>
            
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
