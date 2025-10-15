import { z } from "zod";

export const logInSchema = z.object({
      email: z.email("Wrong email format"),
      password: z.string().min(6, "your password must be a minimum 6 characters you doofus")
})

export const signUpSchema = z.object({
      email: z.email("Wrong email format"),
      username: z.string().min(5, "usernames must be atleast 5 characters long"),
      password: z.string().min(6, "your password must be a minimum 6 characters")
})

export const postSchema = z.object({
      title:z.string().min(3, "Titles must have at least 3 characters"),
      content: z.string().optional(),
      image: z.instanceof(FormData).optional()

})

