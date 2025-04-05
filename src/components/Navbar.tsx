import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import TabletNavbar from "./TabletNavbar"

const Navbar = () => {
	return (
		<header>
			<div className="hidden desktop:flex justify-between items-center border-b pb-6">
				<DesktopNavbar />
			</div>

			<div className="hidden tablet:flex desktop:hidden items-center justify-between">
				<TabletNavbar />
			</div>

			<div className="tablet:hidden flex items-center justify-between gap-4">
				<MobileNavbar />
			</div>
		</header>
	)
}

export default Navbar