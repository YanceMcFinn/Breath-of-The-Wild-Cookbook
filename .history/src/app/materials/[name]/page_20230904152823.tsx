'use client'

import Heart from "../../../../public/heart.svg"
import HeartHalf from "../../../../public/heart-half.svg"

export async function generateStaticParams() {
    const materials = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials?game=botw')
    .then((res) => res.json())
   
    return materials.data.map((item: {name: string}) => ({
      name: item.name
    }))
  }
 
  async function getMaterial(params : {name: string}) {
    const res = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${params.name}?game=botw`)
    const material = await res.json()
    return material.data
  }

  export default async function Material ({ params }){
    
    const material = await getMaterial(params)
    console.log(material)
    const heartsRestored = () => {
      let _hearts = material.hearts_recovered
      if(material.hearts_recovered == 20.5){
          _hearts = 2.5
      }
      const hearts : number = Math.floor(_hearts)
      const halfHearts : number = _hearts % 1
      const heartsRestored = [];
      for (var i=0; i < hearts; i++) {
        heartsRestored.push(<Heart className="heartXl fill-sheikah-slate-blue-500 glow"/>)
      }
      if (halfHearts != 0){
          heartsRestored.push(<HeartHalf className="heartXl fill-sheikah-slate-blue-500 glow"/>)
      } 
      return heartsRestored;
    }
    return (
      <div className="card-bg m-4 w-100 h-50 grid md:grid-cols-2 px-0 py-0 border-solid border-sheikah-slate-blue-500 text-sheikah-slate-blue-500 glow border-2 block rounded-md inline-block space-y-1 space-x-1 p-2">
        <div id='left-col' className="md:w-30 w-full">
          <img className='w-full object-cover p-0 rounded-l-lg' src={material.image}></img>
        </div>
        <div id='right-col' className='md:w-70 w-full px-3'>
          <div className="text-center px-3">
          {heartsRestored().map((heart)=>{
                    return <div>{heart}</div>
                 })}
          </div>
          <h1 className="leading-10 text-center main-title hyliaFont mb-2">{material.name}</h1>
          <p>{material.description}</p>
          <p><span className="hyliaFont">Cooking Effect: </span>{material.cooking_effect != "" ? material.cooking_effect : "none"}</p>
          <p><span className="hyliaFont">Common locations: </span>{material.common_locations.map((location: string)=>{
            if (material.common_locations.indexOf(location) != (material.common_locations.length - 1)){
              return location + ", "
            }
            else return location
          })}</p>

        </div>
      </div>
    )
  }