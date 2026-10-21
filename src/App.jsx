import { useState, useEffect } from "react"
import { useMovies } from "./hooks/useMovieSearch.jsx"
import { MovieSearch } from "./components/movieSearch.jsx"
import { Allmovies } from "./components/movieSearch.jsx"
import "./App.css"

function App() {
  const [search, setSearch] = useState("")
  const { movie, setmovie, getMovie, loading } = useMovies({ search })

  const [allmovies, setallmovies] = useState([])

  useEffect(() => {
    try {
      fetch("https://api.imdbapi.dev/titles")
        .then((item) => item.json())
        .then((item) => setallmovies(item.titles))
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handlechange = () => {
    const input = document.querySelector("input")
    setSearch(input.value)
    setmovie(null)
  }

  const handleclick = () => {
    getMovie()
  }

  return (
    <>
      <input type="text" onChange={handlechange}></input>
      <button onClick={handleclick}>buscar</button>
      <main>
        {movie ? (
          <MovieSearch movie={movie} />
        ) : loading ? (
          <p>...cargando</p>
        ) : (
          <Allmovies allmovies={allmovies} />
        )}
      </main>
    </>
  )
}

export default App
