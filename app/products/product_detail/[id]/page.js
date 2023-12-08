'use client'
import React from 'react'
import Image from 'next/image'
export default async function Detail({params}) {
    const id = params.id
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    

  return (
    <>
        <div className='details'>
            <div className='detail'>
                <div className='it'>
                    <Image
                        src={data.thumbnail}
                        width={600}
                        height={500}
                        alt='detail product'
                        priority={true}
                    
                    />
                </div>
                <div className='it'>
                    <h1 className='title'>{data.title}</h1>
                    <h2 className='price'>{data.price} $ </h2>
                    <br />
                    
                    <p>
                        stock: {data.stock}
                    </p>
                    <br />
                    <p>
                        {data.description}
                    </p>
                    <br />
                    <p>
                        brand: {data.brand}
                    </p>
                    <br />
                    <p>
                        category: {data.category}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
