import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import SideBar from "./sidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  return (
    <div
      className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky
         top-0 left-0 right-0 flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="h-100 border-r-0 flex flex-col justify-center"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1"></div>
              </SheetTitle>
              {/* <Avatar>
                        <AvatarImage className = 'h-5 w-5 flex justify-center' src = "E:\Crypto\FrontEnd\src\assets\bitcoin-coin-white-background_968517-194893.avif"/>

                    </Avatar> */}
              <div>
                <span className="font-bold text-orange-700">Crypt</span>
                <span>Ex</span>
              </div>
            </SheetHeader>
            <SideBar />
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">CryptEx</p>
        {/* <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div> */}
      </div>
      <div>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-11 w-11"
          onClick={() => navigate("/profile")} // Navigate on click
        >
          <Avatar>
            <AvatarFallback>
              {auth.user?.fullName ? auth.user.fullName[0].toUpperCase() : "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
