import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { BanknoteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawalRequest } from "../State/Withdrawal/Action";

const WithdrawalForm = () => {
  const dispatch = useDispatch();
  const { wallet, withdrawal } = useSelector((store) => store);
  const [amount, setAmount] = React.useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(withdrawalRequest({ amount, jwt: localStorage.getItem("jwt") }));
    console.log(amount);
  };

  return (
    <div className="pt-10 space-y-5">
      <div
        className="flex justify-between items-center rounded-md
             bg-slate-900 text-xl font-bold px-5 py-4"
      >
        <p>Available Balance</p>
        <p>$9000</p>
      </div>

      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal Amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawalInput py-7 border-none outline-none focus:outline-none px-8 text-2xl text-center"
            placeholder="$999"
            type="number"
          />
        </div>
      </div>

      <div>
        <p>Tranfer To</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <BanknoteIcon />
          <div>
            <p className="text-xl font-bold">
              {withdrawal.paymentDetails?.bankName}
            </p>
            <p className="text-xs">
              {withdrawal.paymentDetails?.accountNumber}
            </p>
          </div>
        </div>
      </div>

      <DialogClose>
        <Button onClick={handleSubmit} className="w-full py-7 text-xl">
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
