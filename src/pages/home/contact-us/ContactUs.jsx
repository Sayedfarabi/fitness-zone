import React from 'react';

const ContactUs = () => {
    return (
        <div className='py-12 bg-neutral-300'>
            <div className='text-center'>
                <h4 className='text-3xl font-bold'><em>CONTACT ME</em></h4>
                <p className='font-bold text-xl text-gray-500'>-----X-----</p>
                <p className='text-xl text-gray-500 my-4'>Question not answer yet? I am here to help!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form className="form-control w-1/2 md:2/3 py-8">
                    <label className="mb-2">
                        <input type="text" name='user_name' placeholder="Enter your Name" className="input  border-red-500 w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" defaultValue="" />
                    </label>
                    <label className="mb-2">
                        <input type="text" name='user_email' placeholder="Enter your Email" className="input input-bordered border-red-500 w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" defaultValue="" />
                    </label>
                    <label className="mb-2">
                        <input type="text" name='message' placeholder="Enter your Message" className="input input-bordered border-red-500 w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" />
                    </label>
                    <label className="mb-2">
                        <input type="submit" value="Email" className='mt-4 input input-bordered  w-full rounded-md btn btn-md bg-red-500 text-white border-2 hover:text-white' />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;