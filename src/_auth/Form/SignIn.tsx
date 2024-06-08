import { Button } from "@/components/ui/button"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast";
import { AuthValidation } from "@/lib/validation";
import { apiUrl } from "@/lib";
import { useNavigate } from "react-router-dom";
import { useLoalStorage } from "@/hooks/useLocalStorage";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";


export function SingInForm() {

    const { toast } = useToast();
    const navigate = useNavigate();
    const {setItem}=useLoalStorage("token");
    const {isAuth,setIsAuthenticated}=useAuth();
    useEffect(() => {
      if (isAuth) {
        toast({ title: "You are already logged in!" });
        navigate('/');
      }
    }, [isAuth]);
    const form = useForm<z.infer<typeof AuthValidation>>({
        resolver: zodResolver(AuthValidation),
        defaultValues: {
            username: "",
            password: "",
        },
    });
    const handleSignin = async (user: z.infer<typeof AuthValidation>) => {
        const reqest = await fetch(`${apiUrl}/token`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:new URLSearchParams(user).toString(),
        });
        if (!reqest.ok) {
            toast(
                { title: "login failed. Please try again.", variant: "destructive" },
            );
        } 
        const data = await reqest.json();

        setItem(data.access_token);
        setIsAuthenticated(true);
        toast({ title: "Login successful." });
        navigate("/");

    };
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl text-muted">SignIn</CardTitle>
                <CardDescription className="text-muted">
                    Enter your email below to login to your account.
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSignin)}
                >
                    <CardContent className="grid gap-4">

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (

                                <FormItem>
                                    <FormLabel className="shad-form_label">Email</FormLabel>
                                    <FormControl>
                                        <Input id="username" type="text" placeholder="0xAny" required {...field} />
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
                                    <FormLabel className="shad-form_label">Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" className="shad-input" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Sign In</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}
