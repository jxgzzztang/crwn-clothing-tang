import type { FormEvent } from "react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

import { BUTTONTYPE_MAPPER } from "../button/button.component"

import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment.styles"

const Payment = () => {

  const elements = useElements()
  const stripe = useStripe()

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!elements || !stripe) {
      return
    }
    const paymentIntentResponse = await fetch("../../../netlify/functinos/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: 100 })
    }).then(res => res.text())
    console.log(paymentIntentResponse)
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handleFormSubmit}>
        <h2>payment</h2>
        <CardElement />
        <PaymentButton buttonType={BUTTONTYPE_MAPPER.inverted}> 立即支付 </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default Payment