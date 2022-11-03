import { useState } from "react"

function NewTaskForm({ categories, addTask, tasks, setTasks }) {
	const [details, setDetails] = useState("")
	const [category, setCategory] = useState(categories[0])

	const handleDetailsChange = (e) => {
		setDetails(e.target.value)
	}

	const handleCatChange = (e) => {
		setCategory(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newTask = { text: details, category: category }
		// addTask(newTask)
		setTasks([...tasks, newTask])
	}

	// form.addEventListener("submit"...)
	return (
		<form className="new-task-form" onSubmit={handleSubmit}>
			<label>
				Details
				<input
					type="text"
					name="text"
					value={details}
					onChange={handleDetailsChange}
				/>
			</label>
			<label>
				Category
				<select name="category" value={category} onChange={handleCatChange}>
					{/* render <option> elements for each category here */}
					{categories.map((cat) => (
						<option value={cat}>{cat}</option>
					))}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	)
}

export default NewTaskForm
