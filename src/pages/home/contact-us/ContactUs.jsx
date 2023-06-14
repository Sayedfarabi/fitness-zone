import React from 'react';
import './contactUs.css'

const ContactUs = () => {
    return (
        <section className='  py-12'>
            <div className=' contact-section-bg'
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
                data-aos-delay="50"
            >
                <div className='text-center text-white'>
                    <h4 className='text-3xl font-bold'><em>CONTACT ME</em></h4>
                    <p className='font-bold text-xl text-gray-200'>-----X-----</p>
                    <p className='text-xl text-gray-200 my-4'>Question not answer yet? I am here to help!</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form className="form-control mx-2 md:mx-0 w-full md:w-2/3 py-8">
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
        </section>
    );
};

export default ContactUs;