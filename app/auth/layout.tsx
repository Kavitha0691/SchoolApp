import Logo from "@/component/Logo";

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <header className="flex justify-center items-center pb-4 flex-wrap mt-8">
                <Logo />
            </header>
            {children}
        </>
    )
}

export default AuthLayout