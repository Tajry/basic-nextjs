import React from 'react'
import Link from 'next/link'
export default function Poroductlayout({children}) {
  return (
  <>
    <p>
      <Link href={'/products'}>product /</Link>
    </p>
    {children}
    
  </>
  )
}
