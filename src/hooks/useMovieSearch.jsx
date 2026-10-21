import { useState } from "react"
import { searchMovie } from "../api/searchMovie"

export function useMovies({ search }) {
  const [movie, setMovie] = useState()
  const [loading, setloading] = useState(true)

  async function getMovie() {
    try {
      setloading(true)
      const movieSearch = await searchMovie(search)
      setMovie(movieSearch)
    } catch (error) {
      console.error(error)
    } finally {
      setloading(false)
    }
  }
  return { movie, setMovie, getMovie, loading }
}
