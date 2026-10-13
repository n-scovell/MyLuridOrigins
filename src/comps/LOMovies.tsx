import { useEffect } from 'react'
import useStore from '../states/movies'
export default function movies() {
  // const count = useStore((state: any) => state.count)
  const movies = useStore((state: any) => state.movies)
  const fetchMovies = useStore((state: any)=> state.fetchMovies)
  interface Movie {
    id: string
    movie: string
    year: number
  }
  const getFile = (film: string, year: number) => {
    const filterName = film.replace(/[:\-()\/.,!'"]/g, '')
    return `${filterName} ${year}`
  }
  useEffect(() => {
    // if (count === 1) {
      fetchMovies()
    // }
  }, []);
  return (
    <>
      <section className="movies">
        <ul>
        {movies.map((m: Movie, index: number) => (
        <li key={index}>
          <img src={`/images/processed/thumb/${getFile(m.movie, m.year)}.jpg`} height='150' loading="lazy" />
          <h3>{m.movie}</h3>
        </li>
      ))}
        </ul>
      </section>
    </>
  )
}
