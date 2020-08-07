import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import Services from '../Components/Services'
import Title from '../Components/Title'
import { FeaturedRooms} from '../Components/FeaturedRooms'

export const Home = () => {
    return (
        <>
            <Hero >
                <Banner title ="luxuries rooms" subtitle = "deluxe rooms from $299">
                    <Link to ="/rooms" className="btn-primary" >
                        our rooms
                    </Link>
                </Banner>                
            </Hero> 
            <Services/> 
            <FeaturedRooms />
        </>
    )
}
 export default Home 