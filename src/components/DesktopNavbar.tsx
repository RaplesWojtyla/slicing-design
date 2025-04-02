import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
// import { CiSun } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

const DesktopNavbar = () => {
	return (
		<header className="hidden md:flex justify-between items-center border-b pb-6">
			<div className="max-w-[150px]">
				<img src="Logo.png" className="size-full" alt="greenshop-logo" />
			</div>

			<ul className="relative flex justify-center items-center gap-6">
				<li className="relative">
					<a 
						className="hover:text-accent hover:font-bold inline-block border-b border-transparent"
						href=""
					>
						Home
					</a>
				</li>
				<li className="relative">
					<a 
						className="hover:text-accent hover:font-bold inline-block border-b border-transparent"
						href=""
					>
						Shop
					</a>
				</li>
				<li className="relative">
					<a 
						className="hover:text-accent hover:font-bold inline-block border-b border-transparent"
						href=""
					>
						Plant Care
					</a>
				</li>
				<li className="relative">
					<a 
						className="hover:text-accent hover:font-bold inline-block border-b border-transparent"
						href=""
					>
						Blogs
					</a>
				</li>
			</ul>

			<div className="flex items-center gap-x-7">
				{/* <button className="size-7 flex justify-center items-center rounded-md">
					<CiSun className="size-7" />
				</button> */}
				<button className="size-5">
					<BsSearch className="size-5" />
				</button>
				<button className="size-5">
					<AiOutlineShoppingCart className="size-5" />
				</button>
				<button className="bg-accent/85 hover:bg-accent flex justify-center items-center gap-x-2 w-[100px] h-[35px] rounded-md text-white">
					<MdOutlineLogout />
					Logout
				</button>
			</div>
		</header>
	)
}

export default DesktopNavbar