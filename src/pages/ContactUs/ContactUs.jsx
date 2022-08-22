import arrowUp from '../../assets/svg/arrowUp.svg';
import { Form } from '../../components';

const ContactUs = () => {
    return (
        <div className="max-w-[1280px] mx-auto px-[4%] flex flex-col items-center">
            <div>
                <a href="">
                    <img className='float-left' src={arrowUp} alt="arrow up" />
                </a>
            </div>

            <div>
                <h2>Contact</h2>
                <h2>us</h2>
            </div>

            <Form />
        </div>
    )
}

export { ContactUs };