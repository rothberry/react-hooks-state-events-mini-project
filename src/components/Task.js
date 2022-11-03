import React from "react"

function Task({ category, text, removeTask, allTasks, setAllTasks }) {
	// const category = props.task.category
	// const text = props.task.text

	// const category = props.category
	// const text = props.text

	const handleRemoveTask = (e) => {
		console.log("clicked", text)
		// removeTask(text)
		const newTasks = allTasks.filter((task) => {
			return task.text !== text
		})
		setAllTasks(newTasks)
	}

	return (
		<div className="task">
			<div className="label">{category}</div>
			<div className="text">{text}</div>
			<button className="delete" onClick={handleRemoveTask}>
				X
			</button>
		</div>
	)
}

export default Task
