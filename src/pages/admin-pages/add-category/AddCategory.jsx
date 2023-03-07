import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddCategory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState()

    const submitHandler = data => {
        console.log(data);
    }

    return (
        <div className="hero  bg-base-200 h-full">
            <div className="hero-content flex-col mx-4">
                <h3 className='text-center text-3xl mb-4 font-semibold border-b-2 border-red-500 py-2 '>
                    <em>Product Category add to Database</em>
                </h3>
                <div className="card flex-shrink-0 w-full md:1/2 mx-auto shadow-2xl bg-base-100 ">
                    <div className='text-center text-red-500 pt-4'>
                        <p>{error}</p>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                        <div className="form-control my-2">
                            <input {...register("title", { required: "Service title is must be required" })} type="text" name='title' placeholder="Category title..." className="input input-bordered" />
                            {
                                errors?.title &&
                                <p className='text-red-500'>{errors?.title?.message}</p>
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='h-full w-full'>
                                <textarea {...register("body", { required: "Service description is must be required" })} name="body" className=" textarea h-full w-full textarea-bordered" placeholder="Category Description..."></textarea>
                                {
                                    errors?.body &&
                                    <p className='text-red-500'>{errors?.body?.message}</p>
                                }
                            </div>
                            <div>

                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Select Service Photo :</span>
                                    </label>
                                    <input {...register("image", { required: "Service photo is must be required" })} type="file" name='image' className="input" />
                                    {
                                        errors?.image &&
                                        <p className='text-red-500'>{errors?.image?.message}</p>
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Add Service" className='btn btn-sm bg-red-500 text-white hover:bg-black' />
                        </div>

                    </form>

                </div>
            </div>
        </div>

    );
};

export default AddCategory;