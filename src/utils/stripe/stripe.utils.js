import { loadStripe } from "@stripe/stripe-js"
console.log(process.env);
export const stripePromise = loadStripe(
  process.env.REACT_APP_PUBLISH_KEY
)