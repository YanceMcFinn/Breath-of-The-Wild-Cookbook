'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Card } from './components/Card.tsx'


export default function Home() {
  const [materials, setMaterials] = useState([])

  async function loadMaterials() {
    const response = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials");
    const items = await response.json();
    setMaterials(items)
    console.log(materials)
  }

  useEffect(()=>{
    loadMaterials()},[]);

  return (
    <main>
      <div className='grid grid-cols-4 gap-2'>
        {materials?.map((item)=>{
          return <Card name={item.name} imgUrl={item.image} />
        })}
      </div>
    </main>
  )
}
