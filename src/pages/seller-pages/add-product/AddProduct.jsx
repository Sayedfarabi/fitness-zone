import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const categories = [];
    const [error, setError] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = data => {
        console.log(data);
    }
    return (
        <div className="hero  bg-base-200 h-full py-20">
            <div className="hero-content flex-col mx-4">
                <h3 className='text-center text-3xl mb-4 font-semibold border-b-2 border-red-500 py-2 '>
                    <em>Product Post to Sell</em>
                </h3>
                <div className="card flex-shrink-0 w-full md:1/2 mx-auto shadow-2xl bg-base-100 ">
                    <div className='text-center text-red-500 pt-4'>
                        <p>{error}</p>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                        <div>
                            <p className='my-2 label-text font-bold'>01. Select Product Category :</p>
                            <div className='input input-bordered text-center'>
                                <label htmlFor="category"></label>
                                <select {...register("categoryName", { required: "product category is required" })} className='w-full'>
                                    <option value="" >Select one</option>
                                    {
                                        categories &&
                                        categories.map(category => <option
                                            key={category._id}
                                            value={category?.categoryName}
                                        >
                                            {category?.categoryName}</option>)
                                    }
                                </select>
                            </div>
                            {errors.categoryName && <p className='text-red-500'>{errors.categoryName.message}</p>}
                        </div>
                        {/* Input No : 2 */}
                        <div>
                            <p className='my-2 label-text font-bold'>02. Select Product Condition :</p>
                            <div className='input input-bordered text-center'>
                                <label htmlFor="condition"></label>
                                <select {...register("condition", { required: true })} id="condition" name="condition" className='w-full'>
                                    <option value="">Select one</option>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Fair">Fair</option>
                                </select>
                            </div>
                        </div>

                        {/* Input No : 3 */}

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">03. Product Name :</span>
                                </label>
                                <input {...register("productName", { required: true })} type="text" name='productName' placeholder="Enter your Product Name" className="input input-bordered w-full" />
                            </div>

                            {/* Input No : 4 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">04. Year of Used :</span>
                                </label>
                                <input {...register("yearsOfUsedProduct", { required: true })} type="text" name='yearsOfUsedProduct' placeholder="Years of Use Product" className="input input-bordered w-full" />
                            </div>

                            {/* Input No : 5 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">05. Original Price :</span>
                                </label>
                                <input {...register("originalPrice", { required: true })} type="number" name='originalPrice' placeholder="Type Original price for your product" className="input input-bordered w-full" />
                            </div>

                            {/* Input No : 6 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">06. Resale Price :</span>
                                </label>
                                <input {...register("resalePrice", { required: true })} type="number" name='resalePrice' placeholder="Type Resale price for your product" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

                            {/* Input No : 7 */}
                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">07. Phone Number :</span>
                                </label>
                                <input {...register("phone", { required: true })} type="number" name='phone' placeholder="Type your phone number" className="input input-bordered w-full" />
                            </div>

                            {/* Up on no 8 */}

                            <div>
                                <label className="label w-full">
                                    <span className="label-text font-bold">08. Location :</span>
                                </label>
                                <input {...register("location", { required: true })} type="text" name='location' placeholder="Type your location" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>

                            {/* Input No : 9 */}

                            <div className='h-full w-full'>
                                <label className="label w-full">
                                    <span className="label-text font-bold">09. Description :</span>
                                </label>
                                <textarea {...register("body", { required: "Service description is must be required" })} name="body" className=" textarea h-full w-full textarea-bordered" placeholder="Category Description..."></textarea>
                                {
                                    errors?.body &&
                                    <p className='text-red-500'>{errors?.body?.message}</p>
                                }
                            </div>
                            <div>

                                {/* Input No : 10 */}

                                <div className="form-control my-2">
                                    <label className="label w-full">
                                        <span className="label-text font-bold">10. Select your photo :</span>
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

export default AddProduct;