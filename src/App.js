import ResponsiveDrawer from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

const subscriptions = ["Subscription 1", "Subscription 2", "Subscription 3"];
const resourceGroups = [
  "Resource Group 1",
  "Resource Group 2",
  "Resource Group 3",
];
const resources = ["Resource 1", "Resource 2", "Resource 3"];
const otherOptions = ["Option 1", "Option 2", "Option 3"];

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Sidebar
          subscriptions={subscriptions}
          resourceGroups={resourceGroups}
          resources={resources}
          otherOptions={otherOptions}
        />
        <h1>Main Content</h1>
      </header>
    </div>
  );
}

export default App;
