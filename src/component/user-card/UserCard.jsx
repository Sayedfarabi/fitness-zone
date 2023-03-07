import React from 'react';
import { MdVerifiedUser, MdDeleteForever } from 'react-icons/md';

const UserCard = () => {
    return (
        <tr className='hover text-sm md:text-md'>
            <td>
                <div>
                    <p>1</p>
                </div>
            </td>
            <td>
                <div>
                    <div className="avatar">
                        <div className="w-6 md:w-8 rounded-full ring ring-blue-300 ring-offset-base-100 ring-offset-2">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                        </div>
                    </div>
                </div>
            </td>

            <td >
                <div>
                    <p>Jackson Adrita</p>
                </div>
            </td>

            <td className=''>
                <div>
                    <p>farabisayed6099@gmail.com</p>
                </div>
            </td>

            <td className='text-lg md:text-xl'>
                <button>
                    <MdVerifiedUser></MdVerifiedUser>
                </button>
            </td>

            <td className='text-xl md:text-2xl text-red-600'>
                <button>
                    <MdDeleteForever></MdDeleteForever>
                </button>
            </td>
        </tr>
    );
};

export default UserCard;