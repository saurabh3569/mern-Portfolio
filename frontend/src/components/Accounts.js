import React from 'react'
import './style.css'

const Accounts = () => {
  return (
    <div className='accountsMain'>
      <a className='text-center' href='https://github.com/saurabh3569' target="_blank">
        <img className='accountsImg' src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-2.png&r=0&g=0&b=0" alt="github" />
      </a>
      <a className='text-center' href='https://www.linkedin.com/in/saurabh35/' target="_blank">
        <img className='accountsImg' src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-2.png&r=0&g=0&b=214" alt="linkedin" />
      </a>
      <a className='text-center' href='https://auth.geeksforgeeks.org/user/saurabh3569/practice' target="_blank">
        <img className='accountsImg' src="https://i.ibb.co/YWFqsRG/download.jpg" alt="gfg" />
      </a>
      <a href="mailto:smishra9109@gmail.com" target="_blank">
        <img className='accountsImg' src="https://cdn.iconscout.com/icon/free/png-512/gmail-2981844-2476484.png?f=avif&w=256" alt="gmail" />
      </a>
      <a href="https://wa.me/919109650887" target="_blank">
        <img className='accountsImg' src="https://img.icons8.com/color/1x/whatsapp--v4.png" alt="whatsapp" />
      </a>
    </div>
  )
}

export default Accounts
