import profile from '../../assets/images/rec1.png';
import '../Font/Font.css'
const Banner = () => {
    return (
        <section className="container mx-auto lg:px-16 md:py-5">
            <div
                className="relative h-full lg:h-[550px] mb-36 lg:mb-0 bg-no-repeat bg-cover rounded-2xl bg-center  w-full"
                style={{ backgroundImage: `url(${profile})` }}>
                <div className="flex flex-col justify-center items-center min-h-[550px] space-y-5 lg:w-[77%] mx-auto">
                    <h1 className="text-3xl md:text-[52px] leading-tight text-center text-white font-bold lexend">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-white text-center lexend ">Unlock your culinary potential with our personalized cooking classes designed just for you. From beginner basics to advanced techniques, embark on a flavorful journey with expert guidance.</p>
                    <div className='flex gap-8 md:gap-10 items-center pt-4'>
                        <button className="btn bg-[#0BE58A] border-none lexend font-semibold md:px-6 rounded-3xl text-[20px]"> Explore Now</button>
                        <button className="btn lexend font-semibold bg-transparent text-white border-white md:px-6 rounded-3xl text-[20px]">Our Feedback</button>
                    </div>

                </div>
            </div>
            <div className=" md:pt-10  text-center">
                    <h1 className="text-xl lg:text-[40px] lexend font-bold text-[#030712]">Our Recipes</h1>
                    <p className="lexend lg:w-[691px] mx-auto py-6 text-[#030712CC]">Indulge in a rich assortment of recipes curated for every taste bud. From appetizers to desserts, find culinary inspiration to elevate your cooking game.</p>
                </div>
        </section>
    );
};

export default Banner;
