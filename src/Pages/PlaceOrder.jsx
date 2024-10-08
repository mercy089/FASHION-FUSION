import React, { useContext, useState } from 'react';
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';
import { ShopContext } from '../Context/ShopContext';

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const { navigate } = useContext(ShopContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and order placement logic here
    // On success, navigate to the orders page
    navigate('/orders');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Delivery Information Section */}
      <div className='flex flex-col gap-6 w-full sm:max-w-[45%]'>
        <div className='text-xl sm:text-2xl'>
          <Title text1='DELIVERY' text2='INFORMATION' />
        </div>
        <div className='flex gap-4'>
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='First Name'
            required
          />
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='Last Name'
            required
          />
        </div>
        <input
          className='border border-gray-300 rounded py-2 px-4 w-full'
          type='email'
          placeholder='Email Address'
          required
        />
        <input
          className='border border-gray-300 rounded py-2 px-4 w-full'
          type='text'
          placeholder='Flat, House No., Building, Company, Apartment'
          required
        />
        <input
          className='border border-gray-300 rounded py-2 px-4 w-full'
          type='text'
          placeholder='Area, Colony, Street, Sector, Village'
          required
        />
        <div className='flex gap-4'>
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='City/District/Town'
            required
          />
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='State'
            required
          />
        </div>
        <div className='flex gap-4'>
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='PIN Code'
            required
          />
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='Country'
            value='India'
            readOnly
          />
        </div>
        <input
          className='border border-gray-300 rounded py-2 px-4 w-full'
          type='number'
          placeholder='Phone No.'
          required
        />
      </div>
      
      {/* Payment Method and Cart Summary Section */}
      <div className='w-full sm:max-w-[45%] mt-12'>
        <CartTotal className='mb-12' />
        
        <div className='mt-5'>
          <Title text1='PAYMENT' text2='METHOD' />
          <div className='flex flex-col gap-4 mt-1'>
            {/* Payment Options */}
            {['credit_card', 'net_banking', 'upi', 'cod'].map((method) => (
              <div
                key={method}
                className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${paymentMethod === method ? 'border-black' : ''}`}
                onClick={() => handlePaymentMethodChange(method)}
                role='radio' // Added for accessibility
                aria-checked={paymentMethod === method}
              >
                <input
                  type='radio'
                  name='payment_method'
                  checked={paymentMethod === method}
                  onChange={() => handlePaymentMethodChange(method)}
                  aria-label={`${method} payment method`} // Added for accessibility
                />
                <span>
                  {method === 'credit_card' && 'Credit Card / Debit Card'}
                  {method === 'net_banking' && 'Net Banking'}
                  {method === 'upi' && 'UPI'}
                  {method === 'cod' && 'Cash on Delivery (COD)'}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Place Order Button */}
        <div className='w-full text-end mt-8'>
          <button
            className='bg-black text-white text-sm px-8 py-3'
            type='submit' // Changed to 'submit' to trigger form submission
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
