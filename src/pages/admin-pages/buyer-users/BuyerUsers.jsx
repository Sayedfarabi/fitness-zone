import React from 'react';
import UserCard from '../../../component/user-card/UserCard';

const BuyerUsers = () => {
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

                        <UserCard></UserCard>
                        <UserCard></UserCard>
                        <UserCard></UserCard>
                        <UserCard></UserCard>
                        <UserCard></UserCard>
                        <UserCard></UserCard>

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default BuyerUsers;