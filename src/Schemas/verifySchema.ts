import {z} from 'zod'

export const verfySchema = z.object({
    code : z.string().length(6 , 'verification code must be 6 digit')
})