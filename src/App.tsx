import './styling/LuridOrigins.css'
import Topper from './comps/LOTopper'
import Movies from './comps/LOMovies'
// import { useState } from 'react';
function App() {
  const handleSubmit = (e: any) => {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget); 
    const data = Object.fromEntries(formData.entries());
    console.log("Submitted Data:", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Password:</label>
        <input type="password" name="password" defaultValue="nope" />
      </div>
      <button type="submit">Submit</button>
    </form>
      <Topper head="DARK MEDIA. DISTURBING ORIGINS" />
      <Movies />
    </>
  )
}
export default App