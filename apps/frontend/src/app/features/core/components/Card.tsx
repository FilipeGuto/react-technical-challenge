import React from 'react'
import Image from './image';

interface CardProps {
  image: string;
  name: string;
  price: number;
}

export default function Card({ 
  image,
  name, 
  price,
}: CardProps
) {
  return (
    <div className='flex flex-col items-center h-full py-3 px-5 justify-around'>
      <div>
        <Image src={image} alt={name} />
      </div>
      <div className='flex text-header flex-col items-start w-full'>
        <p className='text-price font-medium text-base'>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)
          }
        </p>
        <p className='text-description text-base font-normal'>
          {name}
        </p>
      </div>
    </div>
  )
}
