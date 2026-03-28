import React, { useState } from 'react';

const ModelData = ({model ,selectedData, setselectedData}) => {
    const [selected, setSelected] = useState(false);

    const handleSubscribed = () =>{
        setSelected(true);
        setselectedData([...selectedData,model])
    }
    return (
        <div className='shadow-lg  p-8 overflow-hidden border-zinc-100 rounded-3xl '>
            <div className='flex rounded-2xl justify-center items-center h-56 bg-zinc-300'>
                <img className='h-40 w-40' src={model.image} alt="" />
            </div>
            <div className='p-4'>
                <h3 className='text-2xl font-bold '>{model.title}</h3>
                <p className='font-semibold mb-[15px]'>{model.description}</p>
                <p><span className='font-bold text-2xl'>${model.price}</span> <span className='font-semibold text-[#9e9ea8]'>/month</span></p>
                <button onClick={handleSubscribed} className='btn text-white mt-[20px] bg-rose-500 rounded-lg w-full font-bold'>
                    {selected ? "Subscribed" : "Subscribe Now"}
                </button>
            </div>
        </div>
    );
};

export default ModelData;