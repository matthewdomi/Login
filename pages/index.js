import SignIn from "./components/Form/sign-in"
import SignUp from "./components/Form/sign-up"
import ExpandedNavbar from "./components/Navbar/expandNavbar"
import StraightNavbar from "./components/Navbar/straightNavbar"
import EcommerceCard from "./components/Card.component/ecommercecard"
import Sidebar from "./components/Sidebar/sidebar"
import LogoSidebar from "./components/Sidebar/logosidebar"
import Search from "./components/search"


export default function Home() {
  return (
    <>
  <div className=" sticky top-0 z-50 backdrop-blur " >
    <StraightNavbar />
      <div className="bg-orange-300 py-0.5"></div>
</div>
    <div className="">
      <Sidebar/>
     
    </div>
    <div className=" mt-5">
    <EcommerceCard />
    <EcommerceCard />
    <Search />
    </div>

    
    

    </>
  )
}
