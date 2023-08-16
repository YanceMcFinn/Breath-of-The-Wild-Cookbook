'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Card } from './components/Card.tsx'
import '../../HyliaSerif_WebfontKit/stylesheet.css'

export default function Home() {
  const [materials, setMaterials] = useState([])

  async function loadMaterials() {
    const response = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials");
    const items = await response.json();
    setMaterials(items.data)
    console.log(items.data)
  }

  useEffect(()=>{
    loadMaterials()},[]);

  return (
    <main>
      <div className='text-center'>
        <h1 className='hyliaFont main-title text-sheikah-slate-blue my-5 glow'>Breath of The Wild Cookbook</h1>
      </div>
      <div className='inline-block'>
        <p className='hyliaFont text-sheikah-slate-blue glow'>Search</p><input type='text'></input>
      </div>
      <div className='px-5'>
        <div className='grid grid-cols-3 gap-5 px-5'>
          {materials?.map((item)=>{
            return <Card name={item.name} imgUrl={item.image} effect = {item.cooking_effect} description = {item.description} />
          })}
        </div>
      </div>
    </main>
  )
}
