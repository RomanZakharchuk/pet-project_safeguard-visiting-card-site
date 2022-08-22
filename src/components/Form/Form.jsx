import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => console.log(data);

    return (
        <form className='w-full max-w-[800px] flex flex-col items-stretch rounded-[30px] p-[24px] mb-[60px] form-box-shadow' onSubmit={handleSubmit(submit)}>
            <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mt-[20px]'>Full Name</label>
            <input className='w-full border-b border-[#cccccc] mt-[20px] outline-none' type="text"
                {...register('firstName', { required: true, maxLength: 80 })} />
            {errors.firstName && <p className='text-red-600 text-xs'>Full Name is required</p>}

            <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mt-[20px]'>Company Name</label>
            <input className='w-full border-b border-[#cccccc] mt-[20px] outline-none' type="text"
                {...register('companyName', { required: true, maxLength: 80 })} />
            {errors.companyName && <p className='text-red-600 text-xs'>Company Name is required</p>}

            <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mt-[20px]'>Phone Number</label>
            <input className='w-full border-b border-[#cccccc] mt-[20px] outline-none' type="tel"
                {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
            {errors.mobileNumber && <p className='text-red-600 text-xs'>Phone Number is invalid</p>}

            <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mt-[20px]'>E-mail</label>
            <input className='w-full border-b border-[#cccccc] mt-[20px] outline-none' type="text"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p className='text-red-600 text-xs'>Email is invalid</p>}

            <label className='font-ubuntu font-normal text-xs leading-5 text-[#999999] mt-[20px]'>Write Us Messages</label>
            <textarea className='w-full border-b border-[#cccccc] mb-[20px] outline-none'
                {...register("message")} />

            <div className='flex justify-center'>
                <button className='btn-form' type='submit'>Send Message</button>
            </div>
        </form>
    )
}

export { Form };