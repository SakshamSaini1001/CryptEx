import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { getWithdrawalHistory } from "../State/Withdrawal/Action";
import { useDispatch, useSelector } from "react-redux";

function Withdrawal() {
  const dispatch = useDispatch();
  const { wallet, withdrawal } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getWithdrawalHistory(localStorage.getItem("jwt")));
  }, []);
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5 ">Date & Time</TableHead>
            <TableHead className="text-center">Method</TableHead>
            <TableHead className="text-center">Amount</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {withdrawal.history.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p className="text-left">{item.date.toString()}</p>
              </TableCell>
              <TableCell>Bank Account</TableCell>
              <TableCell>${item.amount}</TableCell>
              <TableCell className="text-right">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Withdrawal;
