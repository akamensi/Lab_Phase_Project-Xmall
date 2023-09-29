
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';
import Profil from './Components/Profil';
import Login from './Components/Login'
import Contactus from './Components/Contactus';
import Whoweare from './Components/Whoweare';
import Navigationbar from './Components/Navigationbar';
import Privateroute from './Components/Privateroute';
import Errorhand from './Components/Errorhand';
import Listusers from './Components/Listusers';
import Edituser from './Components/Edituser';
import Editcurrentuser from './Components/Editcurrentuser';
import EditMarket from './Components/EditMarket';
import AddMarket from './Components/AddMarket';
import ListMarket from './Components/ListMarket';
import ProfilUser from './Components/ProfilUser';
import ListMarketUser from './Components/ListMarketUser';
import ListProduct from './Components/Product/ListProduct';
import AddProduct from './Components/Product/AddProduct';
import EditProduct from './Components/Product/EditProduct';
import UserDescription from './Components/UserDescription';
import MarketDescription from './Components/MarketDescription';
import DescriptionProduct from './Components/Product/DescriptionProduct';


function App() {
  return (
    <div className="Ap">
      
      <Navigationbar/>
      <Errorhand/>

      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Profil" element={ <Privateroute><Profil/></Privateroute>}/>
      <Route path="/Contactus" element={<Contactus/>}/>
      <Route path="/Whoweare" element={<Whoweare/>}/>
      <Route path="/Listusers" element={<Listusers/>}/>
      <Route path="/Edituser/:id" element={<Edituser/>}/>
      <Route path="/Editcurrentuser/:id" element={<Editcurrentuser/>}/>
      <Route path="/ListMarket" element={<ListMarket/>}/>
      <Route path="/EditMarket/:id" element={<EditMarket/>}/>
      <Route path="/AddMarket" element={<AddMarket/>}/>
      <Route path="/ProfilUser/:id" element={<ProfilUser/>}/>
      <Route path="/ListMarketUser/:id" element={<ListMarketUser/>}/>
      <Route path="/ListProduct" element={<ListProduct/>}/>
      <Route path="/AddProduct" element={<AddProduct/>}/>
      <Route path="/EditProduct/:id" element={<EditProduct/>}/>
      <Route path="/UserDescription/:id" element={<UserDescription/>}/>
      <Route path="/MarketDescription/:id" element={<MarketDescription/>}/>
      <Route path="/DescriptionProduct/:id" element={<DescriptionProduct/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
