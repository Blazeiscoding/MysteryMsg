import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2,"Username must be atleast 2 characters")
    .max(20,"Username must not be more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain Special Characters")


export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message:"Invaild email address"}),
    password: z.string().min(6,{message:"password be at least 6 characers"}),
})