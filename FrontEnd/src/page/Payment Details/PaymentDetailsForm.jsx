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
import { DialogClose } from "@radix-ui/react-dialog";
import { useDispatch } from "react-redux";
import { addPaymentDetails } from "../State/Withdrawal/Action";

const PaymentDetailsForm = () => {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      accountHolderName: "",
      ifsc: "",
      accountNumber: "",
      bankName: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(
      addPaymentDetails({
        paymentDetails: data,
        jwt: localStorage.getItem("jwt"),
      })
    );
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Holder Name</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="Saksham Saini"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IFSC Code</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="YESB000002"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="***************8722"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmAccountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="**************8722"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="Yes Bank"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogClose>
            <Button type="submit" className="w-full py-5">
              Submit
            </Button>
          </DialogClose>

          {/* Add more FormField components for other fields */}
        </form>
      </Form>
    </div>
  );
};

export default PaymentDetailsForm;
