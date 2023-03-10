import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../component/loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
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
                const { image, name, email, password, userRole } = data;
                const userInfo = {
                    displayName: name,
                    photoURL: image
                }
                const userData = {
                    name,
                    email,
                    image,
                    userRole,
                    verified: false
                }
                const userEmail = {
                    email: email
                }
                createUser(email, password)
                    .then(result => {
                        setError("")
                        toast.success("user create successfully")
                        updateUserProfile(userInfo)
                            .then(result => {
                                setError("")
                                navigate(from)
                                fetch("https://fitness-zone-server.vercel.app/addUser", {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json',
                                    },
                                    body: JSON.stringify(userData)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data?.success) {
                                            fetch("https://fitness-zone-server.vercel.app/getToken", {
                                                method: "POST",
                                                headers: {
                                                    "content-type": "application/json"
                                                },
                                                body: JSON.stringify(userEmail)
                                            })
                                                .then(res => res.json())
                                                .then(data => {
                                                    if (data?.success) {
                                                        const token = data?.token;
                                                        localStorage.setItem("fitnessZone", token)
                                                    } else {
                                                        console.log(data);
                                                        toast.error(data?.message)
                                                    }
                                                })
                                        } else {
                                            toast.error(data?.message)
                                        }
                                    })

                            })
                            .then(error => {
                                setError(error?.message)

                            })
                    })
                    .then(error => {
                        setError(error?.message)
                    })
            })
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="hero bg-base-200 py-4 md:py-12">
            <div className="hero-content flex-col">
                <h3 className='text-center text-3xl mb-8 font-semibold border-b-2 border-red-500 py-2'><em>Sign Up Now</em></h3>
                <div className="card flex-shrink-0 w-80 md:w-96  shadow-2xl bg-base-100">
                    <div className='text-center text-red-500 pt-4'>
                        <p>{error}</p>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name :</span>
                            </label>
                            <input {...register("name", { required: "User name is must be required" })} type="text" name='name' placeholder="Type your name" className="input input-bordered" required />
                            {
                                errors?.name &&
                                <p className='text-red-500'>{errors?.name?.message}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email :</span>
                            </label>
                            <input {...register("email", { required: "Email address is must be required" })} type="email" name='email' placeholder="Type your email" className="input input-bordered" required />
                            {
                                errors?.email &&
                                <p className='text-red-500'>{errors?.email?.message}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password :</span>
                            </label>
                            <input {...register("password", { required: "Password is must be required" })} type="password" name='password' placeholder="Type your new password" className="input input-bordered" required />
                            {
                                errors?.password &&
                                <p className='text-red-500'>{errors?.password?.message}</p>
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className=''>
                                <fieldset className=' border-2 rounded-md  mt-2'>

                                    <legend>Select a Role:</legend>

                                    <div className='flex md:flex-col justify-evenly items-center'>
                                        <div>
                                            <input {...register("userRole", { required: "must be select one" })} className='mx-2' type="radio" id="buyer" name="userRole" value="buyer" />
                                            <label htmlFor="buyer">Buyer</label>
                                        </div>

                                        <div>
                                            <input {...register("userRole", { required: true })} className='mx-2' type="radio" id="seller" name="userRole" value="seller" />
                                            <label htmlFor="seller">Seller</label>
                                        </div>
                                    </div>
                                    {errors.userRole && <p className='text-red-500'>{errors.userRole.message}</p>}

                                </fieldset>
                            </div>


                            <div>
                                <label name="image" value={false} className="label">
                                    <span className="label-text">Photo Upload :</span>
                                </label>
                                <input {...register("image", { required: "photo is required" })} type="file" name='image' className="input  w-full" />

                                {errors.image && <p className='text-red-500 '>{errors.image.message}</p>}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className='btn btn-sm bg-black text-white hover:text-primary hover:bg-secondary' />
                        </div>
                    </form>
                    <div className="mb-6 text-center">
                        <p>Have your an account? Please <span className='underline text-blue-500'><Link to={"/sign-in"}>Sign in</Link></span></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp;