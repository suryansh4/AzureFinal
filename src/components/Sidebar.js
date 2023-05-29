import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import "./Sidebar.css"
const Sidebar = () => {
  const [subscription, setSubscription] = useState("All");
  const [resourceGroup, setResourceGroup] = useState("All");
  const [resource, setResource] = useState("All");
  const [pipeline, setPipeline] = useState("All");
 
  const before = []
  const after = []
  // Event handlers for when the dropdowns are changed
  const handleSubscriptionChange = (value) => {
    setSubscription(value);
  };

  const handleResourceGroupChange = (value ) => {
    setResourceGroup(value);
  };

  const handleResourceChange = (value) => {
    setResource(value);
  };

  const handlePipelineChange = (value) => {
    setPipeline(value);
  };
  const convertData1 = (data) => {
    const convertedData = [];
    for (const key in data) {
      convertedData.push({
        key: key,
        text: data[key],
        value: data[key],
      });
    }
    return convertedData;
  };

    const [subscriptionOptions, setSubscriptionResponseOptions] = useState([]);
  
    const handleSubscriptionButtonClick = () => {
      fetch('http://192.168.2.43:5000/')
        .then(response => response.json())
        .then(data => {
          setSubscriptionResponseOptions(convertData1(data));
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
    


    const convertData2 = (data,option) => {
      const convertedData = [];
      for (const val in data) {
        convertedData.push({
          key:  val,
          text: option,
          value: data[val],
        });
        console.log(convertedData[convertedData.length-1])
      }
    
      return convertedData;
    };
    const [resourceGroupOptions, setResourceResponseOptions] = useState([]);
    const handleSubscriptionOptionClick = (option, option2) => {
      setSubscription(option2)
      fetch('http://192.168.2.43:5000/resourceGroup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({option})
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)           
          setResourceResponseOptions(convertData2(data,option));
        })
        .catch(error => {
          console.error('Error sending data to Flask:', error);
        });
    };


    const convertData3 = (data,option,subs) => {
      const convertedData = [];
      for (const val in data) {
        convertedData.push({
          key: data[val] ,
          text: option,
          value: subs,
        });
        console.log(convertedData[convertedData.length-1])
      }
    
      return convertedData;
    };
    const [ADFOptions, setADFResponseOptions] = useState([]);
    const handleResourceGroupOptionClick = (subscription, ResourceGroup) => {
      setResourceGroup(ResourceGroup)
      fetch('http://192.168.2.43:5000/ADF', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({subscription,ResourceGroup})
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)           
          setADFResponseOptions(convertData3(data,ResourceGroup,subscription));
        })
        .catch(error => {
          console.error('Error sending data to Flask:', error);
        });
    };
    
    const convertData4 = (data,option,adf,subs) => {
      const convertedData = [];
      for (const val in data) {
        convertedData.push({
          key: val ,
          text: subs+"*"+option+"*"+adf,
          value: data[val],
        });
        console.log(convertedData[convertedData.length-1])
      }
    
      return convertedData;
    };
    
    const [PipelineOptions, setPipelineResponseOptions] = useState([]);
    const handleADFOptionClick = (ADF, ResourceGroup,subscription) => {
      setResource(ADF)
      fetch('http://192.168.2.43:5000/Pipeline', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ADF,subscription,ResourceGroup})
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)           
          setPipelineResponseOptions(convertData4(data,ResourceGroup,ADF,subscription));
        })
        .catch(error => {
          console.error('Error sending data to Flask:', error);
        });
    };
    const handlePipelineClick =(pipeline)=>{
      setPipeline(pipeline)
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
          <span className="float-start">{subscription}</span>
        </button>

        <ul className="dropdown-menu">
          {subscriptionOptions.map((val) => {
            return (
              <li
                key={val.text}
                onClick={() => handleSubscriptionOptionClick(val.value, val.key)}
              >
                {val.key} : {val.value}
              </li>
            );
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
          <span class="float-start">{resourceGroup}</span>
        </button>
        <ul className="dropdown-menu">
          {resourceGroupOptions.map((val) => {
            return (
              <li
                key={val}
                onClick={() =>
                  handleResourceGroupOptionClick(val.text, val.value)
                }
              >
                {val.value}
              </li>
            );
          })}
        </ul>
      </div>
      <h6 className="remove-margin">Resources</h6>
      <div className="choice">
        <button type="button" class="btn btn-costum btn-outline-primary">
          ADF
        </button>
        <button
          onClick={handleSubscriptionButtonClick}
          type="button"
          class="btn btn-costum btn-outline-primary"
        >
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
          <span class="float-start">{resource}</span>
        </button>
        <ul className="dropdown-menu">
          {ADFOptions.map((val) => {
            return (
              <li
                key={val.key}
                onClick={() =>
                  handleADFOptionClick(val.key, val.text, val.value)
                }
              >
                {val.key}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="dropdown  ">
        <h6 className="remove-margin btn-headings">Last Run After</h6>
        <input
          type="datetime-local"
          className="time-input remove-margin text-end buttontext btn border-primary text-dark dropdown-style"
          id="lastRunBefore"
        />
      </div>
      <div className="dropdown  ">
        <h6 className="time-input remove-margin btn-headings">Last Run Before</h6>
        <input
          type="datetime-local"
          className="remove-margin text-end buttontext btn border-primary text-dark dropdown-style"
          id="lastRunBefore"
        />
      </div>
      <div className="dropdown  ">
        <h6 className="remove-margin btn-headings">Pipelines</h6>
        <button
          class="remove-margin text-end buttontext btn border-primary text-dark dropdown-toggle dropdown-style"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="float-start">{pipeline}</span>
        </button>
        <ul className="dropdown-menu">
          {PipelineOptions.map((val) => {
            return <li key={val.key} onClick={()=>{handlePipelineClick(val.value)}}>{val.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

