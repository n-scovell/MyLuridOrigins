import './styling/LuridOrigins.css'
import Topper from './comps/LOTopper'
import Movies from './comps/LOMovies'
// import { useState } from 'react';


export interface Movie {
  id: number
  movie: string
  year: number
  watched: boolean
  actors: any[]
  directors: string
}
function App() {

  const now = new Date();
  const year = now.getFullYear(); 

  const handleSubmit = async (e: any) => {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget); 
    const data = Object.fromEntries(formData.entries());
    let payload = {
      action : 'asas',
      movie : data.movie,
      director: data.director,
      year : Number(data.year),
      actors : [data.actors],
      tags : [data.tags],
      era : data.era,
      franchise : data.franchise,
      watched : true,
      fansOf : [data.fansof],
      comment : data.comment,
      trailer : data.trailer,
      rating : Number(data.rating),
    }
    try {
      const result = await sendMovie(payload);
      console.log(result)
    } catch (err) {
      console.log('HEY: ', err)
    }
  };
  const sendMovie = async (payload:any) => {
    console.log(payload)
    try {
      const res = await fetch("https://lurid-origins-api.vercel.app/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data: Movie[] = await res.json()
      return data
    } catch (error) {
      console.log('Error: ', error)
      throw error;
    }
  }

  return (
    <>
      <form className='myForm' onSubmit={handleSubmit}>
      <div>
        <label>Password:</label>
        <input type="password" name="password" defaultValue="" />
      </div>
      <div>
        <label>Movie:</label>
        <input type="text" name="movie" defaultValue="" />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" name="year" min="1900" max={year} step="1" placeholder="YYYY" />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" name="director" />
      </div>
      <div>
        <label>Actors:</label>
        <input type="text" name="actors" />
      </div>
      <div>
        <label>Era:</label>
        <input type="text" name="era" />
      </div>
      <div>
        <label>Tags:</label>
        <input type="text" name="tags" />
      </div>
      <div>
        <label>Franchise:</label>
        <input type="text" name="franchise" />
      </div>
      <div>
        <label>Fans Of:</label>
        <input type="text" name="fansof" />
      </div>
      <div>
        <label>Trailer:</label>
        <input type="text" name="trailer" />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" name="status" />
      </div>
      <div>
        <label>Comment:</label>
        <input type="text" name="comment" />
      </div>
      <div>
        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" step="1" placeholder="1" />
      </div>
      <button type="submit">Submit</button>
    </form>
      <Topper head="DARK MEDIA. DISTURBING ORIGINS" />
      <Movies />
    </>
  )
}
export default App