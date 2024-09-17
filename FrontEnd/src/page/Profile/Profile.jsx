import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VerifiedIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { AccountVerificationForm } from "./AccountVerificationForm";
import { useSelector } from "react-redux";

function Profile() {
  const { auth } = useSelector((store) => store);

  const handleEnableTwoFactorVerification = () => {
    console.log("Two step verificsiton");
  };

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[7rem]">Email:</p>
                  <p className="text-gray-500">{auth.user?.email}</p>
                </div>

                <div className="flex">
                  <p className="w-[7rem]">Full Name:</p>
                  <p className="text-gray-500">{auth.user?.fullName}</p>
                </div>

                <div className="flex">
                  <p className="w-[7rem]">Date of Birth:</p>
                  <p className="text-gray-500">01/01/2001</p>
                </div>

                <div className="flex">
                  <p className="w-[7rem]">Nationality:</p>
                  <p className="text-gray-500">Indian</p>
                </div>
              </div>

              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email:</p>
                  <p className="text-gray-500">saksham@gmail.com</p>
                </div>

                <div className="flex">
                  <p className="w-[9rem]">Full Name:</p>
                  <p className="text-gray-500">Saksham Saini</p>
                </div>

                <div className="flex">
                  <p className="w-[9rem]">Date of Birth:</p>
                  <p className="text-gray-500">01/01/2001</p>
                </div>

                <div className="flex">
                  <p className="w-[9rem]">Nationality:</p>
                  <p className="text-gray-500">Indian</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>Two-Step Verification</CardTitle>

                {true ? (
                  <Badge className="space-x-2 text-white bg-green-600">
                    <VerifiedIcon />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-red-400">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Enabled Two Step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify Your Account</DialogTitle>
                      <AccountVerificationForm
                        handleSubmit={handleEnableTwoFactorVerification}
                      />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Profile;
