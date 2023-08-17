export function Card(props: { imgUrl: string, name: string, effect: string, description: string }){
    return(
        <div className="card-bg aspect-auto !px-0 pt-0 border-solid border-sheikah-slate-blue text-sheikah-slate-blue glow border-2 block rounded-md inline-block space-y-1 space-x-1 p-2 text-center">
            <img className="card-img p-0 m-0 w-full position-top" src={props.imgUrl}></img>
            
            <div className="px-2">
                <h5 className="font-bold w-100 hyliaFont text-xl">{props.name}</h5>
                <div className="text-left">
                    <p><span className="font-bold w-100 hyliaFont">Cooking Effect: </span><span className="text-sm">{props.effect != '' ? props.effect : "none"}</span></p>
                    <p><span className="font-bold w-100 hyliaFont">Description: </span><span className="text-sm">{props.description}</span></p>
                </div>
            </div>
        </div>
    )
}