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
import {
  addCoinToWatchlist,
  getUserWatchlist,
} from "../State/Watchlist/Action";
import { existInWatchlist } from "../../utils/existInWatchlist";

function WatchList() {
  const { watchlist } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWatchlist(localStorage.getItem("jwt")));
  }, [dispatch]);

  const handleRemoveToWatchlist = (value) => {
    dispatch(
      addCoinToWatchlist({
        jwt: localStorage.getItem("jwt"),
        coinId: value,
      })
    );
  };
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">WatchList</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead className="text-center">Symbol</TableHead>
            <TableHead className="text-center">Volume</TableHead>
            <TableHead className="text-center">Market Cap</TableHead>
            <TableHead className="text-center">24h</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={item.image.replace("large", "small")} />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell>${item.current_price}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleRemoveToWatchlist(item.id)}
                  size="icon"
                  className="h-10 w-10"
                >
                  <BookmarkFilledIcon className="w-6 h-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default WatchList;
