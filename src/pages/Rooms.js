import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'

export const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title ="Rooms">
                    <Link to ="/" className="btn-primary">
                        return Home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Rooms