import { useState } from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import Cards from './Component/Cards/Cards';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Component/Footer/Footer';
function App() {
    const [carts, setCarts] = useState([]);
    const [carts2, setCarts2] = useState([]);

    const handlecartButton = (cards) => {
        const newcarts = [...carts, cards];
        const isAlreadySelected = carts.find(p => p.recipe_id === cards.recipe_id);
        if (!isAlreadySelected) {
            setCarts(newcarts);
            toast.success("Recipe Added To Preparing")
        }
        else{toast.warn("Already Added")}
    };

    const handleDelete = (id, cards) => {
        const newcart2 = carts.filter(item => item.recipe_id !== id);
        setCarts(newcart2);
        toast.success("OHH..Yeah Cooking")
        setCarts2([...carts2, cards]);
    };

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <div className="container mx-auto lg:px-16 py-5">
                <div className='grid grid-cols-12 gap-6'>
                    <div className='col-span-12 md:col-span-7'>
                        <Cards handlecartButton={handlecartButton}></Cards>
                    </div>
                    <div className='col-span-12 md:col-span-5'>
                        <Cart carts={carts} carts2={carts2} handleDelete={handleDelete}></Cart>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
