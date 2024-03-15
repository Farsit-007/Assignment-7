import { MdOutlineWatchLater } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
const Card = ({ cards ,handlecartButton}) => {
    const { recipe_image, recipe_name, short_description,preparing_time,calories } = cards;
    return (
        <div>
            <div className="card bg-base-100 border-2 p-2 h-[550px]">
                <figure className="w-full p-2"><img className="rounded-3xl" src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body p-4">
                    <div className="border-b-2 pb-4">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p>{short_description}</p>
                    </div>
                    <div className="border-b-2 pb-4">
                        <h1>Ingredients: 6</h1>
                        <div className="ml-8">
                            <ul className="list-disc">
                                {cards.ingredients.map((ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between py-3">
                        <div className="flex items-center gap-3">
                            <MdOutlineWatchLater />
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaFireAlt />
                            <p>{calories} Calories</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={()=>handlecartButton(cards)} className="btn bg-[#0BE58A] border-none px-6 rounded-3xl text-lg">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;