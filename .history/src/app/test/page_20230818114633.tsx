'use client'
import { useEffect, useState } from 'react'

export async function generateStaticParams() {
  const materials = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials').then((res) => res.json())
 
  return materials.map((material : any) => ({
    id: material.id,
  }))
}
export default function Material() {
  type Material = {
    id?: number
  }
  const [materials, setMaterials] = useState([] as any[])
  var id:number = 1
  const item = materials[id]
  
  async function loadMaterial(id:any) {
    const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials`);
    const items = await response.json();
    setMaterials(items.data)
    console.log(item)
  }

  useEffect(()=>{
    loadMaterial(id)
  })

  return <p>Post: {item?.id}</p>
}