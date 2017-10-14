import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <p className='contact-description'>
        Happy to talk!
      </p>
      <ul className='contact-card'>
        <li className='contact-card__item--github'><a href="https://github.com/one-for-all/" target="_blank">github.com/one-for-all/</a></li>
        <li className='contact-card__item--twitter'><a href="https://twitter.com/test/" target="_blank">twitter.com/test/</a></li>
        <li className='contact-card__item--linkedin'><a href="https://www.linkedin.com/in/test/" target="_blank">linkedin.com/in/test/</a></li>
      </ul>
    </div>
  )
}

export default Contact
