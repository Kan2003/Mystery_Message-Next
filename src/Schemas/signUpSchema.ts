import {z} from 'zod'


export const usernameValidation = z.string()
.min(2,"username must be atleast 2 characters long")
.max(20 , 'must not be more then 20 character')

export const signupSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message :'invalid email'}),
    password : z.string().min(8, {message : 'must be at least 8 characters long'}),
})