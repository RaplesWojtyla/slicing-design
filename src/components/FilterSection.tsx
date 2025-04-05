import { useState } from "react"
import Dropdown from "./Dropdown"

const FilterSection = () => {
	const [selected, setSelected] = useState<string>("All Plants")

	const options: Array<string> = [
		"All Plants",
		"New Arrivals",
		"Sale"
	]

	return (
		<>
			<div className="flex gap-6">
				{options.map(option => (
					<button
						key={option}
						className={`pt-1 pb-3 ${selected == option ? 'text-green-500 border-green-500 border-b-4' : ''} transition duration-300`}
						onClick={() => setSelected(option)}
					>
						{option}
					</button>
				))}
			</div>

			<div className="hidden tablet:inline">
				<Dropdown />
			</div>
		</>
	)
}

export default FilterSection