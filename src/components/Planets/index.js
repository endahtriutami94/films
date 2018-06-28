import React, { Component } from 'react';

class Planets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    this.getPlanets();
  }

  getPlanets = () => {
    fetch('https://swapi.co/api/planets')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({planets: data.results})
    })
  };

  render() {
    const { planets } = this.state;

    return (
      <React.Fragment>
      <p>Planets</p>
      <ul>
        { planets.map((item, index) => (
          <li key={`planets-${index}`}>{item.name}</li>
        ))}
      </ul>
      </React.Fragment>
    );
  }
}

export default Planets;
