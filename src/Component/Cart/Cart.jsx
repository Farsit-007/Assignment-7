const Cart = ({ carts, handleDelete, carts2 }) => {
    return (
        <div className="border-2 rounded-lg space-y-4">
            <h1 className="text-center text-xl font-semibold">Want to cook: {carts.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((c, index) => (
                                <tr key={c.recipe_id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{c.recipe_name}</td>
                                    <td>{c.preparing_time}</td>
                                    <td>{c.calories}</td>
                                    <td>
                                        <button onClick={() => { handleDelete(c.recipe_id, c) }} className="btn bg-[#0BE58A] border-none px-6 rounded-3xl text-lg">Preparing</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <h1 className="text-center text-xl font-semibold">Currently cooking: {carts2.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts2.map((c, index) => (
                                <tr key={c.recipe_id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{c.recipe_name}</td>
                                    <td>{c.preparing_time}</td>
                                    <td>{c.calories}</td>
                                </tr>
                            ))}
                            <tr className="bg-base-200">
                                <th></th>
                                <td></td>
                                <td>Total Time = <span className="p-4 pr-1">{carts2.reduce((p, e) => p + e.preparing_time, 0)}</span>  minutes</td>
                                <td>Total Calories = <span className="p-4 pr-1">{carts2.reduce((p, e) => p + e.calories, 0)}  </span> Calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
