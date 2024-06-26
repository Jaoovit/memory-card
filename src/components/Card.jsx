function Card({array, onclick}){

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-6">
         {array.map((element,i) => (
                <div key={i} className="flex flex-col p-6 item-center justify-center" name={element.name} onClick={()=> onclick(element.name)}>
                  <img src={`https://img.pokemondb.net/artwork/${element.name}.jpg`} alt={`${element.name} img`}/>
                  <p className="card-name">{element.name}</p>
                </div>
              ))}
        </div>
      </>
    )
    }
    export default Card;