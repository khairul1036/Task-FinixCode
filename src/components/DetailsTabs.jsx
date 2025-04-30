"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import InfoTabContent from "./InfoTabContent";
import PlayerTabContent from "./PlayerTabContent";
import CommentsTabContent from "./CommentsTabContent";

const DetailsTabs = () => {
  return (
    <Tabs selectedTabClassName="tab-active">
      <TabList className="tab-list pt-11">
        <Tab className="tab-item">Info</Tab>
        <Tab className="tab-item">Player</Tab>
        <Tab className="tab-item">Comments</Tab>
      </TabList>

      <TabPanel>
        <InfoTabContent />
      </TabPanel>
      <TabPanel>
        <PlayerTabContent />
      </TabPanel>
      <TabPanel>
        <CommentsTabContent />
      </TabPanel>
    </Tabs>
  );
};

export default DetailsTabs;
