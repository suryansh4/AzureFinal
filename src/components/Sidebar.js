import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = () => {
  const [subscription, setSubscription] = useState("");
  const [resourceGroup, setResourceGroup] = useState("");
  const [resource, setResource] = useState("");
  const [pipeline, setPipeline] = useState("");

  // Options for the dropdowns (you'll need to replace these with your own data)
  const subscriptionOptions = [
    { key: "sub1", text: "Subscription 1", value: "sub1" },
    { key: "sub2", text: "Subscription 2", value: "sub2" },
    { key: "sub3", text: "Subscription 3", value: "sub3" },
  ];

  const resourceGroupOptions = [
    { key: "rg1", text: "Resource Group 1", value: "rg1" },
    { key: "rg2", text: "Resource Group 2", value: "rg2" },
    { key: "rg3", text: "Resource Group 3", value: "rg3" },
  ];

  const resourceOptions = [
    { key: "res1", text: "Resource 1", value: "res1" },
    { key: "res2", text: "Resource 2", value: "res2" },
    { key: "res3", text: "Resource 3", value: "res3" },
  ];

  const pipelineOptions = [
    { key: "pipe1", text: "Pipeline 1", value: "pipe1" },
    { key: "pipe2", text: "Pipeline 2", value: "pipe2" },
    { key: "pipe3", text: "Pipeline 3", value: "pipe3" },
  ];

  // Event handlers for when the dropdowns are changed
  const handleSubscriptionChange = (e, { value }) => {
    setSubscription(value);
  };

  const handleResourceGroupChange = (e, { value }) => {
    setResourceGroup(value);
  };

  const handleResourceChange = (e, { value }) => {
    setResource(value);
  };

  const handlePipelineChange = (e, { value }) => {
    setPipeline(value);
  };
 

  return (
    <div className="">
      <div className="dropdown">
        <h6 className="remove-margin btn-headings">Subscription</h6>
        <button
          class="remove-margin text-end buttontext btn border-primary text-dark dropdown-toggle dropdown-style"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="float-start">All</span>
        </button>

        <ul className="dropdown-menu">
          {subscriptionOptions.map((val, index) => {
            return <li key={index}>{val.text}</li>;
          })}
        </ul>
      </div>
      <div className="dropdown  ">
        <h6 className="remove-margin btn-headings">Resource Group</h6>
        <button
          class="remove-margin text-end buttontext btn border-primary text-dark dropdown-toggle dropdown-style"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="float-start">All</span>
        </button>
        <ul className="dropdown-menu">
          {resourceGroupOptions.map((val, index) => {
            return <li key={index}>{val.text}</li>;
          })}
        </ul>
      </div>
      <h6 className="remove-margin">Resources</h6>
      {/* button section */}
      <div className="choice">
        <button type="button" class="btn btn-costum btn-outline-primary" >
          ADF
        </button>
        <button type="button" class="btn btn-costum btn-outline-primary">
          ASA
        </button>
      </div>
      <div className="dropdown  ">
        <h6 className="remove-margin btn-headings">Workspace Name</h6>
        <button
          class="remove-margin text-end buttontext btn border-primary text-dark dropdown-toggle dropdown-style"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="float-start">All</span>
        </button>
        <ul className="dropdown-menu">
          {resourceGroupOptions.map((val, index) => {
            return <li key={index}>{val.text}</li>;
          })}
        </ul>
      </div>
      <div className="dropdown  ">
        <h6 className="remove-margin btn-headings">Last Run After</h6>
        <button
          class="remove-margin text-end buttontext btn border-primary text-dark dropdown-toggle dropdown-style"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="float-start">All</span>
        </button>
        <ul className="dropdown-menu">
          {resourceGroupOptions.map((val, index) => {
            return <li key={index}>{val.text}</li>;
          })}
        </ul>
      </div>
      <div className="dropdown  ">
        <h6 className="remove-margin btn-headings">Last Run Before</h6>
        <button
          class="remove-margin text-end buttontext btn border-primary text-dark dropdown-toggle dropdown-style"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="float-start">All</span>
        </button>
        <ul className="dropdown-menu">
          {resourceGroupOptions.map((val, index) => {
            return <li key={index}>{val.text}</li>;
          })}
        </ul>
      </div>
      <div className="dropdown  ">
        <h6 className="remove-margin btn-headings">Pipelines</h6>
        <button
          class="remove-margin text-end buttontext btn border-primary text-dark dropdown-toggle dropdown-style"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="float-start">All</span>
        </button>
        <ul className="dropdown-menu">
          {resourceGroupOptions.map((val, index) => {
            return <li key={index}>{val.text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
