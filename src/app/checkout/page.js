"use client"
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(

    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  export default function PreviewPage() {

    const handleClick = async () => {
 
        try{

            const response = await fetch("/api/cart/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const jsonResponse = await response.json();
            redirectUrl = jsonResponse.redirectUrl;
            window.location.assign(redirectUrl)

        } catch (err){
            console.log(err);     
        }
    }

    return (
        <button type='button' style={{color: 'blue'}} onClick={handleClick}>
            Checkout 
        </button>
    )
  }