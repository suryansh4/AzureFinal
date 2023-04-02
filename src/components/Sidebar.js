import React, { useState } from "react";
import Dropdown from "./Sidebar";

const Sidebar = ({
  subscriptions,
  resourceGroups,
  resources,
  otherOptions,
}) => {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [selectedResourceGroup, setSelectedResourceGroup] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedOtherOption, setSelectedOtherOption] = useState(null);

  const handleSubscriptionSelect = (option) => {
    setSelectedSubscription(option);
  };

  const handleResourceGroupSelect = (option) => {
    setSelectedResourceGroup(option);
  };

  const handleResourceSelect = (option) => {
    setSelectedResource(option);
  };

  const handleOtherOptionSelect = (option) => {
    setSelectedOtherOption(option);
  };

  return (
    <div className="sidebar">
      <h2>Filter by:</h2>
      <Dropdown options={subscriptions} onSelect={handleSubscriptionSelect} />
      <Dropdown options={resourceGroups} onSelect={handleResourceGroupSelect} />
      <Dropdown options={resources} onSelect={handleResourceSelect} />
      <Dropdown options={otherOptions} onSelect={handleOtherOptionSelect} />
    </div>
  );
};

export default Sidebar;
