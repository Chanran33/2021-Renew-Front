import MapView from "./Pages/MapView/MapView";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="route">
        <Route path="/mapview" component={MapView} />
      </div>
    </div>
  );
}

export default App;
