import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import '../Styles/sidebar.css'
import dash_icon from '../assets/icon.png'
import Underline from './Underline'
import { CiHome } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";


const Sidebar = () => {
  const currentLocation = useLocation();
  return (
    <div className='sidebar-container shadow shadow-light'>
        <div className="sidebar">
        <Underline/>
         <div className="logo">
          <img className='dash-icon' src={dash_icon} alt="" />
          <h3 className='mt-2 ms-1'>Neuvo</h3>
         </div>
         <Underline/>
         <div className="menu mt-3">

          {/* Dashboard */}
          <Link className='menu-link' to={'/dashboard'}>
              <div className={currentLocation.pathname=='/dashboard'? 'home menu-item text-primary' : "dashboard menu-item"}>
              <MdOutlineDashboard />
              <h6>Dashboard</h6>
            </div>
          </Link>

          {/* Home */}
          <Link className='menu-link' to={'/home'}>
            <div className={currentLocation.pathname=='/home'? 'home menu-item text-primary' : "home menu-item"}>
            <CiHome />
            <h6>Home</h6>
          </div>
          </Link>
          
        {/* category */}
        <Link className='menu-link' to={'/category'}>
            <div className={currentLocation.pathname=='/category'? 'home menu-item text-primary' : "home menu-item"}>
            <MdOutlineCategory />
            <h6>Category </h6>
          </div>
          </Link>


         </div>
        </div>
    </div>
  )
}

export default Sidebar