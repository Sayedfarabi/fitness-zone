import React from 'react';
import { MdVerifiedUser, MdDeleteForever } from 'react-icons/md';

const UserCard = ({ user }) => {
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
                            <img src={user?.image} alt="" />
                        </div>
                    </div>
                </div>
            </td>

            <td >
                <div>
                    <p>{user?.name}</p>
                </div>
            </td>

            <td className=''>
                <div>
                    <p>{user?.email}</p>
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