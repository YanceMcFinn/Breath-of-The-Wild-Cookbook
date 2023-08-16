'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'


export default function Home() {
  const [materials, setMaterials] = useState([])

  async function loadMaterials() {
    const response = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials");
    const items = await response.json();
    setMaterials(items.data)
    console.log(materials)
  }

  useEffect(()=>{
    loadMaterials()},[]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='row'>
      </div>
    </main>
  )
}
