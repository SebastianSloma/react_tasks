import React, { Fragment, useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
function App(): JSX.Element {
	const [newTask, setNewTask] = useState<string>("");
	const [tasks,setTasks] = useState([])

	const handleSubmit = (e: FormElement) => {
		e.preventDefault();
	};
	const addTask = (name:string)=>{
		const newTasks =[...tasks, {name, done:false}]
		setTasks(newTasks)
	}

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={e => setNewTask(e.target.value)} />
				<button>Save</button>
			</form>
		</Fragment>
	);
}

export default App;
