import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className="showcase">
        <a href="https://one-for-all.github.io/frontend-project9-dashboard/" target="_blank">
          <img src="./images/frontend-project9-dashboard.png" alt="dashboard project" className='showcase__img' />
          <h2 className='showcase__title'>Dashboard</h2>
          <p className='showcase__description'>A dashboard displaying social information</p>
          <p className='showcase__skills'>Sass, Chart.js, HTML, CSS, Javascript</p>
        </a>
      </div>
      <div className="showcase">
        <a href="https://one-for-all.github.io/frontend-project11-flickr_gallery/" target="_blank">
          <img src="./images/frontend-project11-flickr_gallery.png" alt="flickr gallery project" className='showcase__img' />
          <h2 className='showcase__title'>Flickr Gallery</h2>
          <p className='showcase__description'>A web app for searching flickr images</p>
          <p className='showcase__skills'>React, HTML, CSS, Javascript</p>
        </a>
      </div>
      <div className="showcase">
        <a href="https://one-for-all.github.io/frontend-project8-accessibility_refactor/" target="_blank">
          <img src="./images/frontend-project8-accessibility_refactor.png" alt="accessibility project" className='showcase__img' />
          <h2 className='showcase__title'>Accessbility Refactor</h2>
          <p className='showcase__description'>Display concert information with accessibility in mind</p>
          <p className='showcase__skills'>Accessbility, HTML, CSS, Javascript</p>
        </a>
      </div>
      <div className="showcase">
        <a href="https://one-for-all.github.io/frontend-project7-video_player/" target="_blank">
          <img src="./images/frontend-project7-video_player.png" alt="video player project" className='showcase__img' />
          <h2 className='showcase__title'>Video Player</h2>
          <p className='showcase__description'>A video player web app w/ transcript tracking</p>
          <p className='showcase__skills'>HTML, CSS, Javascript, Video media element</p>
        </a>
      </div>
    </div>
  )
}

export default Home
