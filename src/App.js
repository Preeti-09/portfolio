import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'

import IMAGES from './images'
import Main from './components/Main/Main'
import MainCard from './components/MainCard/MainCard'

function App() {
  //eslint-disable-next-line
  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = process.env.PUBLIC_URL + image.image
        // console.log(loadImg.src)
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 5000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <>
      {imgsLoaded ?
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path="/:id" render={(props) => <MainCard {...props} />} />
          </Switch>
        </Router>
        : <h1 style={{ color: "#fff", textShadow: "2px 3px 4px #000" }}> <CircularProgress /> Loading.... </h1>
      }
    </>
  );
}

export default App;
