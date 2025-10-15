import Link from "next/link"
import SignUpForm from "./SignUpForm"

const SignUpPage = () => {
    return (
        <>
            <div className="border-1 rounded-xl p-4 w-[600px] mx-auto">
                <h2 className="font bold text-3xl mb-6">Sign Up!</h2>
                <SignUpForm />
                <div>Already have an account? Log in <Link className="text-red-500" href="/auth/login"> here!</Link></div>
            </div>
        </>
    )
}

export default SignUpPage