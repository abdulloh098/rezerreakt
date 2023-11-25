import React from 'react';
import Nav from '../copmonents/Nav';
import Footer from '../copmonents/Footer';

const Home = () => {
  return (
    <>
      <Nav />
      <div className="link">
        <h1>
          Join RazerStore Rewards to unlock bonus Razer Silver, reduced minimum
          spend for free shipping, exclusive perks and more.{' '}
          <a
            href="https://www.razer.com/store/rewards?utm_sour=razer-onsite-promobar&utm_
            medium=banner&utm_campaign=2023_RS_TXN_ALL_WW-_-RazerStore-Rewards-_-BR&utm_content=promobar"
          >
            {' '}
            Join Now {'>'}{' '}
          </a>
        </h1>
      </div>
      <div className="home1">
        <h1>WAKE YOUR HALLOWEEN</h1>
        <h2>EXCLUSIVE OFFERS WILL MANIFEST</h2>
        <a href="">Shop Naw{'>'}</a>
      </div>
      <div className='lanbo'>
        <button>EXCLUSIVE</button>
        <h1>NAW RAZER BLADE 16</h1>
        <h2>AUTOMOBILI LAMBARGHINI EDIDTION</h2>
        <br />
        <span>
          {' '}
          <a href=""> Learn More {'>'}</a> <a href="">Buy{'>'}</a>
        </span>
      </div>
      <div className='mice'>

        <h1>THE RAZER  ESPORTS LINE</h1>
        <h2>TRUSTED BY PROS. MADE FOR WINNERS.</h2>
        <br />
        <span>
          {' '}
          <a href=""> Learn More {'>'}</a>
        </span>
      </div>
      <div className='cart55'>
        <div className='not'>
          <h1>RAZER BLADE <br />16 & 18 MERCURY</h1>
          <h3>GET A REZER GIFT CARD OF UP <br /> TO US$400</h3>
          <br />
          <a href=""> Learn More {'>'}</a>

        </div>
        <div className='not2'>
          <h1>MORE THAN AWARENESS</h1>
          <h3>JOIN OUR CAUSE TODAY</h3> <br />
          <a href=""> Learn More {'>'}</a>

        </div>
        <div className='not3'>
          <h1>RAZER FUJIN</h1>
          <h3>BREATHABLE. FLEXIBLE COMFORTABLE.</h3> <br />
          <a href=""> Learn More {'>'}</a>

        </div><div className='not4'>
          <h1>RAZER KIT</h1>
          <h3>OPTICAL +PRECISION THE ULTRA  COMBO!</h3> <br />
          <a href=""> Learn More {'>'}</a>

        </div>
        <div className='not5'>
          <h1>NAW RAZER BLADE 14</h1>
          <h3>GET A REAZER GIFT CARD OF UP TO US$300</h3> <br />
          <a href=""> Learn More {'>'}</a>

        </div>
        <div className='not6'>
          <button>EXCLUSIVE</button>
          <h1>RAZER BALCKIWIDOW V4 PRO</h1>
          <h3>NEW ORANGE SWITICHES GEN-3</h3> <br />
          <a href=""> Learn More {'>'}</a> <a href="">Buy
          </a>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
