import profile from '../../assets/images/rec1.png';

const Banner = () => {
    return (
        <section className="container mx-auto lg:px-16 py-5">
            <div
                className="relative h-full lg:h-[550px] mb-36 lg:mb-0 bg-no-repeat bg-cover rounded-2xl bg-center  w-full"
                style={{ backgroundImage: `url(${profile})` }}>
                <div className="flex flex-col justify-center items-center min-h-[550px] space-y-5 lg:w-[77%] mx-auto">
                    <h1 className="text-3xl md:text-[52px] leading-tight text-center text-white font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-white text-center text-lg">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='flex gap-10 items-center pt-4'>
                        <button className="btn bg-[#0BE58A] border-none px-6 rounded-3xl text-lg"> Explore Now</button>
                        <button className="btn bg-transparent text-white border-white px-6 rounded-3xl text-lg">Our Feedback</button>
                    </div>

                </div>
            </div>
            <div className="py-14  text-center">
                    <h1 className="font-raleway text-xl lg:text-[40px] font-bold text-[#030712]">Our Recipes</h1>
                    <p className="lg:text-lg lg:w-[691px] mx-auto my-6 text-[#030712CC]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                </div>
        </section>
    );
};

export default Banner;
