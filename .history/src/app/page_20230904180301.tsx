'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Card } from './components/Card'
import '../../HyliaSerif_WebfontKit/stylesheet.css'

import Heart  from '../../public/heart.svg'
import HeartHalf  from  '../../public/heart-half.svg'

export default function Home() {
  const [materials, setMaterials] = useState([] as any[]);
  const [fullMaterialList, setFullMaterialList] = useState([] as any[]);
  const [searchFilter, setSearchFilter] = useState([] as any[]);
  const [gameMode, setGameMode] = useState('botw')

  async function loadCreatures(){
    const creatures_resp = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures?game=${gameMode}`)
    const creatures = await creatures_resp.json()
    const onlyEdibles = creatures.filter((creature: { edible: boolean}) => {
      return creature.edible == true;
    })
    console.log("stuff: " + creatures.data)
  }
  async function loadMaterials() {
    const materials_resp = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials?game=${gameMode}`);
    const materials = await materials_resp.json();
    console.log(materials)
    setMaterials(materials.data)
    setFullMaterialList(materials.data)
  }

  useEffect(()=>{
    loadMaterials();
  loadCreatures();
},[gameMode]);
  
  let botwSelected='';
  let totkSelected=''
  if (gameMode == 'botw'){
      botwSelected = 'selected';
      totkSelected = '';
    }
  else {
    botwSelected = '';
    totkSelected = 'selected';
  }
  useEffect(() => {
    
    setMaterials(fullMaterialList)
      let filteredMaterials = fullMaterialList.filter(material => (material['name'] && material['name'].includes(searchFilter)))
      setMaterials(filteredMaterials);
      // console.log("The search filter is: " + searchFilter);
  
  }, [searchFilter, fullMaterialList]);

const handleChange = (e : any) => {

  e.preventDefault();
  setSearchFilter(e.target.value.toLowerCase());
  
  }

  return (
    <main>
      <div className='text-center'>
        <h1 className='hyliaFont main-title text-sheikah-slate-blue-500 my-5 glow'>Breath of The Wild Cookbook</h1>
      <div className="inline-flex card-bg rounded-md shadow-sm" role="group">
        <button type="button" onClick={()=>setGameMode('botw')} className={'px-4 py-2 text-sm font-medium hyliaFont text-sheikah-slate-blue-500 glow border border-sheikah-slate-blue-500 rounded-l-lg' + " " + botwSelected}>
          Breath of The Wild
        </button>
        <button type="button" onClick={()=>setGameMode('totk')} className={"px-4 py-2 text-sm font-medium hyliaFont text-sheikah-slate-blue-500 glow border-t border-b border-r border-sheikah-slate-blue-500 rounded-r-lg" + " " + totkSelected}>
          Tears of The Kingdom
        </button>
      </div>

        <div className='my-3 mx-2 text-center w-full'>
          <p className='hyliaFont text-xl text-sheikah-slate-blue-500 glow inline-block mr-2'>Search </p><input value={searchFilter} onChange={handleChange} className='rounded w-1/2 search-bar-input text-sheikah-slate-blue-500 glow' type='text'></input>
        </div>
      </div>
      <div className='px-5 mb-2 mx-auto md:w-9/12 sm:w-full'>
      {materials.length != 0 ? <div className='grid md:grid-cols-3 gap-5 justify-center'>
          {materials?.map((item: { name: string, image: string, cooking_effect: string, description: string, hearts_recovered: number, id: number})=>{
            return <Card key={item.id} name={item.name} imgUrl={gameMode == 'botw' ? item.image : '/BOTWCookBook_ImgComingSoon.png'} effect = {item.cooking_effect} hearts={item.hearts_recovered} description = {item.description} gameMode={gameMode} />
          })}</div> : <div className='text-center'><h2 className='text-sheikah-slate-blue-500 glow hyliaFont text-center'>no search results found</h2></div>}
        
      </div>
      <div className='mb-2'>
        <p className='text-center text-xl hyliaFont glow text-sheikah-slate-blue-500 my-5'>Made by <a href="https://github.com/yancemcfinn">Sean Cole</a></p>
      </div>
    </main>
  )
}