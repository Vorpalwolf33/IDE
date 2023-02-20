import { useState } from "react";
import ToolbarData from '../utils/toolbar';
import Toolbar from "./Toolbar";
import activitybar from '../utils/activitybar';

const Activitybar = ({activeActivity, setActiveActivity}) => {
	const [toggleToolbar, setToggleToolbar] = useState(false)

	return (
		<div className="activitybar d-flex flex-column justify-content-start">
			{
				activitybar && Array.isArray(activitybar) && activitybar.map((item, index) => {
					return (
						<div key={index} className={`activity-item position-relative ${index === activeActivity?"active":"inactive"}`} onClick={() => setActiveActivity(index)}>
							{item.icon}
						</div>
					)
				})
			}

		</div>
	)
}

export default Activitybar;