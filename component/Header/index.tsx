import AccountLinks from "../AccountLinks"
import Logo from "../Logo"
import SearchInput from "../Search"

const Header = () => {
    return(
        <>
        <header className="flex justify-between items-center pb-4 flex-wrap">
            <Logo />
            <SearchInput  />
            <AccountLinks />
        </header>
        <div className=" mt-4 width-[80%] border-b-2 flex-8/12"></div>
      
        </>
    )

}
export default Header

