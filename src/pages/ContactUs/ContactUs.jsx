import arrowUp from '../../assets/svg/arrowUp.svg';
import { Form } from '../../components';

const ContactUs = () => {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="max-w-[1280px] mx-auto mt-[60px] px-[4%] flex flex-col items-stretch">
            <div className='flex justify-end'>
                <button onClick={goToTop}>
                    <img className='float-left' src={arrowUp} alt="arrow up" />
                </button>
            </div>

            <div className='flex justify-start mb-8'>
                <h2 className='font-anton font-normal text-font-50px leading-[75px] uppercase text-[#FFBC00] text-shadow-logo mr-3'>Contact</h2>
                <h2 className='font-anton font-normal text-font-50px leading-[75px] uppercase text-[#111111] text-shadow-logo'>us</h2>
            </div>

            <div className='flex justify-center'>
                <Form />
            </div>
        </div>
    )
}

export { ContactUs };