import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const Assettable = ({ coin, category }) => {
  const [cachedCoins, setCachedCoins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if data is in localStorage
    const cachedData = localStorage.getItem("coinList");
    if (cachedData) {
      // Use cached data if available
      setCachedCoins(JSON.parse(cachedData));
    } else if (coin) {
      // Store new data in localStorage
      localStorage.setItem("coinList", JSON.stringify(coin));
      setCachedCoins(coin);
    }
  }, [coin]);

  return (
    <Table>
      <ScrollArea
        className={`${category == "all" ? "h-[77.5vh]" : "h-[82vh]"}`}
      >
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coin?.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell
                onClick={() => navigate(`market/${item.id}`)}
                className="font-medium flex items-center gap-2"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={item.image} className="h-full w-full" />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.market_cap.toLocaleString()}</TableCell>
              <TableCell>{item.total_volume.toLocaleString()}</TableCell>
              <TableCell>
                {item.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
              <TableCell className="text-right">
                ${item.current_price.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ScrollArea>
    </Table>
  );
};

export default Assettable;
