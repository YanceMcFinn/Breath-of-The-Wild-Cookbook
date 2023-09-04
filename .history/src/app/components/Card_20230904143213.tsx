import { StaticImageData } from "next/image";
import Heart from "../../../public/heart.svg"
import HeartHalf from "../../../public/heart-half.svg"

export function Card(props: { imgUrl: string, name: string, effect: string, description: string, hearts: number }){
    const heartsRestored = () => {
        const hearts : number = Math.floor(props.hearts)
        const halfHearts : number = props.hearts % 1
        const heartsRestored = [];
        for (var i=0; i < hearts; i++) {
          heartsRestored.push(<Heart className="heart fill-sheikah-slate-blue-500 glow"/>)
        }
        if (halfHearts != 0){
            heartsRestored.push(<HeartHalf className="heart fill-sheikah-slate-blue-500 glow"/>)
        } 
        return heartsRestored;
      }
      console.log(Math.floor(3.5))
    return(
        <div className="card-bg aspect-auto flex flex-col px-0 py-0 border-solid border-2 border-sheikah-slate-blue-500 text-sheikah-slate-blue-500 glow rounded-md p-2 text-center">
            <img className="card-img rounded-t p-0 m-0 w-full position-top" src={props.imgUrl}></img>
            
            <div className="px-3 grow content-around flex flex-col">
                <h5 className="font-bold w-100 hyliaFont text-xl text-center">{props.name}</h5>
                <div className="w-full">
                 {heartsRestored().map((heart)=>{
                    return heart
                 })}
                </div>
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