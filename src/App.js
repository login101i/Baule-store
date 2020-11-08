import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Home from './components/Home'
import Default from './components/Default'
import Modal from './components/Modal'


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>

          <Route exact path="/" component={Home} />
          {/* <Route exact path="/productlist" component={ProductList} /> */}
          <Route exact path="/productdetails" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default}/>

        </Switch>
        <Modal/>



      </>
    )
  }
}













// import React, { Component } from "react"
// import { Route, Switch } from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css"

// import Home from './components/Home'
// import Cart from './components/Cart'
// import ProductDetails from './components/ProductDetails'
// import Default from './components/Default'
// import Navigation from './components/Navbar'



// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Navigation />
//         <Switch>

//           <Route exact path='/' component={Home} />
//           <Route exact path='/cart' component={Cart} />
//           <Route exact path='/productdetails' component={ProductDetails} />
//           <Route component={Default} />

//         </Switch>

//       </React.Fragment>

//     );
//   }
// }

// export default App;
