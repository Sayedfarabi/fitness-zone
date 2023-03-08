import React, { useContext } from 'react';
import UserCard from '../../../component/user-card/UserCard';
import { DatabaseContext } from '../../../layout/Root';

const SellerUsers = () => {
    const { users } = useContext(DatabaseContext)
    const sellerUsers = users.filter(user => user?.userRole === "seller");
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
                                    user={user}>
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