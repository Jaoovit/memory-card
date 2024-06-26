import ScoreBoard from "./ScoreBoard";
import Card from "./Card";
import { useEffect, useState } from "react";

const Game = () => {

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([]);

    async function fetchData() {
        try {
            let obj = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12`);
            let data = await obj.json();
            let results = data.results.map((el) => {
                el.isClicked = false
                return el
            })
            setCards(results);
        } catch(erro) {
            return erro
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <>

            <ScoreBoard score={score} bestScore={bestScore}/>
            <Card cards={cards}/>
        </>
    )
}

export default Game;