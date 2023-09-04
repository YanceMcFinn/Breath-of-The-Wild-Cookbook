export async function loadBOTWMaterials() {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials?game=botw');
    return response.json();
  }
  
export async function loadTOTKMaterials() {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials?game=totk');
    return response.json();
}