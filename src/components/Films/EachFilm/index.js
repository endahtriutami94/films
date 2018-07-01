import React, { Component } from 'react';

class EachFilm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="endah">
        {this.props.data.title}
        { this.props.data.map((item, index) => (
            <div key={`eachFilm-${index}`}>{item.title}</div>
          ))
        }
      </div>
    );
  }
}

export default EachFilm;
