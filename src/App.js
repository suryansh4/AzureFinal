import ResponsiveDrawer from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes , Route } from "react-router-dom";

const subscriptions = ["Subscription 1", "Subscription 2", "Subscription 3"];
const resourceGroups = [
  "Resource Group 1",
  "Resource Group 2",
  "Resource Group 3",
];
const resources = ["Resource 1", "Resource 2", "Resource 3","Resource 4"];
const otherOptions = ["Option 1", "Option 2", "Option 3"];

function App() {
  return (
    <div>
    
      <Dashboard />
        
     
    </div>
  );
}

export default App;
