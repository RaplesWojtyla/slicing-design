import { CiSearch, CiSun } from "react-icons/ci"
import MenuNavbar from "./MenuNavbar"

const MobileNavbar = () => {
	return (
		<>
			<div className="relative w-full">
				<input 
					type="text"
					placeholder="Find your plants"
					className="peer w-full pl-10 pr-3 py-2 border border-gray-300 rounded-[10px] text-sm focus:outline-none focus:ring-1 focus:ring-accent"
				/>
				<CiSearch className="absolute left-3 top-1/2 -translate-y-1/2  text-gray-400 peer-focus:text-accent" size={20} />
			</div>
			
			<div className="flex items-center gap-2">
				<button>
					<CiSun size={30} />
				</button>

				<MenuNavbar />
			</div>
		</>
	)
}

export default MobileNavbar