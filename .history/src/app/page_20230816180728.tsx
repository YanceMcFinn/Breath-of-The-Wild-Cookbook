'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Card } from './components/Card'
import '../../HyliaSerif_WebfontKit/stylesheet.css'

export default function Home() {
  const [materials, setMaterials] = useState([] as any[]);
  const [fullMaterialList, setFullMaterialList] = useState([] as any[]);
  const [searchFilter, setSearchFilter] = useState([] as any[]);
  const [gameMode, setGameMode] = useState('')

  async function loadMaterials() {
    const response = await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials" + {gameMode});
    const items = await response.json();
    setMaterials(items.data)
    setFullMaterialList(items.data)
    console.log(items.data)
  }

  useEffect(()=>{
    loadMaterials()},[gameMode]);
    
  useEffect(() => {
    
    setMaterials(fullMaterialList)
      let filteredMaterials = fullMaterialList.filter(material => (material['name'] && material['name'].includes(searchFilter)))
      setMaterials(filteredMaterials);
      // console.log("The search filter is: " + searchFilter);
  
  }, [searchFilter]);

const handleChange = (e : any) => {

  e.preventDefault();
  setSearchFilter(e.target.value.toLowerCase());
  
  }

  return (
    <main>
      <div className='text-center'>
        <h1 className='hyliaFont main-title text-sheikah-slate-blue my-5 glow'>Breath of The Wild Cookbook</h1>

      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Profile
        </button>
        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Settings
        </button>
      </div>

        <div className='my-3 mx-2 text-center w-full'>
          <p className='hyliaFont text-xl text-sheikah-slate-blue glow inline-block mr-2'>Search </p><input value={searchFilter} onChange={handleChange} className='rounded w-1/2 search-bar-input text-sheikah-slate-blue glow' type='text'></input>
        </div>
      </div>
      <div className='px-5 mb-2'>
      {materials.length != 0 ? <div className='grid md:grid-cols-3 gap-5 px-5'>
          {materials.map((item: { name: string, image: string, cooking_effect: string, description: string })=>{
            return <Card name={item.name} imgUrl={item.image} effect = {item.cooking_effect} description = {item.description} />
          })}</div> : <div className='text-center'><h2 className='text-sheikah-slate-blue glow hyliaFont text-center'>no search results found</h2></div>}
        
      </div>
      <div className='mb-2'>
        <p className='text-center text-xl hyliaFont glow text-sheikah-slate-blue my-5'>Made by <a href="https://github.com/yancemcfinn">Sean Cole</a></p>
      </div>
    </main>
  )
}
