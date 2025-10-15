'use client'
import { LogIn } from "@/actions/log-in"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { logInSchema } from "@/actions/schema"
import ErrorMessage from "@/component/ErrorMessage"
import { useMutation } from "@tanstack/react-query"

const LogInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(logInSchema)
    })

    const {mutate, isPending, data, error} = useMutation({
        mutationFn: LogIn
    })

    return (
        <>
            <form onSubmit={handleSubmit( values => mutate(values))} className=" flex flex-col mb-4">
                <fieldset >
                    <label htmlFor="email" >Enter your email</label>
                    <input className="ml-2 mb-4 px-2" {...register("email")} id="email" placeholder="Enter Your Email" />
                    {errors.email && <ErrorMessage message={errors.email.message!} />}
                </fieldset>
                <fieldset>
                    <label htmlFor="password" >Enter your password </label>
                    <input className="ml-2 mb-4 px-2" type="password" {...register("password")} id="password" placeholder="Enter Your Email" />
                    {errors.password && <ErrorMessage message={errors.password.message!} />}
                </fieldset>
                <button className="button-secondary w-1/2 m-auto">{isPending ? "Logging you in!" : "Log In"}</button>
            </form>

            {data?.error && <ErrorMessage message = {data.error} />}
        </>
    )
}
export default LogInForm