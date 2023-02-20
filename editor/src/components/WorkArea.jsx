import Editor from '@monaco-editor/react';

const WorkArea = () => {
	return (
		<div className="flex-grow-1">

			<Editor 
				theme='vs-dark'
				defaultLanguage='javascript'
				defaultValue="// Some text"
				
			/>
		</div>
	)
}

export default WorkArea;