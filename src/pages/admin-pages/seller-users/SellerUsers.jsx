import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../component/loading/Loading';
import UserCard from '../../../component/user-card/UserCard';
import { DatabaseContext } from '../../../layout/Root';

const SellerUsers = () => {
    const { users, refetchUsers, isLoadingUsers } = useContext(DatabaseContext)
    const sellerUsers = users.filter(user => user?.userRole === "seller");

    const handleDelete = email => {

        fetch(`https://fitness-zone-server.vercel.app/deleteUser?email=${email}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    refetchUsers()
                    toast.success(`${email} user is deleted successfully`)
                } else {
                    toast.error(`${email} user is deleted failed`)
                }
            })
    }

    const handleVerified = email => {
        fetch(`https://fitness-zone-server.vercel.app/verifyUser?email=${email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('fitnessZone')}`
            },
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    refetchUsers()
                    toast.success(`${email} user verify successfully`)
                } else {
                    toast.error(`${result.message} ${email} user verified `)
                }
            })
    }

    if (isLoadingUsers) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className="overflow-x-auto py-4">
                <table className=" table w-full">

                    <thead className='text-center text-md md:text-lg font-semibold'>
                        <tr>

                            <th>SL No</th>
                            <th>Seller Image</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Verified</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className='text-center'>

                        {
                            sellerUsers &&
                            sellerUsers.map(user => {
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

export default SellerUsers;