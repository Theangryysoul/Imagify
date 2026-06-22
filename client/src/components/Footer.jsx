import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <Link to={'/'}>
        <img src={assets.logo} alt="" width={150}/>
        </Link>
        

        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Theangryysoul.dev | All right reserved.</p>

        <div className="flex gap-2.5">
            <a href="https://www.facebook.com/theangryysoul" target="_blank" rel="noopener noreferrer">
                <img src={assets.facebook_icon} alt="Facebook" width={35} />
            </a>

            <a href="https://www.x.com/theangryysoul" target="_blank" rel="noopener noreferrer">
                <img src={assets.twitter_icon} alt="Twitter" width={35} />
            </a>

            <a href="https://www.instagram.com/theangryysoul" target="_blank" rel="noopener noreferrer">
                <img src={assets.instagram_icon} alt="Instagram" width={35} />
            </a>
        </div>

    </div>
  )
}

export default Footer