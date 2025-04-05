const HeroSection = () => {
	return (
		<>
			<div className="max-w-[50%] text-center tablet:text-left">
				<h5 className="text-md font-medium mb-2">WELCOME TO GREENSHOP</h5>
				<h1 className="text-3xl tablet:text-4xl desktop:text-6xl font-extrabold mb-4">
					LET'S MAKE A BETTER <span className="text-green-500">PLANET</span>
				</h1>
				<p className="font-normal text-md mb-11">
					We are an online plant shop offering a wide range of cheap and trendy plants. <span className="hidden tablet:inline">Use our plants to create an unique Urban Jungle. Order your favorite plants!</span>
				</p>

				<button className="bg-accent/80 px-4 py-2 rounded-md text-white hover:bg-accent transition">
					SHOP NOW
				</button>
			</div>

			<div className="mt-8 tablet:mt-0 tablet:max-w-sm desktop:max-w-md">
				<img src="plants.png" alt="plants-img" className="w-full max-w-full object-contain" />
			</div>
		</>
	)
}

export default HeroSection