export function Card(props){
    return(
        <div className="aspect-auto border-solid border-zelda-green border-2 rounded-md text-center !justify-items-center space-y-1 space-x-1 p-2">
            <img className="card-img" src={props.imgUrl}></img>
            <p className="font-bold">{props.name}</p>
        </div>
    )
}