'use client'
import React , {useEffect, useState}from 'react'
import Image from 'next/image';
import Link from 'next/link';
import '../globals.css'
import Card from '@/component/Card';
export default function Products() {
    const [product , setProduct] = useState([]);
    // set 
    const [page , setPage] = useState(0);
    const [search , setSearch] = useState('');
    const [categories , setCategories] = useState([]);

    const handlenext = ()=>{
      if (page == 80) {
        setPage(80)
      }else {

        setPage(page => page + 10)
      }
    }
    const handleback = ()=>{
      if (page == 0) {
        setPage(0)
      }else {

        setPage(page => page - 10)
      }
      
    }
    useEffect(()=>{
      let url = ''
      if (search != '') {
          url = `https://dummyjson.com/products/search?q=${search}`
      }else {
          url = `https://dummyjson.com/products?limit=10&skip=${page}`
      }
      
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          setProduct(res.products)
        });

      fetch(`https://dummyjson.com/products/categories`)
      .then(res => res.json())
      .then((res) => {
        setCategories(res)
      });
      
       
      
    },[page ,search])
  return (
    <>
      <div className='search-box'>
          <input name='search' onChange={event => setSearch(event.target.value)} placeholder='search here....'  />
          <select onChange={event => setSearch(event.target.value)}>
            <option value="">-- select categories --</option>
            {categories.map((e)=>{
              return(
                <option key={e} value={e}>{e}</option>
              )
            } )}
            
          </select>
      </div>
      <div className='row'>

          {product == '' ? <h1 style={{textAlign:'center'}}>no data</h1> : product.map((e)=>{
           return <Card {...e} key={e.id} />
          })}
      </div>
      <div className='patination'>
        <button onClick={handleback}>back</button>
        <button onClick={handlenext}>next</button>
      </div>
    </>
  )
}
