'use client'

import {  signUpSchema } from "@/actions/schema"
import { SignUp } from "@/actions/sign-up"
import ErrorMessage from "@/component/ErrorMessage"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpSchema)
    })

    const {mutate, isPending, error} = useMutation({
        mutationFn: SignUp
    })

    return (
        <>
        <form onSubmit={handleSubmit( values => mutate(values))} className=" flex flex-col mb-4">
            <fieldset>
                <label htmlFor="email" >Enter your email</label>
                <input className="ml-2 mb-4 px-2" {...register("email")}  id="email"  placeholder="Enter Your Email"/>
                {errors.email && <ErrorMessage message={errors.email.message!} />}
            </fieldset>
            <fieldset>
                <label htmlFor="username" >Enter your name </label>
                <input className="ml-2 mb-4 px-2" {...register("username")}  id="username"  placeholder="Enter Your name"/>
                {errors.username && <ErrorMessage message={errors.username.message!} />}
            </fieldset>
            <fieldset>
                <label htmlFor="password" >Enter your password </label>
                <input className="ml-2 mb-4 px-2" type="password" {...register("password")}  id="password" placeholder="Enter Your Email"/>
                 {errors.password && <ErrorMessage message={errors.password.message!} />}
            </fieldset>
            <button className="button-secondary w-1/2 m-auto">{isPending ? "Signing you in!" : "Sign In"}</button>
        </form>
        {error && <ErrorMessage message = {error.message} />}
        </>
    )
}
export default SignUpForm