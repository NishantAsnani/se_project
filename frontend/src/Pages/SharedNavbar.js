import { Outlet } from 'react-router'
import Navbar from './Navbar'

const SharedNavbar=()=>{
return(
    <>
    <Navbar/>
    <Outlet/>
    </>
)}
export default  SharedNavbar