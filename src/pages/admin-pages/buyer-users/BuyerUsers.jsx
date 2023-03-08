import React, { useContext } from 'react';
import UserCard from '../../../component/user-card/UserCard';
import { DatabaseContext } from '../../../layout/Root';

const BuyerUsers = () => {
    const { users } = useContext(DatabaseContext)
    const buyerUsers = users.filter(user => user?.userRole === "buyer");
    // console.log(buyerUsers);
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

export default BuyerUsers;