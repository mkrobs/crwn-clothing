import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jc8KZDmUR4DjNqWyzpTk0h678CUSuvsy6cxyHVmFO15Wqdu2Yo7Jc7JFtY5sZg7BMIXrhA512YYCiGTDMZMZXhc0004tD50J1'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };


    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
                    />
    );
};

export default StripeCheckoutButton;
