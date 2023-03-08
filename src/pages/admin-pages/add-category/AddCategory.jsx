import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddCategory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState()

    const imageBbApiKey = process.env.REACT_APP_image_bb_api_key;
    const imageBbApi = `https://api.imgbb.com/1/upload?key=${imageBbApiKey}`;

    const submitHandler = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        fetch(imageBbApi, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const imageUrl = result?.data?.url;
                data.image = imageUrl;
                console.log(data);
                fetch("http://localhost:5000/addCategory", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('fitnessZone')}`
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result?.success) {
                            toast.success(result?.message)

                        } else {
                            setError(result?.message)
                            toast.error(result?.message)
                        }
                    })
            })
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
                            <input {...register("title", { required: "Category title is must be required" })} type="text" name='title' placeholder="Category title..." className="input input-bordered" />
                            {
                                errors?.title &&
                                <p className='text-red-500'>{errors?.title?.message}</p>
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='h-full w-full'>
                                <textarea {...register("body", { required: "Category description is must be required" })} name="body" className=" textarea h-full w-full textarea-bordered" placeholder="Category Description..."></textarea>
                                {
                                    errors?.body &&
                                    <p className='text-red-500'>{errors?.body?.message}</p>
                                }
                            </div>
                            <div>

                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Select Category Photo :</span>
                                    </label>
                                    <input {...register("image", { required: "Category photo is must be required" })} type="file" name='image' className="input" />
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