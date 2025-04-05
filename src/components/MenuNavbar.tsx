import { useRef } from "react"
import { HiOutlineBars4 } from "react-icons/hi2"
import { MdOutlineLogout } from "react-icons/md"
import { RiCloseLargeFill } from "react-icons/ri"

const MenuNavbar = () => {
	const menuRef = useRef<HTMLUListElement>(null)

	const closeMenu = () => {
		if (menuRef.current) {
			menuRef.current.style.transform = 'translateX(16rem)'
		}
	}

	const openMenu = () => {
		if (menuRef.current) {
			menuRef.current.style.transform = 'translateX(-16rem)'
		}
	}

	return (
		<>
			<button 
				className="size-11 bg-accent flex justify-center items-center rounded-xl"
				onClick={openMenu}
			>
				<HiOutlineBars4 className="text-white" size={20} />
			</button>

			<ul
				ref={menuRef}
				className="bg-gray-600 flex flex-col gap-6 fixed -right-64 top-0 bottom-0 w-64 h-screen pt-9 px-10 text-white transition duration-500"
			>
				<div className="flex items-center justify-between mb-9">
					<img src="Logo.png" className="max-w-[120px] tablet:hidden" alt="" />
					<button 
						className="tablet:absolute tablet:top-11 tablet:right-12"
						onClick={closeMenu}
					>
						<RiCloseLargeFill className="text-white" size={20}/>
					</button>
				</div>

				<li>
					<a
						className="hover:text-accent hover:font-bold inline-block border-b border-transparent"
						href="#"
					>
						Home
					</a>
				</li>
				<li>
					<a
						className="hover:text-accent hover:font-bold inline-block border-b border-transparent"
						href="#"
					>
						Shop
					</a>
				</li>
				<li>
					<a
						className="hover:text-accent hover:font-bold inline-block border-b border-transparent"
						href="#"
					>
						Plant Care
					</a>
				</li>
				<li>
					<a
						className="hover:text-accent hover:font-bold inline-block border-b border-transparent"
						href="#"
					>
						Blogs
					</a>
				</li>

				<button 
					className="bg-accent/85 w-full hover:bg-accent flex justify-center items-center gap-x-2 h-[35px] rounded-md text-white"
				>
					<MdOutlineLogout />
					Logout
				</button>
			</ul>
		</>
	)
}

export default MenuNavbar