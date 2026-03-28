import React from 'react';

const Cart = ({ selectedData }) => {
    // console.log(selectedData);
    return (
        <div className='max-w-[1300px] mx-auto'>
            <h1 className='text-3xl font-bold '>Your Carts</h1>
            {
                selectedData.map(data => <div className=' items-center flex p-4 rounded-xl mb-[20px] border-zinc-300 justify-between border mt-[20px]' key={data.id}>
                    <div className='flex justify-center items-center gap-2 mt-[15px]'>
                        <div>
                            <img className='h-20 w-20 object-contain' src={data.image} alt="" />
                        </div>

                        <div>
                            <h2 className='font-bold text-2xl'>{data.title}</h2>
                        </div>

                    </div>
                    <div >
                        <h2 className='text-3xl font-bold'>${data.price}/month</h2>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Cart;