import ToolbarData from '../utils/toolbar';

const Toolbar = () => {

	return (
		<div className="toolbar d-flex flex-row justify-content-start ">
			{/* {
				ToolbarData && Array.isArray(ToolbarData) && ToolbarData.map((item, index) => {
					return (
						<div className="toolbar-item" key={index}>
							{item.name}
						</div>
					)
				})
			} */}
		</div>
	)
}

export default Toolbar;