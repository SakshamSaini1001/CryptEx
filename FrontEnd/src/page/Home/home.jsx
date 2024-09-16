import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Assettable from "@/page/Home/Assettable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon } from "@radix-ui/react-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getCoinList, getTop50CoinList } from "../State/Coin/Action";

const Home = () => {
  const dispatch = useDispatch();
  const { coin } = useSelector((store) => store);
  const [category, setCategory] = React.useState("all");
  const handleCategory = (value) => {
    setCategory(value);
  };

  useEffect(() => {
    dispatch(getCoinList(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTop50CoinList());
  }, [category]);

  return (
    <div className="w-full h-full px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="lg:w-[50%] lg:border-r full flex flex-col">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>

            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>

            {/* <Button
              onClick={() => handleCategory("topgainers")}
              variant={category == "topgainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>

            <Button
              onClick={() => handleCategory("toplosers")}
              variant={category == "toplosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button> */}
          </div>
          <Assettable
            coin={category == "all" ? coin.getCoinList : coin.top50}
            category={category}
          />
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5 ">
          <StockChart coinId={"ethereum"} />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://coin-images.coingecko.com/coins/images/279/thumb/ethereum.png?1696501628" />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">
                  {coin.coinDetails?.market_data.current_price.usd}
                </p>
                <p className="text-red-600">
                  <span>-141</span>
                  <span>(-0.534%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="absolute bottom-5 right-5 z-40 flex flex-col
            justify-end items-end gap-2">

                <div className="relative w[10rem] cursor-pointer group">
                    <Button className="w-full h-[3rem] gap-2 items-center">
                        <MessageCircle/>
                        <span className="text 2-xl">ChatBot</span>
                    </Button>
                </div>
            </section> */}
    </div>
  );
};

export default Home;
