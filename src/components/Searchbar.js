import React, { PureComponent } from "react";
import './Searchbar.css';

export default class Searchbar extends PureComponent {
  render() {
    return (
      <div className="search">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            id="form"
            type="search"
            placeholder="Search"
            aria-label="Search"/>
            
        </form>
      </div>
    );
  }
}
