export function Card(props){
    return(
        <div className="card-bg aspect-auto border-solid border-zelda-green border-2 block rounded-md flex justify-items-center flex-wrap text-center justify-center items-center space-y-1 space-x-1 p-2">
            <img className="card-img mt-2 rounded" src={props.imgUrl}></img>
            <h5 className="font-bold">{props.name}</h5>
            <p><span class="font-bold">Cooking Effect: </span>{props.effect != '' ? props.effect : "none"}</p>
        </div>
    )
}