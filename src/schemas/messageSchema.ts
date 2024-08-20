import {z} from 'zod'


export const verifySchema = z.object({
    content: z
    .string()
    .min(10,{message:"Content must be at least 10 characters"})
    .max(300,{message:"Content should be less than 300 charcters"})
})