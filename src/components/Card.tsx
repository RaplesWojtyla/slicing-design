import { useState } from "react"
import { BsHeart, BsHeartFill } from "react-icons/bs"

type Product = {
	name: string
	imgUrl: string,
	price: number
	isLiked: boolean,
}

const Card = (props: Product) => {
	const [isLiked, setIsLiked] = useState<boolean>(props.isLiked)

	return (
		<div className="bg-gray-100 w-full max-w-[250px] shadow-md rounded-lg cursor-pointer hover:scale-105 transition duration-300">
			<div className="relative w-full aspect-square rounded-t-lg overflow-hidden mb-3">
				<img src={props.imgUrl} alt={`${props.name}-img`} className="w-full h-full object-cover" />

				<div>
					<button
						onClick={() => setIsLiked(prev => !prev)}
					>
						{isLiked ? (
							<BsHeartFill className="absolute top-4 right-4 text-red-500" size={17} />
						) : (
							<BsHeart className="absolute top-4 right-4" size={17} />
						)}
					</button>
				</div>
			</div>
			<div className="px-4 pb-5">
				<p className="font-normal text-gray-800 text-base mb-1 truncate">{props.name}</p>
				<p className="font-bold text-base text-accent">${props.price}</p>
			</div>
		</div>
	)
}

export default Card