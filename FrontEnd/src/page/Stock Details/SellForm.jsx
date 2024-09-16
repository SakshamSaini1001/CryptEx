import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { React, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { getUserWallet } from "../State/Wallet/Action";
import { getAssetDetails } from "../State/Assets/Action";
import { payOrder } from "../State/Order/Action";

const SellForm = () => {
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { coin, wallet, asset } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const amount = e.target.value;
    setAmount(amount);

    const volume = calculateSellCost(
      amount,
      coin.coinDetails?.market_data.current_price.usd
    );
    setQuantity(volume);
  };

  const calculateSellCost = (amount, price) => {
    let volume = amount / price;
    let decimalPlaces = Math.max(2, price?.toString().split(".").length);
    return volume.toFixed(decimalPlaces);
  };

  const handleFetchUserWallet = () => {
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  };

  useEffect(() => {
    dispatch(getUserWallet(localStorage.getItem("jwt")));
    dispatch(
      getAssetDetails({
        jwt: localStorage.getItem("jwt"),
        coinId: coin.coinDetails.id,
      })
    );
  }, [dispatch]);

  const handleSellCrypto = () => {
    dispatch(
      payOrder({
        jwt: localStorage.getItem("jwt"),
        orderData: {
          coinId: coin.coinDetails.id,
          quantity,
          orderType: "SELL",
        },
        amount,
      })
    );
  };

  return (
    <div className="space-y-10 p-5">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none"
            placeholder="Enter Amount..."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div>
            <p className="border-text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              {quantity}
            </p>
          </div>
        </div>
        {false && (
          <h1 className="text-red-600 text-center pt-5">
            Insufficient Balance to sell
          </h1>
        )}
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <Avatar>
            <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400" />
          </Avatar>
        </div>
        <div className="flex items-center gap-2">
          <p>{coin.coinDetails?.market_data.name}</p>
          <DotIcon className="text-gray-400" />
          <p>{coin.coinDetails?.id}</p>
        </div>
        <div className="flex items-end gap-2">
          <p className="text-xl font-bold">
            ${coin.coinDetails?.market_data.current_price.usd}
          </p>
          <p className="text-red-500">
            <span>-432.43</span>
            <span>(-1.3%)</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Available Coin</p>
        <p>{asset.assetDetails?.quantity || 0}</p>
      </div>
      <div>
        <Button onClick={handleSellCrypto} className="w-full py-6 bg-red-500">
          Sell
        </Button>
      </div>
    </div>
  );
};

export { SellForm };
