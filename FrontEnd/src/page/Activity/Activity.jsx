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
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../State/Order/Action";
import { CalculateProfit } from "../../utils/CalculateProfit";
const Activity = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt");
    if (jwtToken) {
      dispatch(getAllOrders({ jwt: jwtToken }));
    }
  }, [dispatch]);

  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead className="text-center">Trading Pair</TableHead>
            <TableHead className="text-center">Buy Price</TableHead>
            <TableHead className="text-center">Sell Price</TableHead>
            <TableHead className="text-center">Order Type</TableHead>
            <TableHead className="text-center">Profit/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order.orders.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>2024/08/31</p>
                <p className="text-gray-400">12:23:43</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage
                    src={item.orderItem.coin.image.replace("large", "small")}
                  />
                </Avatar>
                <span>{item.orderItem.coin.name}</span>
              </TableCell>
              <TableCell>{item.orderItem.buyprice}</TableCell>
              <TableCell>{item.orderItem.sellprice}</TableCell>
              <TableCell>{item.orderType}</TableCell>
              <TableCell>{CalculateProfit(item)}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
