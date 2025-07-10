import { z } from "zod";


export const verifySchema = z.object({
    code: z.length(6, 'verification code must be exactly 6 characters long')
})