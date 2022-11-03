import React from "react"
import Task from "./Task"

function TaskList({ tasks, removeTask, allTasks, setAllTasks }) {
	// const firstTask = props.tasks[0]
	// console.log("INSIDE TASKLIST", props.tasks)
	// console.log({ firstTask: firstTask })
	// console.log({ firstTask })

	const mappedTasks = () => {
		return tasks.map((task, idx) => {
			return (
				<Task
					category={task.category}
					text={task.text}
					key={idx}
					removeTask={removeTask}
					allTasks={allTasks}
					setAllTasks={setAllTasks}
				/>
			)
			// return <Task task={task} />
		})
	}

	return (
		<div className="tasks">
			{/* display a list of tasks using Task component */}

			{/* <Task category={firstTask.category} text={firstTask.text} />
			<Task category={props.tasks[1].category} text={props.tasks[1].text} />
			<Task category={props.tasks[2].category} text={props.tasks[2].text} /> */}

			{mappedTasks()}

			{/* {tasks.map((task, idx) => <Task category={task.category} text={task.text} key={idx} />)} */}
		</div>
	)
}

export default TaskList
