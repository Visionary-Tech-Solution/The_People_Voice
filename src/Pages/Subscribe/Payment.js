import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../../apiService/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const stripePromise = loadStripe('pk_test_51Mtz5oHGm5JMFetDGtK3IBCrzCwwHe7D0Bfy1Y1KElQqiJBACfFj2Z0gynSXqY5hLfRw0U0SHvsG4GFCMYEGQLLC00synsMba1');
const PaymentForm = ({id}) => {
  const cardElementStyle = {
    base: {
      width: '339px',
      background: 'red',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      color: 'black',
      padding:'6px 3px',
      '::placeholder': {
        color: 'black',
      },
    },
    invalid: {
      color: '#dc3545',
    },
  };
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
        console.log(paymentMethod.id);
    if (error) {
      // Handle payment error
      setError(error.message);
    } else {
     
     axios.post("/subscriptions/create/",{
      plan_id: id,
      stripe_token: paymentMethod.id
  })
      .then(res=>{
        if(res.status==201 || res.status==200){
          toast.success('payment done successfully')
          navigate("/")
          setPaymentSuccess(true);
        }
      
      })
      .catch(err=>{
           toast.error('fail the payment method')
      })
     
    }
  };

  useEffect(() => {
    // Load Stripe.js asynchronously
    stripePromise.then((stripe) => {
      // Stripe.js has loaded
    });
  }, []);

  return (
    <div>
      {paymentSuccess ? (
        <div>
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            
            <div id="card-element" className='mt-7'>
              <CardElement options={{style:cardElementStyle}} />
            </div>
            {error && <div className="error">{error}</div>}
          </div>
          <button type="submit" className='mt-7 bg-white w-full hover:bg-black hover:text-white shadow-lg px-6 py-3 hover:underline'>Pay</button>
        </form>
      )}
    </div>
  );
};

const Pays = ({id}) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm id={id}/>
    </Elements>
  );
};

export default Pays;
