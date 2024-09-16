import React from "react";
import { Button } from "@/components/ui/button"
import { useLocation, useNavigate } from "react-router-dom";
import SignUp from "./SignUp"; 
import SignIn from "./SignIn"; 
import ForgotPassword from "./ForgotPassword"; 

const Auth = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <div className="bg-gray-700">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712 bg-opacity-50">
                <div className="bg-blur absolute top-1/2 left-1/2 transform 
                -translate-x-1/2 -translate-y-1/2 flex flex-col 
                justify-center items-center h-[35rem] w-[30rem] rounded-md
                 z-50 bg-black bg-opacity-50 shadow-2xl shadow-white px-10">
                    <h1 className="text-6xl font-bold pb-9">Cryptex</h1>

                {location.pathname=="/signup" ?
                    <section className="w-full">
                        <SignUp/>
                        <div className="flex items-center justify-center">
                            <span>Already Have Account ?</span>
                            <Button onClick={()=>navigate("/signin")} variant="ghost">Signin</Button>
                        </div>
                    </section>
                    : location.pathname=="/forgot-password"?
                    <section className="w-full">
                    <ForgotPassword/>
                        <div className="flex items-center justify-center mt-2">
                        <span>Back To Login</span>
                            <Button onClick={()=>navigate("/signin")} variant="ghost">Signin</Button>
                        </div>
                    </section>:
                    <section className="w-full">
                        <SignIn/>
                        <div className="flex items-center justify-center">
                        <span>Don't Have Account ?</span>
                            <Button onClick={()=>navigate("/signup")} variant="ghost">Signup</Button>
                        </div>
                        
                        <div className="mt-5">
                            <Button
                            className="w-full py-5"
                            onClick={()=>navigate("/forgot-password")} variant="outline">Forgot Password</Button>
                        </div>
                    </section>
                    }
                 </div>
            </div>
        </div>
    )
}

export default Auth