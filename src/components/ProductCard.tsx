import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

interface ProductCardProps {
  rank: number
  name: string
  rating: number
  image: string
  price: number
  discountPrice: number
  benefits: string[]
  link: string
}

export default function ProductCard({
  rank,
  name,
  rating,
  image,
  price,
  discountPrice,
  benefits,
  link,
}: ProductCardProps) {
  return (
    <div className="card relative overflow-hidden">
      {rank <= 3 && (
        <div className="absolute top-4 left-4 bg-highlight text-white px-3 py-1 rounded-full text-sm font-semibold">
          #{rank}
        </div>
      )}

      <div className="image-wrapper mb-6 aspect-square">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-contain"
          loading="lazy"
          quality={90}
        />
      </div>

      <h3 className="text-xl font-bold mb-2">{name}</h3>

      <div className="flex items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(rating) ? 'text-star' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-text-light">{rating.toFixed(1)}</span>
      </div>

      <ul className="mb-6 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm">
            <svg
              className="w-4 h-4 text-accent mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-sm line-through text-text-light">
            R$ {price.toFixed(2)}
          </span>
          <div className="text-2xl font-bold text-accent">
            R$ {discountPrice.toFixed(2)}
          </div>
        </div>
        <div className="bg-accent-light text-accent px-3 py-1 rounded-full text-sm font-semibold">
          {Math.round(((price - discountPrice) / price) * 100)}% OFF
        </div>
      </div>

      <a
        href={link}
        className="btn btn-primary w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Oferta
      </a>
    </div>
  )
} 