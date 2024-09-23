import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters"
import Pagination from './components/Pagination'

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const initialURL = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo({
          next: data.info.next,
          prev: data.info.prev

      });
    })
      .catch(error => console.log(error))
  }


  const onPrevious = () => {
    if (info.prev !== null) {
    fetchCharacters (info.prev);

  }
  }


 const onNext = () => {
  if (info.next !== null) {
  fetchCharacters (info.next);

  }
 }


  useEffect(() => {
    fetchCharacters(initialURL);

  })

  return (
    <>
      <Navbar brand="Rick and Morty Page" />
      
      <div className="container mt-5">
        <Pagination prev = {info.prev} next = {info.next} onPrevious ={ onPrevious } onNext ={ onNext } />
        <Characters characters={characters} />
        <Pagination prev = {info.prev} next = {info.next} onPrevious ={ onPrevious } onNext ={ onNext } />
      </div>
    </>
  );
}

export default App;
