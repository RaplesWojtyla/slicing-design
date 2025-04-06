import Card from "./Card"

type Product = {
	name: string
	imgUrl: string,
	price: number
	isLiked: boolean
}

const ProductSection = () => {
	const products: Array<Product> = [
		{
			name: 'Barberton Daisy',
			imgUrl: 'barberton_daisy.png',
			price: 119,
			isLiked: false
		},
		{
			name: 'Angel Wing Begonia',
			imgUrl: 'angel_wing_begonia.png',
			price: 169,
			isLiked: false
		},
		{
			name: 'African Violet',
			imgUrl: 'african_violet.png',
			price: 199,
			isLiked: false
		},
		{
			name: 'Beach Spider Lily',
			imgUrl: 'beach_spider_lily.png',
			price: 129,
			isLiked: false
		},
		{
			name: 'Blushing Bromeliad',
			imgUrl: 'blushing_bromeliad.png',
			price: 139,
			isLiked: false
		},
		{
			name: "Bird's Nest Fern",
			imgUrl: 'bird_nest_fern.png',
			price: 99,
			isLiked: false
		},
		{
			name: 'Broadleaf Lady Palm',
			imgUrl: 'broad_leaf_lady_palm.png',
			price: 59,
			isLiked: false
		},
		{
			name: 'Aluminium Plant',
			imgUrl: 'aluminium_plant.png',
			price: 179,
			isLiked: false
		},
	]

	return (
		<>
			{products.map(product => (
				<Card
					name={product.name}
					imgUrl={product.imgUrl}
					price={product.price}
					isLiked={product.isLiked}
				/>
			))}
		</>
	)
}

export default ProductSection