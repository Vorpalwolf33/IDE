import activitybar from "../utils/activitybar";

const PrimarySidebar = ({activeActivity}) => {

	const showDirectoryContents = async (handle) => {
		for await (let [name, entry] of handle.entries()) {
			if(entry.kind === 'file') {
				console.log(name)
			}
			if(entry.kind === 'directory') {
				console.log(name + " + ")
				showDirectoryContents(entry)
			}
		}
	}

	const handleOpenFolder = () => {
		window.showDirectoryPicker()
			.then(handle => showDirectoryContents(handle))
			.catch(err => console.log(err))
	}

	return (
		<div className="primary-sidebar">
			<div>{activitybar[activeActivity]?.label}</div>
			<button onClick={handleOpenFolder}>Open Folder</button>
		</div>
	)
}

export default PrimarySidebar;