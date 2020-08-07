import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail ,FaHiking ,FaShuttleVan,FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state ={
        services : [{
            icon : <FaCocktail />,
            title : 'Free Cocktail',
            info : 'njrgj i would gtifd siudb ihduilaish vcvdsdsf ytriihij\
                    kfneib iooiooisv and i would say god helped us from these disasters '
        },
        {
            icon : <FaHiking />,
            title : 'Endless Hiking',
            info : 'njrgj i would gtifd siudb ihduilaish vcvdsdsf ytriihij\
                    kfneib iooiooisv and i would say god helped us from these disasters '
        },
        {
            icon : <FaShuttleVan />,
            title : 'Free Shuttle',
            info : 'njrgj i would gtifd siudb ihduilaish vcvdsdsf ytriihij\
                    kfneib iooiooisv and i would say god helped us from these disasters '
        },
        {
            icon : <FaBeer />,
            title : 'Free and Endless Beer',
            info : 'njrgj i would gtifd siudb ihduilaish vcvdsdsf ytriihij\
                    kfneib iooiooisv and i would say god helped us from these disasters '
        },]
    }

    render() {
        return (
            <section className='services'>
                <Title title ='Services' />
                <div className ="services-center">
                    {this.state.services.map(( item ,index)=>{
                        return <article key={index} className ="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
                
            </section>
        )
    }
}
