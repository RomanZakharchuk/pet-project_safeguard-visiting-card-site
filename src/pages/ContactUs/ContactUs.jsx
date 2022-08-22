import { useForm } from 'react-hook-form';

import arrowUp from '../../assets/svg/arrowUp.svg';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => console.log(data);

    return (
        <div className="max-w-[1280px] mx-auto px-[4%]">
            <div>
                <a href="">
                    <img className='float-left' src={arrowUp} alt="arrow up" />
                </a>
            </div>

            <div>
                <h2>Contact</h2>
                <h2>us</h2>
            </div>

            <form className='max-w-[800px] flex flex-col items-stretch rounded-[30px] p-[24px] mb-[60px] form-box-shadow' onSubmit={handleSubmit(submit)}>
                <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mb-4'>Full Name</label>
                <input className='w-full border-b border-[#cccccc] mb-[20px]' type="text" {...register('firstName', { required: true, maxLength: 80 })} />

                <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mb-4'>Company Name</label>
                <input className='w-full border-b border-[#cccccc] mb-[20px]' type="text" {...register('companyName', { required: true, maxLength: 80 })} />

                <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mb-4'>Phone Number</label>
                <input className='w-full border-b border-[#cccccc] mb-[20px]' type="tel" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />

                <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mb-4'>E-mail</label>
                <input className='w-full border-b border-[#cccccc] mb-[20px]' type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mb-4'>Write Us Messages</label>
                <textarea className='w-full border-b border-[#cccccc] mb-[20px]' {...register("message", { required: true })} />

                <div className='flex justify-center'>
                    <button className='btn-form' type='submit'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export { ContactUs };