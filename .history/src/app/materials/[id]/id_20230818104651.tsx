import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
 
export default function Material() {
  
  const router = useRouter()
  const id = router.query.id
  const [materials, setMaterials] = useState([] as any[])
  const [item,setItem] = useState({})
  async function loadMaterial(id:any) {
    const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials`);
    const items = await response.json();
    setMaterials(items.data)
    setItem(materials.filter((item)=>item.id = id))
    console.log(item)
  }

  useEffect(()=>{
    loadMaterial(id)
  })

  return <p>Post: {router.query.id}</p>
}