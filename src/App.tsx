import FilterSection from "./components/FilterSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProductSection from "./components/ProductSection"

const App = () => {
	return (
		<>
			<Navbar />

			<section className="bg-[#F5F5F5] flex flex-col tablet:flex-row justify-between items-center mt-5 mb-8 px-6 tablet:px-12 desktop:px-24 py-16 w-full">
				<HeroSection />
			</section>

			<section className="flex items-center tablet:justify-between max-w-full mb-12">
				<FilterSection />
			</section>

			<section className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4 tablet:gap-8 desktop:gap-10">
				<ProductSection />
			</section>
		</>
	)
}

export default App
