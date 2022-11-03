import React from "react"
import CategoryButton from "./CategoryButton"

function CategoryFilter({ categories, setFilteredCategory, filteredCategory }) {
	const mappedButtons = () => {
		return categories.map((category, idx) => {
			return (
				<CategoryButton
					category={category}
					key={idx}
					setFilteredCategory={setFilteredCategory}
					filteredCategory={filteredCategory}
				/>
			)
		})
	}

	return (
		<div className="categories">
			<h5>Category filters</h5>
			{/* render <button> elements for each category here */}
			{mappedButtons()}
		</div>
	)
}

export default CategoryFilter
