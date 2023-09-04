import { StaticImageData } from "next/image";

export function Card(props: { imgUrl: string, name: string, effect: string, description: string }){
    return(
        <div className="card-bg aspect-auto flex flex-col !px-0 pt-0 border-solid border-sheikah-slate-blue text-sheikah-slate-blue glow border-2 rounded-md inline-block p-2 text-center">
            <img className="card-img rounded-t p-0 m-0 w-full position-top" src={props.imgUrl}></img>
            
            <div className="px-2 grow justify-around">
                <h5 className="font-bold w-100 hyliaFont text-xl">{props.name}</h5>
                <div className="grow flex flex-cols-1 justify-around text-left border-y-2 border-indigo-500">
                    <div className="">
                        <p><span className="font-bold w-100 hyliaFont">Cooking Effect: </span><span className="text-sm">{props.effect != '' ? props.effect : "none"}</span></p>
                    </div>
                    <div className="">
                        <p><span className="font-bold w-100 hyliaFont">Description: </span><span className="text-sm">{props.description}</span></p>
                    </div>
                    <div className="align-bottom">
                        <a href={`/materials/${props.name.replace(" ","_")}`}><button className="bg-sheikah-slate-blue hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded justify-self-end">Info</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}