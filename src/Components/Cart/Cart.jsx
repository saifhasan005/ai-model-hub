import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ selectedData, setselectedData }) => {
    const totalPrice = selectedData.reduce((sum, data) => sum + data.price, 0);
    // console.log(selectedData);
    const handleCheckout = () => {
        setselectedData([]);
        toast.success("All Payment Successful")
    };
    const handleDelete = (item) => {
        const filteredCart = selectedData.filter(c => c.id !== item.id);
        setselectedData(filteredCart);
        toast.error(`${item.title} was Delete `)
    }
    return (
        <div className='max-w-[1300px] mx-auto'>
            <h1 className='text-3xl font-bold mb-[20px] mt-[15px]'>Your Carts</h1>
            {
                selectedData.length == 0 ? <h2 className='text-center font-bold text-3xl text-[#6b6c6e] py-9 border-2 mb-[20px] rounded-lg border-zinc-300'>Cart Is Empty <br /> <span className='text-xl text-black font-semi'>Please Add some Data</span></h2> :
                    <>
                        {
                            selectedData.map(data => <div className=' items-center flex p-4 rounded-xl mb-[20px] bg-zinc-300 border-zinc-300 justify-between border mt-[20px]' key={data.id}>
                                <div className='flex justify-center items-center gap-2 mt-[15px]'>
                                    <div>
                                        <img className='h-20 w-20 object-contain' src={data.image} alt="" />
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-2xl'>{data.title}</h2>
                                        <p className='font-semibold'>{data.description}</p>
                                    </div>

                                </div>
                                <div className='flex'>
                                    <div >
                                        <h2 className='text-3xl font-bold'>${data.price}/month</h2>
                                    </div>
                                    <button onClick={() => handleDelete(data)} className='ml-[15px] btn rounded-full'>X</button>
                                </div>

                            </div>)
                        }
                        <div className='rounded-lg flex justify-between mb-[15px] p-[12px] bg-red-400'>
                            <div className='font-bold text-2xl'>Total</div>
                            <div className='font-bold text-2xl'>{totalPrice}$</div>
                        </div>
                        <button onClick={handleCheckout} className='bg-red-600 py-7 mb-[14px] text-white text-lg rounded-lg btn w-full'>Process to Checkout</button>
                    </>
            }
        </div>
    );
};

export default Cart;