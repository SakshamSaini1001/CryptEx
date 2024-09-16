import { Input } from "@/components/ui/input";
import { DotFilledIcon, DotIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React from "react";
import { useDispatch } from "react-redux";
import { paymentHandler } from "../State/Wallet/Action";

const TopUpForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const dispatch = useDispatch();

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(paymentHandler({ jwt: localStorage.getItem("jwt"), amount }));
    console.log(amount, paymentMethod);
  };

  return (
    <div className="pt-10 space-y-5">
      {/* Amount Input Section */}
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="py-7 text-lg"
          placeholder="$999"
        />
      </div>

      {/* Payment Method Selection */}
      <div>
        <h1 className="pb-1">Select Payment Method</h1>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className="flex space-x-5"
          // defaultValue="RazorPay"
        >
          {/* RazorPay Option */}
          <div
            className={`flex items-center space-x-2 border p-3 px-5 rounded-md ${
              paymentMethod === "RazorPay"
                ? "border-purple-600"
                : "border-gray-300"
            }`}
          >
            <RadioGroupItem
              icon={() =>
                paymentMethod === "RazorPay" && (
                  <DotIcon className="text-purple-600 w-5 h-5" />
                )
              }
              className="h-5 w-5 rounded-full border border-gray-400"
              value="RazorPay"
              id="r1"
            >
              {paymentMethod === "RazorPay" && (
                <DotFilledIcon className="text-purple-600 w-5 h-5" />
              )}
            </RadioGroupItem>
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32 h-13">
                <img src="src/assets/Razorpay.png" alt="RazorPay" />
              </div>
            </Label>
          </div>

          {/* PayPal Option
          <div
            className={`flex items-center space-x-2 border p-3 px-5 rounded-md ${
              paymentMethod === "PayPal"
                ? "border-purple-600"
                : "border-gray-300"
            }`}
          >
            <RadioGroupItem
              icon={() =>
                paymentMethod === "PayPal" && (
                  <DotFilledIcon className="text-purple-600 w-5 h-5" />
                )
              }
              className="h-5 w-5 rounded-full border border-gray-400"
              value="PayPal"
              id="r2"
            >
              {paymentMethod === "PayPal" && (
                <DotFilledIcon className="text-purple-600 w-5 h-5" />
              )}
            </RadioGroupItem>
            <Label htmlFor="r2">
              <div className="bg-white rounded-md px-5 py-2 w-32 h-13">
                <img src="src/assets/PayPal.png" alt="PayPal" />
              </div>
            </Label>
          </div> */}
        </RadioGroup>
      </div>

      <Button onClick={handleSubmit} className="w-full py-7">
        Submit
      </Button>
    </div>
  );
};

export default TopUpForm;
