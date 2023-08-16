export function Card(props){
    return(
        <div className="aspect-auto">
            <img className="card-img" src={props.imgUrl}></img>
            <p className="font-bold">{props.name}</p>
        </div>
    )
}