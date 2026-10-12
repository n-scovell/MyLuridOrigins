import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Movie {
  id: number
  movie: string
  watched: boolean
}

interface MovieState {
  count: number
  movies: Movie[]
  loading: boolean
  error: string | null
  fetchMovies: () => Promise<void>
}

const useStore = create<MovieState>()(
  persist(
    (set) => ({
      count: 0,
      movies: [],
      loading: false,
      error: null,
      fetchMovies: async () => {
        alert('hey')
        set({ loading: true, error: null })
        try {
          const response = await fetch('https://lurid-origins-api.vercel.app/api/movies')
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const data: Movie[] = await response.json()
          const filtered = data.filter((item) => item.watched === true)
          set({ movies: filtered, loading: false, count: 1 })
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : 'An unknown error occurred'
          set({ error: errorMessage, loading: false })
        }
      },
    }),
    {
      name: 'lo-movies',
      partialize: (state) => ({ movies: state.movies, count: state.count }),
    }
  )
)

export default useStore