import {create} from 'zustand'
import { persist } from 'zustand/middleware'
const useStore = create(
  persist(
    (set) => ({
      count: 11,
      upper: () => set((state: any) => ({ count: state.count + 1 })), // fixed: ++ doesn't return the new value
    }),
    {
      name: 'lo-movies',
    }
  )
)

export default useStore