import astronaut from '../../assets/png/space-helmetf.png';

const Home = () => {
    return (
        <div className="max-w-[1280px] mx-auto px-[4%] mt-[75px] flex flex-col items-center sm:flex-row justify-between">
            <div>
                <h1 className='font-anton font-normal text-[2.625rem] leading-[130%] uppercase mb-[25px] lg:text-[4.25rem]'>Never Caught <br /> Off-Guard Again</h1>
                <p className='font-ubuntu font-normal text-sm leading-[160%] mb-[30px] lg:text-lg'>We are specialist in protecting your assets and reputation to make
                    sure you operate risk-free and focus on your core business.</p>
                <button className='button-about-us'>Learn More</button>
            </div>

            <div className='mb-[65px]'>
                <img src={astronaut} alt="astronaut" />
            </div>
        </div>
    )
}

export { Home };