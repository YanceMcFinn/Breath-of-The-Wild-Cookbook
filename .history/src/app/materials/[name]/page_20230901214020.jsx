export async function generateStaticParams() {
    const materials = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials?game=botw')
    .then((res) => res.json())
   
    return materials.data.map((item) => ({
      name: item.name
    }))
  }

  export default function Material ({ params }){
    console.log(materials)
    return (
      <h1>{params.name}</h1>
    )
  }