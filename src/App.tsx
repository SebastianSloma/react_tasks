import React, { useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
	name: string;
	done: boolean;
}
function App(): JSX.Element {
	const [newTask, setNewTask] = useState<string>('');
	const [tasks, setTasks] = useState<ITask[]>([]);

	const handleSubmit = (e: FormElement) => {
		e.preventDefault();
		addTask(newTask);
		setNewTask('');
	};
	const addTask = (name: string) => {
		const newTasks: ITask[] = [...tasks, { name, done: false }];
		setTasks(newTasks);
	};

	const toggleDoneTask = (i:number) => {
		const newTasks: ITask[] = [...tasks];
		newTasks[i].done = !newTasks[i].done
		setTasks(newTasks)
	};

	return (
		<div className='container p-4'>
			<div className='row'>
				<div className='col-md-6 offset-md-3'>
					<div className='card'>
						<div className='card-body'>
							<form onSubmit={handleSubmit}>
								<input
									type='text'
									onChange={e => setNewTask(e.target.value)}
									value={newTask}
									className='form-control'
									autoFocus
								/>
								<button className='btn btn-success btn-block mt-2'>Save</button>
							</form>
						</div>
					</div>
					{tasks.map((t: ITask, i: number) => (
						<div className='card card-body mt-2' key={i}>
							<h2 style={{ textDecoration: t.done ? 'line-through' : '' }}>
								{t.name}
							</h2>
							<div>
								<button className='btn btn-secondary' onClick={()=>toggleDoneTask(i)}>
									{t.done ? 'OK' : 'X'}
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
