import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedNavbar from "./Pages/SharedNavbar";
import Productpage from "./Pages/Productpage";
import Register from "./Pages/Register";
import Cart from "./Pages/cart";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./Pages/auth";
import Home from "./Pages/Home";

const App = () => {
  const [cartItems, setcartItems] = useState([]);
  const [user,setuser]=useState({
    First_Name:'',
    Last_Name:'',
    Email:'',
    Contact_Number:'',
    password:'',
    confirm_password:''
    })
    const [auth,setauth]=useState(false)

  const handleAddProduct = (Cartproduct) => {
    const ProductExist = cartItems.find((item) => item.id === Cartproduct.id);
    if (ProductExist) {

      setcartItems(
        cartItems.map((item) =>
          item.id === Cartproduct.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
      console.log(cartItems)
    } else {
      console.log(cartItems)
      setcartItems([...cartItems,{ ...Cartproduct, quantity: 1 }]);
    }
  };
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedNavbar />}>
          <Route path="Login" auth={auth} setauth={setauth} element={<Login />} />
          <Route path="Register" user={user} setuser={setuser} element={<Register />} />
          <Route path="/" user={user} setuser={setuser} element={<Home />} />
          
          
          <Route
            path="products"
            element={
              <ProtectedRoute>
                <Productpage handleAddProduct={handleAddProduct}></Productpage>
              </ProtectedRoute>
            } />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart cartItems={cartItems} user={user} handleAddProduct={handleAddProduct}></Cart> 
              </ProtectedRoute>
             }/>
  
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
