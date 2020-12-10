import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey= 'pk_test_51HwnywLsKwomMPMZow5nliFjQ98h5iHJmKdtymi8jfZaPpnLfbGAKiMQ8JcZ7s1b3A8leP7gPRMRZO2nCk2nCVvi00TkukNdPI';
    const onToken = token =>{
    console.log(token);
    alert('Payment Successful');
}
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothin, s.r.o.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;