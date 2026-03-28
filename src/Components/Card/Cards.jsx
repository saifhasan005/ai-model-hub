import React from 'react';
import { use } from 'react';
import ModelData from '../ModelData/ModelData';
const Card = ({ modelPromise, selectedData, setselectedData }) => {
    const models = use(modelPromise);
    // console.log(models);
    return (
        <div className='max-w-[1180px] mx-auto'>
            
            <div className='py-20 flex items-center justify-center flex-col'>
                <h3 className='font-bold text-4xl'>Chose Your AI Model</h3>
                <p className='font-semibold text-xl text-[#9e9ea8]'>One Subscription gives you to all frontier AI models</p>
            </div>

            <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {models.map(model =>
                    <ModelData setselectedData={setselectedData} selectedData={selectedData} key={model.id} model= {model}></ModelData>
                )}
            </div>
        </div>
    );
};

export default Card;