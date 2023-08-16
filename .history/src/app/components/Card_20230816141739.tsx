export function Card(props){
    return(
        <div className="card-bg aspect-auto !px-0 pt-0 border-solid border-sheikah-slate-blue text-sheikah-slate-blue glow border-2 block rounded-md inline-block space-y-1 space-x-1 p-2 text-center">
            <img className="card-img p-0 m-0 w-full position-top" src={props.imgUrl}></img>
            
            <div className="px-2">
                <h5 className="font-bold w-100">{props.name}</h5>
                <div className="text-left">
                    <p><span class="font-bold w-100">Cooking Effect: </span>{props.effect != '' ? props.effect : "none"}</p>
                    <p><span class="font-bold w-100">Description: </span>{props.description}</p>
                </div>
            </div>
        </div>
    )
}