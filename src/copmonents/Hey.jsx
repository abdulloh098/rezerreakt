import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Hey = () => {
  return (
    <>

<div className="items"> 
        <HashLink smooth to={`/store/#laptop`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blade-16_200x150.png" 
            alt="" 
          /> 
          <br /> 
          <p>Laptops</p> 
        </HashLink> 
 
        <HashLink smooth to={`/store/#mice`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-basilisk-v3-pro_90x150.png" 
            alt="" 
          /> 
          <br /> 
          <p>Mice</p> 
        </HashLink> 
 
        <HashLink smooth to={`/store/#keyboards`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blackwidow-v4-pro_168x150.png" 
            alt="" 
          /> 
          <br /> 
          <p>Keyboards</p> 
        </HashLink> 
 
        <HashLink smooth to={`/store/#headsets`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_audio_icon_168x150.png" 
            alt="" 
          /> 
          <br /> 
          <p>Audio</p> 
        </HashLink> 
 
        <HashLink smooth to={`/store/#streaming`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-kiyo-pro-ultra_118x150.png" 
            alt="" 
          /> 
          <br /> 
          <p>Content Creation</p> 
        </HashLink> 
 
        <HashLink smooth to={`/store/#chairs`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-enki-pro_lamborghini_80x150.png" 
            alt="" 
          /> 
          <br /> 
          <p>Chairs</p> 
        </HashLink> 
 
        <HashLink smooth to={`/store/#consol`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-wolverine-v2-pro-white_144x150.png" 
            alt="" 
          /> 
          <br /> 
          <p>Console</p> 
        </HashLink> 
 
        <HashLink smooth to={`/store/#mobilel`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-edge_186x150.png" 
            alt="" 
          /> 
          <br /> 
          <p>Mobile</p> 
        </HashLink> 
 
        <HashLink smooth to={`/store/#gear`} className="item"> 
          <img 
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/xanthus-tote-bag_2x.webp" 
            alt="" 
          /> 
          <br /> 
          <p>Apparel & Gear</p> 
        </HashLink> 
      </div> 

      {/* <div className="items">
        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blade-16_200x150.png"
            alt=""
          />
          <br />
          <p>Laptops</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_gamer-room_icon_188x150.webp"
            alt=""
          />
          <br />
          <p>Gamer Room</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-basilisk-v3-pro_90x150.png"
            alt=""
          />
          <br />
          <p>Mice</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blackwidow-v4-pro_168x150.png"
            alt=""
          />
          <br />
          <p>Keyboards</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_audio_icon_168x150.png"
            alt=""
          />
          <br />
          <p>Audio</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-kiyo-pro-ultra_118x150.png"
            alt=""
          />
          <br />
          <p>Content Creation</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/razer-enki-pro_lamborghini_80x150.png"
            alt=""
          />
          <br />
          <p>Chairs</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-wolverine-v2-pro-white_144x150.png"
            alt=""
          />
          <br />
          <p>Console</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-edge_186x150.png"
            alt=""
          />
          <br />
          <p>Mobile</p>
        </div>

        <div className="item">
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/xanthus-tote-bag_2x.webp"
            alt=""
          />
          <br />
          <p>Apparel & Gear</p>
        </div>
      </div> */}
    </>
  );
};

export default Hey;
