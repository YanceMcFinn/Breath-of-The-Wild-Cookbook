'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Card } from './components/Card'
import '../../HyliaSerif_WebfontKit/stylesheet.css'

export default function Home() {
  const [materials, setMaterials] = useState([]);
  const [fullMaterialList, setFullMaterialList] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);

  async function loadMaterials() {
    const response = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials");
    const items = await response.json();
    setMaterials(items.data)
    setFullMaterialList(items.data)
    console.log(items.data)
  }

  useEffect(()=>{
    loadMaterials()},[]);
    
  useEffect(() => {
  
    setMaterials(fullMaterialList)
      let filteredMaterials = fullMaterialList.filter(material => (material.name && material.name.includes(searchFilter)))
      setMaterials(filteredMaterials);
      // console.log("The search filter is: " + searchFilter);
  
  }, [searchFilter]);

const handleChange = (e) => {

  e.preventDefault();
  setSearchFilter(e.target.value);
  
  }

  return (
    <main>
      <div className='text-center'>
        <h1 className='hyliaFont main-title text-sheikah-slate-blue my-5 glow'>Breath of The Wild Cookbook</h1>
        <div className='my-3 mx-2 text-center w-full'>
          <p className='hyliaFont text-xl text-sheikah-slate-blue glow inline-block mr-2'>Search </p><input value={searchFilter} onChange={handleChange} className='rounded w-1/2 search-bar-input text-sheikah-slate-blue glow' type='text'></input>
        </div>
      </div>
      <div className='px-5 mb-2'>
        <div className='grid grid-cols-3 gap-5 px-5'>
          {materials?.map((item: { name: string, image: string, cooking_effect: string, description: string })=>{
            return <Card name={item.name} imgUrl={item.image} effect = {item.cooking_effect} description = {item.description} />
          })}
        </div>
      </div>
      <div className='mb-2'>
        <p className='text-center text-xl hyliaFont glow text-sheikah-slate-blue my-5'>Made by <a href="https://github.com/yancemcfinn">Sean Cole</a></p>
      </div>
    </main>
  )
}
