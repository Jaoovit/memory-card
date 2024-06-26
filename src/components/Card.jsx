const Card = ({cards, onClick}) => {
 return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-16">
            {cards.map((element, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 gap-6" name={element.name} onClick={()=> onclick(element.name)}>
                <img src={`https://img.pokemondb.net/artwork/${element.name}.jpg`} alt={`${element.name} img`}/>
                <p className="card-name">{element.name}</p>
              </div>
            ))}
        </div>
    </>
 )
}

export default Card