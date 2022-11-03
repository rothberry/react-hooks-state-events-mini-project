import React, { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

import { CATEGORIES, TASKS } from "../data"
console.log("Here's the data you're working with")
console.log({ CATEGORIES, TASKS })

function App() {
	const [filteredCategory, setFilteredCategory] = useState("All")
	const [tasks, setTasks] = useState(TASKS)

	const filteredTasks = () => {
		if (filteredCategory === "All") {
			return tasks
		} else {
			return tasks.filter((t) => {
				return t.category === filteredCategory
			})
		}
	}

	const removeTask = (taskText) => {
		const newTasks = tasks.filter((task) => {
			return task.text !== taskText
		})
		console.log({ newTasks })
		setTasks(newTasks)
	}

	const addTask = (newTaskObj) => {
		// ! tasks.push(newTaskObj)
		// ! DON"T WANT TO PUSH BECAUSE IT IS A DESTRUCTIVE METHOD
		const newTasks = [...tasks, newTaskObj]
		setTasks(newTasks)
	}

	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter
				categories={CATEGORIES}
				setFilteredCategory={setFilteredCategory}
				filteredCategory={filteredCategory}
			/>
			<NewTaskForm
				categories={CATEGORIES.slice(1)}
				addTask={addTask}
				tasks={tasks}
				setTasks={setTasks}
			/>
			{/* <TaskList tasks={TASKS} /> */}
			<TaskList
				tasks={filteredTasks()}
				removeTask={removeTask}
				allTasks={tasks}
				setAllTasks={setTasks}
			/>
		</div>
	)
}

export default App
