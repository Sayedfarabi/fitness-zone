import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../component/loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';

const SignIn = () => {
    const { signInWithGoogle, loading, signIn, setLoading } = useContext(AuthContext);
    const [error, setError] = useState("");
    // console.log(error);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const submitHandler = data => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                const user = result?.user;
                const userEmail = {
                    email: user?.email
                }
                setError("")
                navigate(from)
                toast.success(" user sign in successfully")
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
                            // console.log(data);
                            const token = data?.token;

                            localStorage.setItem("fitnessZone", token)
                        } else {
                            console.log(data);
                            toast.error(data?.message)
                        }
                    })
            })
            .then(error => {
                console.log("error");
                setLoading(false)
                setError(error?.message)
            })
    }


    const googleHandler = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result);
                const user = result?.user;
                const userData = {
                    name: user?.displayName,
                    email: user?.email,
                    image: user?.photoURL,
                    userRole: "buyer",
                    verified: false
                }
                const userEmail = {
                    email: user?.email
                }
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
                            // toast.success(data?.message)
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
                                        // console.log(data);
                                        const token = data?.token;
                                        // toast.success(result?.message)
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
            .catch(error => {
                setLoading(false)
                console.log(error);
                setError(error)
            })
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="hero py-4 md:py-12 bg-base-200 w-full">
            <div className="hero-content flex-col">
                <h3 className='text-center text-3xl mb-8 font-semibold border-b-2 border-red-500 pb-2 '><em>Sign In Now</em></h3>
                <div className=" flex-shrink-0 w-full shadow-2xl bg-base-100 pt-8">
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-full card rounded-box place-items-center">
                            <div className='text-center text-red-500 pt-4'>
                                <p>{error}</p>
                            </div>
                            <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email :</span>
                                    </label>
                                    <input {...register("email", { required: "Email address is must be required" })} type="text" name='email' placeholder="email" className="input input-bordered" required />
                                    {
                                        errors?.email &&
                                        <p className='text-red-500'>{errors?.email?.message}</p>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password :</span>
                                    </label>
                                    <input {...register("password", { required: "Password is must be required" })} type="password" name='password' placeholder="password" className="input input-bordered" required />
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
                            <button onClick={googleHandler} className='btn btn-sm btn-outline border-black hover:bg-red-500 hover:text-white my-2'>sign in with google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;