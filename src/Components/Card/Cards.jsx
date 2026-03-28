import React from 'react';
import { use } from 'react';
import ModelData from '../ModelData/ModelData';
const Card = ({ modelPromise }) => {
    const models = use(modelPromise);
    // console.log(models);
    return (
        <div className='max-w-[1180px] mx-auto'>
            <div className='flex items-center justify-center '>
                <button className='btn bg-red-200 rounded-full px-8 mr-[12px]'>Models</button>
                <button className='btn rounded-full px-8 mr-[12px]'>Cart(0)</button>
            </div>
            <div className='py-20 flex items-center justify-center flex-col'>
                <h3 className='font-bold text-4xl'>Chose Your AI Model</h3>
                <p className='font-semibold text-xl text-[#9e9ea8]'>One Subscription gives you to all frontier AI models</p>
            </div>

            <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {models.map(model =>
                    <ModelData model= {model}></ModelData>
                )}
            </div>
        </div>
    );
};

export default Card;