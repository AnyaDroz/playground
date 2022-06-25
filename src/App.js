import { useState, useEffect } from "react";
// import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("rendered");
  const [searchField, setSearchField] = useState("");
  // [value, setValue]
  const [authors, setAuthors] = useState([]);
  const [filteredAuthors, setFilteredAuthors] = useState(authors);

  useEffect(() => {
    console.log("fetch");
    fetch("authordata.json")
      .then((response) => response.json())
      .then((users) => setAuthors(users));
  }, []);

  useEffect(() => {
    const newFilteredAuthors = authors.filter((author) => {
      return author.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredAuthors(newFilteredAuthors);
  }, [authors, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="title">Authors</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search"
        className="author-search-box"
      />
      <CardList authors={filteredAuthors} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       authors: [],
//       searchField: "",
//     };
//   }

// componentDidMount() {

// }

//   render() {
//     const { authors, searchField } = this.state;
//     const { onSearchChange } = this;
//    );

//     return (

//     );
//   }
// }

export default App;
