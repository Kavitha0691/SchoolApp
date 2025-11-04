import AccountLinks from "../AccountLinks"
import Logo from "../Logo"
import SearchInput from "../Search"

const Header = () => {
  return (
    <header className="flex flex-col mb-8 mt-6  md:flex-row items-center justify-between w-full py-3 px-4  bg-white">
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <Logo />
      </div>

      <div className="flex-grow max-w-xl mx-4 mb-6 md:mb-0">
        <SearchInput />
      </div>

      <div className="flex-shrink-0">
        <AccountLinks />
      </div>
    </header>
  )
}

export default Header