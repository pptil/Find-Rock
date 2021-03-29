import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResults from "./page-search-results";
import PageHome from "./page-home";
import PageArtist from "./page-artist";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResults}></Route>
            <Route exact path="/artista" component={PageArtist}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
