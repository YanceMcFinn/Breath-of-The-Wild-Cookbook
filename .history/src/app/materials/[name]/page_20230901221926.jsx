'use client'
export async function generateStaticParams() {
    const materials = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials?game=botw')
    .then((res) => res.json())
   
    return materials.data.map((item) => ({
      name: item.name
    }))
  }
 
  async function getMaterial(params) {
    const res = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${params.name}?game=botw`)
    const material = await res.json().data
    return material
  }

  export default async function Material ({ params }){
    const material = await getMaterial(params)
    return (
      <h1>{material.name}</h1>
    )
  }