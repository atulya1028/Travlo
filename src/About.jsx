import React from 'react';
import './App.css';
import bg1 from './assets/images/bg1.png'
import bg2 from './assets/images/bg2.png'
import bg3 from './assets/images/bg3.png'

const About = () => {
  return (
    <div className='about'>
    <h3>Welcome to Travlo – Your Gateway to Unforgettable Journeys</h3>
  <p>
    Founded in December 2024, Travlo is a dynamic travel agency dedicated to crafting
    personalized travel experiences for explorers of all kinds. Whether you're seeking a
    tranquil escape, an adventure-filled expedition, or a cultural immersion, we are here to
    make your travel dreams a reality.
  </p>
  <br /> <br /> <br /> <br />
  <div className='bg'>
  <img src={bg1} alt=""/>
  </div>
  <br /> <br /> <br /> <br />
  <h3>Our Mission</h3>
  <p>
    At Travlo, our mission is to inspire and enable meaningful travel experiences. We aim to
    connect people with the beauty of the world, its diverse cultures, and breathtaking
    landscapes, while providing exceptional service and unwavering support throughout your
    journey.
  </p>
  <div className='bg2'>
    <img src={bg2} alt="" width={500} height={300} className='bg-img'/>
    <img src={bg3} alt="" width={500} height={300} className='bg-img'/>
  </div>
  <br /> <br /> <br /> <br />
  <h3>Why Choose Travlo?</h3>
  <ul>
    <li>
      <strong>Tailored Itineraries:</strong> We understand that every traveler is unique, which
      is why we create customized travel plans that cater to your preferences, budget, and
      interests.
    </li>
    <li>
      <strong>Expert Guidance:</strong> Our team of experienced travel consultants are passionate
      globetrotters who bring their expertise to help you plan the perfect trip.
    </li>
    <li>
      <strong>Seamless Experience:</strong> From booking flights and accommodations to organizing
      local tours and activities, we handle every detail to ensure your trip is hassle-free.
    </li>
    <li>
      <strong>Commitment to Sustainability:</strong> Travlo is dedicated to promoting eco-friendly
      travel by partnering with sustainable tourism providers and encouraging responsible travel
      practices.
    </li>
  </ul>
  <br /> <br /> <br /> <br />
  <h3>Our Services</h3>
  <ul>
    <li><strong>Vacation Packages:</strong> Discover exclusive packages for solo travelers, couples, families, and groups.</li>
    <li><strong>Flight and Hotel Bookings:</strong> Enjoy competitive rates and a wide range of options.</li>
    <li><strong>Adventure Tours:</strong> Experience thrilling adventures, from trekking and safaris to water sports and more.</li>
    <li><strong>Cultural Experiences:</strong> Dive into local traditions, cuisines, and art scenes with our curated tours.</li>
    <li><strong>Travel Assistance:</strong> Our 24/7 support ensures peace of mind wherever your travels take you.</li>
  </ul>
  <br /> <br /> <br /> <br />
  <h3>Join Us on a Journey to Explore the World</h3>
  <p>
    At Travlo, we believe that travel has the power to transform lives. Let us help you explore
    the world, create lasting memories, and embark on adventures that resonate with your soul.
  </p>

  <p>Start planning your next adventure with Travlo today!</p>
  <hr className='hr'/>
    </div>
  )
}

export default About