import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './components/pages/home/Home'
import './app.css'
import { BrowserRouter as Router,Switch, Route, Routes } from 'react-router-dom';
import UserList from "./components/pages/userlist/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newuser/NewUser";
import ProductList from "./components/pages/productlist/ProductList";
import Product from "./components/pages/product/Product";
import Newproduct from "./components/pages/newproduct/Newproduct";

function App() {
  return (
     <Router>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/user/:userId' element={<User/>}/>
        <Route path='/newUser' element={<NewUser/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/newProduct' element={<Newproduct/>}/>

      </Routes>
      </div>
      </Router>
     
      
      


    
  );
}

export default App;
