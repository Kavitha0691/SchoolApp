import Logo from "@/component/Logo";

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
             <header className="flex justify-between items-center pb-4 flex-wrap">
            <Logo />
            </header>
            <h2> Hello Auth Layout</h2>
            {children}
        </>
    )
}

export default AuthLayout