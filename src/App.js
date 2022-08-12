/* 
  This prototype demonstrates how to use react router, how to change data in a single component and retrieve that data via url.

  GOALS:
    [X] view all public tablature (via trending button)
      http://localhost:3000/trending
    [X] view all tablature belonging to the logged in user (via collection button)
      http://localhost:3000/Steve
    [X] view all tablature belonging to the logged in user (via card button)
      http://localhost:3000/Steve
    [X] view public tablature belonging to a user specified in the route (via card button)
      http://localhost:3000/RonaldMcDonald
      http://localhost:3000/Dave
      http://localhost:3000/Tim
      http://localhost:3000/Ryan
      http://localhost:3000/Steve

*/

// Services
import * as tablatureServices from './services/dummyAPI'

// Components and hooks
// react-router-dom is an npm package -- AKA React Router 6
// https://reactrouter.com/
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import TrendingContent from './components/TrendingContent'
import ProfileContent from './components/ProfileContent'

function App() {
  const [loggedInProfile, setLoggedInProfile] = useState({
    name: "Steve",
    tablature: tablatureServices.getCurrentProfilesTablature("Steve")
  })

  // The useNavigate hook comes from react-router-dom and allows us to navigate programatically.
  let navigate = useNavigate()
  const navToTrending = () => navigate("/trending")
  const navToCollection = () => navigate(`/${loggedInProfile.name}`) // nav to the user currenty logged in


  return (
    <>
      <h1>This is the header area</h1>
      <button onClick={navToTrending}>Trending</button>
      <button onClick={navToCollection}>Collection</button>

      {/* Whenever the url changes, <Routes> looks through all of its children to find a path that matches the url. <Routes> can only have <Route> as children  */}
      <Routes>

        {/* Think about a <Route> kind of like an if statement; if its path matches the current URL, it renders its element */}
        <Route 
          path='/trending' 
          element={
            <TrendingContent 
              loggedInProfile={loggedInProfile} 
            />
          } 
        />
        <Route 
          path='/:profileName' 
          element={<ProfileContent loggedInProfile={loggedInProfile} />} 
        />
        {/* path="*" handles cases where no route matches the current url. This is typically used to display a 404 page, but in this example the user is redirected to /trending. */}
        <Route 
          path="*"
          element={<Navigate to="/trending" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
