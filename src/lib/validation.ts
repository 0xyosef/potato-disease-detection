import * as z from "zod";

export const AuthValidation = z.object({
    username: z.string().min(2,{message : 'Too short'}).max(50),
    password:z.string().min(6,{message:'Password must be at least 8 characters.'})
})