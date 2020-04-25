import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  handleInputChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }
  render() {
    return (
      <div>
        <div className="search-area">
          <input type="text" className="search-input" value={this.state.keyword} onChange={this.handleInputChange.bind(this)} />
          <buttton className="search-button">検索</buttton>
        </div>
    </div>
    )
    ;
  }
}
