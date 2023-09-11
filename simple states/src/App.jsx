import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  const [selectedApp, setSelectedApp] = useState(null);

  const renderSelectedApp = () => {
    switch (selectedApp) {
      case "counter":
        return <Counter />;
      case "todo":
        return <Todo />;
      default:
        return (
          <div>
            <h1>Welcome to My React App</h1>
            <button onClick={() => setSelectedApp("counter")}>
              Counter App
            </button>
            <button onClick={() => setSelectedApp("todo")}>To-Do List</button>
          </div>
        );
    }
  };

  const handleReturn = () => {
    setSelectedApp(null);
  };

  return (
    <div>
      {selectedApp ? (
        <div>
          {renderSelectedApp()}
          <button onClick={handleReturn}>Return to Home</button>
        </div>
      ) : (
        renderSelectedApp()
      )}
    </div>
  );
}

export default App;
