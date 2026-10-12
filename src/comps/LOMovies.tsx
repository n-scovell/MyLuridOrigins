import { useEffect } from 'react'
import useStore from '../states/movies'
export default function movies() {
  const count = useStore((state: any) => state.count)
  const movies = useStore((state: any) => state.movies)
  const fetchMovies = useStore((state: any)=> state.fetchMovies)
  console.log(movies)
  useEffect(() => {
    if (count === 0) {
      fetchMovies()
    }
  }, []);
  interface Movie {
    id: string
    movie: string
  }
  // const getFile = (film: string, year: number) => {
  //   const filterName = film.replace(/[:\-()\/.,!'"]/g, '')
  //   return `${filterName} ${year}`
  // }
  return (
    <>
      <section className="movies">
        <ul>
        {movies.map((m: Movie, index: number) => (
        <li key={index}>{m.movie}</li>
      ))}
        </ul>
      </section>
    </>
  )
}
