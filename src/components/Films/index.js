import React, { Component } from 'react';
import EachFilm from './EachFilm';
import './style.css';

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      person: [],
      films: [],
      eachFilm: [],
      showFilm: false,
      isLoadingPeople: false,
      isLoadingPerson: false,
      isLoadingFilms: false,
      isLoadingEachFilm: false
    };
  }

  componentDidMount() {
    this.setState({ isLoadingPeople: true });
    this.getPeople();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('url: ', window.location.href);
  }

  getPeople = () => {
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({people: data.results, isLoadingPeople: false})
    })
  };

  seeMore = (e, id) => {
    this.setState({isLoadingEachFilm: true})

    fetch('https://swapi.co/api/people/'+id)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({person: data, films: data.films});

      if (this.state.films !== null) {
        let total = this.state.films.length;
        this.state.films.map((item) => {
          this.fetchFilms(item, total);
        })
      }
      this.props.history.push('/films/' + data.name);
    });


    this.setState({
      showFilm: true
    })
  };

  fetchFilms = (URLItem, lengthOfItem) => {
    fetch(URLItem)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ eachFilm: [...this.state.eachFilm, data], isLoadingEachFilm: false});
    });
  };

  render() {
    const
    { people,
      person,
      showFilm,
      films,
      eachFilm,
      isLoadingPeople,
      isLoadingEachFilm } = this.state;

    if(isLoadingPeople || isLoadingEachFilm) {
      return <p>Loading...</p>;
    }
    console.log('films: ', people);
    return (
      <React.Fragment>
      <p>Films</p>
      <ul className="films">
        { !showFilm && (
          people.map((item, index) => (
            <li key={index} onClick={e => this.seeMore(e, index + 1)}>
              {item.name}
            </li>
          ))
        )}
      </ul>
      { showFilm && person !== null && (
        <React.Fragment>
        <ul>
          <li>Name: {person.name}</li>
          <li>Gender: {person.gender}</li>
          <li>Height: {person.height}</li>
        </ul>
          { eachFilm !== null && (
            <EachFilm data={eachFilm} />
          )}
        </React.Fragment>
      )}
      </React.Fragment>
    );
  }
}

export default Films;
