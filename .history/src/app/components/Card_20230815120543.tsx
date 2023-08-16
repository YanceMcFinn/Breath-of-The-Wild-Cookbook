export function Card(props){
    return(
        <div className="card-bg aspect-auto border-solid border-zelda-green border-2 rounded-md flex flex-wrap text-center justify-center items-center space-y-1 space-x-1 p-2">
            <img className="card-img mt-2 rounded" src={props.imgUrl}></img>
            <p className="font-bold">{props.name}</p>
            <p><span class="font-bold">Cooking Effect: </span>{props.effect != '' ? props.effect : "none"}</p>
        </div>
    )
}