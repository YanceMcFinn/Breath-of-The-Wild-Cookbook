export function Card(props){
    return(
        <div className="card-bg aspect-auto p-0 border-solid border-zelda-green border-2 block rounded-md inline-block space-y-1 space-x-1 p-2 text-center">
            <img className="card-img p-0 m-0 rounded w-full position-top" src={props.imgUrl}></img>
            <h5 className="font-bold w-100">{props.name}</h5>
            <p><span class="font-bold w-100">Cooking Effect: </span>{props.effect != '' ? props.effect : "none"}</p>
        </div>
    )
}