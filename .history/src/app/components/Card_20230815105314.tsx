export function Card(props){
    return(
        <div className="aspect-auto border-solid border-zelda-green rounded-md content-center justify-center space-y-1 space-x-1 border-2">
            <img className="card-img" src={props.imgUrl}></img>
            <p className="font-bold">{props.name}</p>
        </div>
    )
}