import { Outlet, Link } from "react-router-dom";
import './Home.css'
//import './App.css'

const Home = () => {
  return (
    <div>
      Apartment Ticketing System <br />
      <Link to='/customer'>Customer</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/technician'>Technician</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/billing'>Billing Report</Link>
      <Outlet/>

    </div>
  )
}
export default Home
