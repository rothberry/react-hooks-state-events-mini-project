import React from "react"

const CategoryButton = ({
	category,
	setFilteredCategory,
	filteredCategory,
}) => {
	const handleCatChange = (e) => {
		console.log(category)
		setFilteredCategory(category)
	}

	return (
		<button
			onClick={handleCatChange}
			className={category === filteredCategory ? "selected" : ""}
		>
			{category}
		</button>
	)
}

export default CategoryButton
