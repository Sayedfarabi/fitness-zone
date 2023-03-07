import React from 'react';
import { Link } from 'react-router-dom';

const InfoSectionCard = ({ data }) => {
    return (
        <div className="card w-96 h-96 md:h-[450px] rounded-none border border-gray-300 text-white mx-auto">
            <div className="card-body text-center flex justify-center items-center">
                <div>
                    <h2 className='text-xl md:text-2xl font-semibold'><em>{data?.title}</em></h2>
                    <p className='font-semibold'>----------</p>
                    <div className='my-4'>
                        <p className='text-md'>{data?.paragraph?.firstLine}</p>
                        <p className='text-md'>{data?.paragraph?.secondLine}</p>
                        <p className='text-md'>{data?.paragraph?.thirdLine}</p>
                    </div>
                    <div className="card-actions justify-center mt-8">
                        <Link to={`${data?.link}`}>
                            <button className="btn btn-outline px-6 text-white btn-sm hover:bg-red-500">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSectionCard;