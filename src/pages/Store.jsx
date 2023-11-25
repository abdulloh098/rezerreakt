import React from 'react'
import Footer from '../copmonents/Footer'
import Oka from '../copmonents/Oka'
import Gear from '../copmonents/Gear'
import Keyboards from '../copmonents/Keyboards'
import Chairs from '../copmonents/Chairs'
import Headsets from '../copmonents/Headsets'
import Mice from '../copmonents/Mice'
import Laptop from '../copmonents/Laptop'
import Hey from '../copmonents/Hey'
import Nav from '../copmonents/Nav'
import Mobilel from '../copmonents/Mobilel'
import Consolel from '../copmonents/Consolel'

const Store = () => {
  return (
    <div>
          <Nav />
      <div className="container">
        <Hey />
      </div>
      <br />
      <br />
      <div className="kotta">
        <h1 className="fury">THE LATEST AND GREATEST GAMING GEAR</h1>
        <p className="toxa">Razer mice, keyboards, headsets, laptops & more</p>
        <br />
        <br />
        <br />
        <h1 className="fury">FRESH OFF THE LINE</h1>
        <p className="toxa">
          Check out our latest releases to secure the most up-to-date upgrades
          for your setup
        </p>
      </div>
      <br />
      <br />
      <div className="container">
        <Laptop />
      </div>
      <br />
      <br />
      <div className="katta">
        <h1 className="fury">BEST SELLERS</h1>
        <br />
        <p className="toxa">
          Join the hype train with the hottest products in our arsenal
        </p>
      </div>
      <br />
      <br />
      <div className="container">
        <Mice />
      </div>
      <br />
      <br />

      <div className="kichik">
        <br />
        <br />
        <img
          className="ilya"
          src="https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/1920x400-(6).webp"
          alt=""
        />
        <br />
        <br />
        <h1 className="fury">RAZER EXCLUSIVES</h1>
        <br />
        <p className="toxa">
          Explore unique products and services only available at our official
          online store
        </p>
      </div>
      <br />
      <br />
      <div className="container">
        <Headsets />
      </div>
      <br />
      <br />
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/186921c07aa55486994e5d5de6ecc511/razer-skins-store-desktop.jpg"
          alt=""
        />
        <br />
        <br />
      </div>
      <br />
      <br />

      <br />
      <br />

      <div className="container">
        <Chairs />
      </div>
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/viper-mini-signature-store-desktop.jpg"
          alt=""
        />
        <br />
        <br />
      </div>

      <br />
      <br />

      <div className="container">
        <Consolel/>
      </div>
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/razer-esports-line-huntsmanv3pro-store_desktop_1920x400.webp"
          alt=""
        />
        <br />
        <br />
      </div>

      <div className="container">
        <Keyboards />
      </div>
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/186921c07aa55486994e5d5de6ecc511/razer-skins-store-desktop.jpg"
          alt=""
        />
        <br />
        <br />
      </div>
      <div className="container">
        <Mobilel />
      </div>
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/1920x400-(4).webp"
          alt=""
        />
        <br />
        <br />
      </div>
      <div className="container">
        <Gear />
      </div>
      <br />
      <br />
      <Oka />
      <br />
      <br />
      <br />
      <br />
     
        <Footer />
    </div>
  )
}

export default Store