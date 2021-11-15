import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App(props) {
    return(
      <div>
      <BrowserRouter> {/*PRIMEIRO O BROWSER, DEPOIS O SWITCH, DEPOIS O ROUTE, E DEPOIS O TEU COMPONENTE(NAO PRECISA SER EXATAMENTE NESSA ORDEM) */}
       <Navbar></Navbar>
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products"  component={Products}/>
        <Route path="/services"  component={Services}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route>
        <Footer></Footer>
        </Route>      
       </Switch>
      </BrowserRouter>
      </div>
    )
}

export default App;
