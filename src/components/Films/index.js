import React, { Component } from 'react';

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople = () => {
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({people: data.results})
    })
  };

  seeMore = (e, id) => {
    console.log('seeMore: ', id);
    fetch('https://swapi.co/api/people/'+id)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log('data; ', data);
    });
  };

  render() {
    const { people } = this.state;
    console.log('people: ', people);
    return (
      <React.Fragment>
      <p>Films</p>
      <ul>
        { people.map((item, index) => (
          <li key={index} onClick={e => this.seeMore(e, index + 1)}>{item.name}</li>
        ))}
      </ul>
      </React.Fragment>
    );
  }
}

export default Films;
