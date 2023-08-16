export function Card(props){
    return(
        <div className="aspect-auto border-solid border-zelda-green border-2">
            <img className="card-img" src={props.imgUrl}></img>
            <p className="font-bold">{props.name}</p>
        </div>
    )
}