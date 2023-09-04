'use client'
export async function generateStaticParams() {
    const materials = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials?game=botw')
    .then((res) => res.json())
   
    return materials.data.map((item: {name: string}) => ({
      name: item.name
    }))
  }
 
  async function getMaterial(params : {}) {
    const res = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${params.name}?game=botw`)
    const material = await res.json()
    return material.data
  }

  export default async function Material ({ params }){
    const material = await getMaterial(params)
    console.log(material)
    return (
      <div className="card-bg m-3 w-100 h-50 grid grid-cols-2 px-0 pt-0 border-solid border-sheikah-slate-blue text-sheikah-slate-blue glow border-2 block rounded-md inline-block space-y-1 space-x-1 p-2">
        <div id='left-col' className="w-30">
          <img className='w-full object-cover p-0' src={material.image}></img>
        </div>
        <div id='right-col' className='w-70'>
          <h1 className="text-center main-title hyliaFont">{material.name}</h1>
          <p>{material.description}</p>
        </div>
      </div>
    )
  }