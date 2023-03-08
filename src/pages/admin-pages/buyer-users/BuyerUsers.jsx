import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import UserCard from '../../../component/user-card/UserCard';
import { AuthContext } from '../../../context/AuthProvider';
import { DatabaseContext } from '../../../layout/Root';

const BuyerUsers = () => {
    const { users } = useContext(DatabaseContext)
    const buyerUsers = users.filter(user => user?.userRole === "buyer");
    // console.log(buyerUsers);

    const handleDelete = email => {

        fetch(`http://localhost:5000/deleteUser?email=${email}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {

                    toast.success(`${email} user is deleted successfully`)
                } else {
                    toast.error(`${email} user is deleted failed`)
                }
            })
    }


    const handleVerified = email => {
        fetch(`http://localhost:5000/verifyUser?email=${email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {

                    toast.success(`${email} user verify successfully`)
                } else {
                    toast.error(`${result.message} ${email} user verified `)
                }
            })
    }

    return (
        <section>
            <div className="overflow-x-auto py-4 ">
                <table className=" table w-full">

                    <thead className='text-center text-md md:text-lg font-semibold'>
                        <tr>

                            <th>SL No</th>
                            <th>Buyer Image</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Verified</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className='text-center'>

                        {
                            buyerUsers &&
                            buyerUsers.map(user => {
                                return <UserCard
                                    key={user?._id}
                                    user={user}
                                    handleVerified={handleVerified}
                                    handleDelete={handleDelete}
                                >
                                </UserCard>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default BuyerUsers;