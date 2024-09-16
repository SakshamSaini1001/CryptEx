import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input.jsx"; // Adjust path if necessary
import {
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { login } from "../State/Auth/Action";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const form = useForm({
        resolver:"",
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data) => {
        dispatch(login(data,navigate("/")))
        console.log(data);
        // Handle form submission here
    };

    return (
        <div>
            <h1 className="text-xl font-bold text-center pb-3">Sign In</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="saksham@cryptex.com" 
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="*********" 
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                        <Button type = "submit" className = "w-full py-5">
                            Submit
                        </Button>

                    {/* Add more FormField components for other fields */}
                </form>
            </Form>
        </div>
    );
};

export default SignIn;