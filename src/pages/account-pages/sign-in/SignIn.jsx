import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [error, setError] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = data => {
        console.log(data);
    }
    return (
        <div className="hero py-20 bg-base-200">
            <div className="hero-content flex-col">
                <h3 className='text-center text-3xl mb-8 font-semibold border-b-2 border-red-500 pb-2 '><em>Sign In Now</em></h3>
                <div className="card flex-shrink-0 w-80 md:w-96 shadow-2xl bg-base-100 pt-8">
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-full card rounded-box place-items-center">
                            <div className='text-center text-red-500 pt-4'>
                                <p>{error}</p>
                            </div>
                            <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                                <div className="form-control">

                                    <input {...register("email", { required: "Email address is must be required" })} type="text" name='email' placeholder="email" className="input input-bordered" required />
                                    {
                                        errors?.email &&
                                        <p className='text-red-500'>{errors?.email?.message}</p>
                                    }
                                </div>
                                <div className="form-control">

                                    <input {...register("password", { required: "Password is must be required" })} type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    {
                                        errors?.password &&
                                        <p className='text-red-500'>{errors?.password?.message}</p>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign in" className='btn btn-sm bg-black text-white hover:bg-red-500' />
                                </div>
                                <div className="form-control mt-6 text-center">
                                    <p>Haven't your an account? Please <span className='underline text-blue-500'><Link to={"/sign-up"}>Sign up</Link></span></p>
                                </div>
                            </form>
                        </div>
                        <div className="divider">OR</div>
                        <div className="grid h-full py-4 card rounded-box place-items-center ">
                            <button className='btn btn-sm btn-outline border-black hover:bg-red-500 hover:text-white my-2'>sign in with google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;