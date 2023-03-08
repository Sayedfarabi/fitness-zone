import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();

    const submitHandler = data => {
        fetch(`http://localhost:5000/addAdmin?email=${data?.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(result?.message)
                } else {
                    toast.error(result.message)
                }
            })
    }

    return (
        <section>
            <div className='bg-base-100 min-h-screen mx-auto py-20'>
                <div>
                    <h1 className='text-3xl  text-center underline my-8 '> Make a new Admin</h1>
                </div>
                <div className="hero mt-12 ">
                    <div className="card flex-shrink-0 w-full md:w-1/2 bg-base-200  shadow-3 xl">
                        <form onClick={handleSubmit(submitHandler)} className="card-body">

                            <div className="form-control">
                                <div>
                                    <label className="label w-full">
                                        <span className="label-text font-bold">New Admin Email:</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" name='email' placeholder="Enter new admin email" className="input input-bordered w-full" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Add Admin" className='btn btn-sm bg-red-500 text-white hover:bg-black' />
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddAdmin;