'use client'
import React from 'react'
import Loading from '@/component/Loading'
export default async function page() {

  await <Loading />
  return (
    <>
      <h1>Home page</h1>
    </>
  )
}

