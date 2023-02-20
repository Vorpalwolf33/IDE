import { useState } from "react";

import Activitybar from "./components/Activitybar";
import PrimarySidebar from "./components/PrimarySidebar";
import OpenedEditors from "./components/OpenedEditors";
import WorkArea from "./components/WorkArea";


function App() {
  const [activeActivity, setActiveActivity] = useState(0)

  return (
    <div className="app d-flex flex-row vh-100 vw-100">
      <Activitybar activeActivity={activeActivity} setActiveActivity={setActiveActivity} />
      <PrimarySidebar activeActivity={activeActivity}/>
      <div className="flex-grow-1 d-flex flex-column justify-content-start w-100">
        <OpenedEditors />
        <WorkArea />
      </div>
    </div>
  );
}

export default App;
