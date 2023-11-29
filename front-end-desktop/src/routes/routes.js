import React from "react";
import Home from "../screens/home";
import CreatePublication from "../screens/createPublication";
import RecyclableInformation from "../screens/recyclableInformation/recyclableInformation";
import Paper from "../screens/recyclableInformation/paper";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Batteries from "../screens/recyclableInformation/batteries";
import Biological from "../screens/recyclableInformation/biological";
import BrownGlass from "../screens/recyclableInformation/brownGlass";
import Cardboard from "../screens/recyclableInformation/cardBoard";
import Clothes from "../screens/recyclableInformation/clothes";
import Electronics from "../screens/recyclableInformation/electronics";
import Glass from "../screens/recyclableInformation/glass";
import GreenGlass from "../screens/recyclableInformation/greenGlass";
import Metal from "../screens/recyclableInformation/metal";
import NonRecyclable from "../screens/recyclableInformation/nonRecyclable";
import Plastic from "../screens/recyclableInformation/plastic";
import Shoes from "../screens/recyclableInformation/shoes";
import Trash from "../screens/recyclableInformation/trash";
import VegetableOil from "../screens/recyclableInformation/vegetableOil";
import WhiteGlass from "../screens/recyclableInformation/whiteGlass";
import Login from "../screens/login";
import Register from "../screens/register";
import ResetPassword from "../screens/resetPassword";
import RecyclableClassifier from "../screens/recyclableInformation/recyclableClassifier";
import PublicationView from "../screens/publicationView";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/criar_publicacao" component={CreatePublication} />
        <Route path="/reciclaveis" component={RecyclableClassifier} />
        <Route path="/papel" component={Paper} />
        <Route path="/pilhas_e_baterias" component={Batteries} />
        <Route path="/biodegradaveis" component={Biological} />
        <Route path="/vidro_marrom" component={BrownGlass} />
        <Route path="/papelao" component={Cardboard} />
        <Route path="/roupas" component={Clothes} />
        <Route path="/eletronicos" component={Electronics} />
        <Route path="/vidro" component={Glass} />
        <Route path="/vidro_verde" component={GreenGlass} />
        <Route path="/metais" component={Metal} />
        <Route path="/nao_reciclavel" component={NonRecyclable} />
        <Route path="/plastico" component={Plastic} />
        <Route path="/calcados" component={Shoes} />
        <Route path="/residuos" component={Trash} />
        <Route path="/oleo_vegetal" component={VegetableOil} />
        <Route path="/vidro_branco" component={WhiteGlass} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/sobre_reciclaveis" component={RecyclableInformation} />
        <Route path="/publicacao" component={PublicationView} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;