import React from 'react'
import {SubHeading, BlackButton, SubSubHeading, WhiteButton, CountryCard} from '../'
import './ExploreCountries.css'

const cardContent = 'Explore the Charming And Historic Cities of Amsterdam, Utrecht,Rotterdam, And The Hague. Wander Through Cobblestone Streets Lined With Historic Buildings, Visit Iconic Landmarks...';

const ExploreCountries = () => {
  return (
    <section className="section" style={{paddingBottom:"130px"}}>
        <div className='section-wrapper'>
            <SubHeading subHeading="EXPLORE CURATED CITIES FOR YOU" />

            <div className='section-top-div'>
                <div>
                    <h1>Choose Countries</h1>
                    <SubSubHeading label="Select the recommended countries you would like to visit" />
                </div>
                <div className='section-button-div'>
                    <WhiteButton label="Recommended selection" />
                    <WhiteButton label="2 Countries Selected" />
                    <BlackButton label="Next" />
                </div>
            </div>

            <div className='countries-wrapper'>
                <CountryCard country="Italy" content={cardContent}/>
                <CountryCard country="Italy" content={cardContent}/>
                <CountryCard country="Italy" content={cardContent}/>
                <CountryCard country="Italy" content={cardContent}/>
                <CountryCard country="Italy" content={cardContent}/>
                <CountryCard country="Italy" content={cardContent}/>
            </div>
        </div>
    </section>
  )
}

export default ExploreCountries