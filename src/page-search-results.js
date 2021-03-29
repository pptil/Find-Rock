import React, { Component } from "react";
import ArtistCard from "./components/artistcard.js";
import SearchBar from "./components/search-bar.js";
import SearchResults from "./components/search-result.js";

class PageSearchResults extends Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.setState({
      busqueda: search,
    });
    console.log(search);
  }
  componentWillMount() {
    console.log("componemtWillMount()", "antes del render");
  }

  componentWillUnmount() {
    console.log("componemtWillUnmount()", "ame fui");
  }

  changeHandle = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  render() {
    console.log("en render");
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResults busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResults;
