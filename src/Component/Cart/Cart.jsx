/* eslint-disable react/prop-types */
import '../Font/Font.css'
const Cart = ({ carts, handleDelete, carts2 }) => {
    return (
        <div className="border-2 rounded-lg space-y-4">
            <div className="max-w-[350px] mx-auto border-b-2 p-5">
            <h1 className="text-center text-[24px] text-[#150B2B] lexend font-semibold">Want to cook: {carts.length}</h1>
            </div>
           
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="fira_sans text-[16px] text-[#878787]">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((c, index) => (
                                <tr key={c.recipe_id} className="bg-base-200 font-medium text-[#636363] ">
                                    <th>{index + 1}</th>
                                    <td className="w-40">{c.recipe_name}</td>
                                    <td >{c.preparing_time}</td>
                                    <td >{c.calories}</td>
                                    <td>
                                        <button onClick={() => { handleDelete(c.recipe_id, c) }} className="btn bg-[#0BE58A] border-none px-3 rounded-3xl lexend">Preparing</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="max-w-[350px] mx-auto border-b-2 p-5">
            <h1 className="text-center text-[24px] text-[#150B2B] lexend font-semibold">Currently cooking: {carts2.length}</h1>
            </div>
            <div>
                <div>
                    <table className="table">
                        <thead>
                            <tr className="fira_sans text-[16px] text-[#878787]">
                                <th></th>
                                <th className='pr-16'>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts2.map((c, index) => (
                                <tr key={c.recipe_id} className=" bg-base-200 text-[#636363] font-medium">
                                    <th>{index + 1}</th>
                                    <td className="w-40">{c.recipe_name}</td>
                                    <td>{c.preparing_time}</td>
                                    <td>{c.calories}</td>
                                </tr>
                            ))}
                            <tr className="text-[#636363]">
                                <th></th>
                                <td></td>
                                <th>Total Time = <span >{carts2.reduce((p, e) => p + e.preparing_time, 0)}</span>  minutes</th>
                                <th>Total Calories = <span>{carts2.reduce((p, e) => p + e.calories, 0)}  </span> Calories</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
