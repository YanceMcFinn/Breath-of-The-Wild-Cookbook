import { StaticImageData } from "next/image";

export function Card(props: { imgUrl: string, name: string, effect: string, description: string }){
    return(
        <div className="card-bg aspect-auto flex flex-col px-0 py-0 border-solid border-2 border-sheikah-slate-blue-500 text-sheikah-slate-blue-500 glow rounded-md p-2 text-center">
            <img className="card-img rounded-t p-0 m-0 w-full position-top" src={props.imgUrl}></img>
            
            <div className="px-3 grow content-around flex flex-col">
                <h5 className="font-bold w-100 hyliaFont text-xl text-center">{props.name}</h5>
                <div className="text-left">
                    <p><span className="font-bold w-100 hyliaFont">Cooking Effect: </span><span className="text-sm">{props.effect != '' ? props.effect : "none"}</span></p>
                </div>
                <div className="text-left">
                    <p><span className="font-bold w-100 hyliaFont">Description: </span><span className="text-sm">{props.description}</span></p>
                </div>
                <div className="text-left mt-auto">
                    <a href={`/materials/${props.name.replace(" ","_")}`}><button className="bg-sheikah-slate-blue-500 hover:bg-sheikah-slate-blue-300 text-white glow font-bold py-2 px-4 my-3 rounded justify-self-end">Info</button></a>
                </div>
            </div>
        </div>
    )
}