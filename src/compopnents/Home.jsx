import bannerImg from '../assets/banner.png'
const Home = () => {
    return (
        <div className="mt-20 bg-bgShade" id='home'>
            <div className="lg:px-12 px-4 flex flex-col md:flex-row items-center justify-between py-24 gap-5">
                <div className="md:w-1/2 w-full mt-5">
                    <h3 className="text-xl text-headingColor font-semibold mb-5">Hey, I am Rajesh</h3>
                    <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-sung md:leading-[76px] mb-5">I create <span className="text-primary">Product design</span> and brand experience</h1>
                    <p className="text-body text-2xl leading-9 mb-8">Lorem ipsum dolor sit amet, </p>
                    <button className="btn-primary">Get In Touch</button>
                </div>
                <div className='md:w-1/2 w-full'>
                <img src={bannerImg} alt="" className='w-full'/>
            </div>
            <div className='md:w-1/2 w-full mt-5'>

            </div>
            </div>
        </div>
    );
};

export default Home;