import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Card(props) {
    let {id ,title ,price ,description ,thumbnail    } = props

  return (
    <> 
        
        
        <div className='item'>
            <div className='card'>
                <div className='card-head'>
                    <Image 
                    src={thumbnail}
                    width={250}
                    height={250}
                    alt='product'
                    priority={true} 
                    />
                </div>
                <div className='card-body'>
                    <h4>{title}</h4>
                    <h5>{price} $</h5>
                </div>
                <div className='card-foot'>
                    <Link href={`/products/product_detail/${id}`} className='detail_btn'>detail</Link>
                </div>
            </div>
        </div>
    
        
    </>
  )
}
