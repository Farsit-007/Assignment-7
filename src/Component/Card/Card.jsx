/* eslint-disable react/prop-types */
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import '../Font/Font.css'
const Card = ({ cards ,handlecartButton}) => {
    const { recipe_image, recipe_name, short_description,preparing_time,calories } = cards;
    return (
        <div>
            <div className="card bg-base-100 border-2 p-2 h-[550px]">
                <figure className="w-full p-2"><img className="rounded-3xl" src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body p-3">
                    <div className="border-b-2 pb-1">
                        <h2 className="card-title lexend text-[20px] font-semibold">{recipe_name}</h2>
                        <p className="fira_sans py-2 text-[#878787]">{short_description}</p>
                    </div>
                    <div className="border-b-2 pb-2">
                        <h1 className="text-lg lexend font-medium py-1">Ingredients : {cards.ingredients.length}</h1>
                        <div className="ml-8">
                            <ul className="list-disc text-[#878787] fira_sans">
                                {cards.ingredients.map((ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between py-2 text-[#636363] fira_sans">
                        <div className="flex items-center gap-3">
                            <MdOutlineWatchLater />
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaFireAlt />
                            <p>{calories} Calories</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start text-[#150B2B] lexend font-medium text-lg">
                        <button onClick={()=>handlecartButton(cards)} className="btn bg-[#0BE58A] border-none px-6 rounded-3xl text-lg">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;