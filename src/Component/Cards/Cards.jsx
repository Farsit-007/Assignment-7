import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({handlecartButton}) => {
    const[cards,setCards] = useState([])
    useEffect(()=>{
        fetch('./Data.json')
        .then(res =>res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
               cards.map(cards => <Card key={cards.recipe_id} handlecartButton={handlecartButton} cards={cards}></Card>)
            }
        </div>
    );
};

export default Cards;