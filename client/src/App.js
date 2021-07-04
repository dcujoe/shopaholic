import React from "react";
import { CartProvider } from "use-shopping-cart";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Result from './pages/Result'


const App = () => {
  return (
<CartProvider
 //mode="checkout-session"
 //stripe={stripePromise}
 //currency="USD"
 >
   <BrowserRouter>
   <NavBar />

   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/result" component={Result} />
     <Route exact path="/:productId" component={Product} />
   </Switch>
   
   </BrowserRouter>

</CartProvider>
  )
}

export default App