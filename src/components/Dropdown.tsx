import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selected, setSelected] = useState<string>("Default Sorting")

	const options: Array<string> = [
		"Default Sorting",
		"Price: Low to High",
		"Price: High to Low",
		"Popular"
	]

	const handleSelect = (selectedOption: string) => {
		setSelected(selectedOption)
		setIsOpen(false)
	}

	return (
		<div className="relative inline-block text-left">
			<button
				className="font-normal inline-flex items-center border border-gray-300 px-4 py-2 rounded-md"
				onClick={() => setIsOpen(prev => !prev)}
			>
				Sort by: <span className="mx-4">{selected}</span>
				{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</button>

			{isOpen && (
				<div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
					<ul className="py-1 text-base font-normal text-gray-700">
						{options.map(option => (
							<li
								key={option}
								className="py-2 px-5 cursor-pointer border-b hover:bg-gray-200"
								onClick={() => handleSelect(option)}
							>
								{option}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Dropdown