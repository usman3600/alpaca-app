import React, {useState} from 'react';
import './App.css';
import {MakeButton, changeButtons} from './components/buttons.js.js';
import {ImageMaker, CustomizeImg} from './components/alpaca-image.js';
import {RandomButtons, DownloadButtons, CustomizeRandImg, DownloadImg} from './components/action-buttons.js';
import assets from './components/assets.js';
import backgroundImg from "./alpaca/backgrounds/darkblue70.png";
import accessoriesImg from "./alpaca/accessories/headphone.png";
import earImg from "./alpaca/ears/default.png";
import eyeImg from "./alpaca/eyes/default.png";
import hairImg from "./alpaca/hair/default.png";
import legImg from "./alpaca/leg/default.png";
import mouthImg from "./alpaca/mouth/default.png";
import neckImg from "./alpaca/neck/default.png";
import noseImg from "./alpaca/nose/nose.png";
function App() {
  const [selection, setSelection] = useState("backgrounds")
    let imgData;
    imgData ={
    backgrounds: useState(backgroundImg),
    accessories: useState(accessoriesImg),
    ears: useState(earImg),
    hair: useState(hairImg),
    leg: useState(legImg),
    neck: useState(neckImg),
    nose: useState(noseImg),
    mouth: useState(mouthImg),
    eyes: useState(eyeImg),
  };
  return (
   <div className='website-container'>
      <h1 className="myheader">ALPACA GENERATOR</h1>
    <div className='body-container'>
      <div>
        <div>
            <ImageMaker imgData={imgData}/>
        </div>
      </div>
      <div>
        <div>
          <h4 className="button-tittle">
            ACCESSORIZE ALPACA'S
          </h4>
          <div>
              <MakeButton  location = {assets}  func = {changeButtons(setSelection)}/>
          </div>
        </div>
        <div>
          <h4 className="button-tittle">
                STYLES
          </h4>
          <div>
              <MakeButton giveClass={true} func={CustomizeImg(imgData)} location = {assets[selection]}/>
          </div>
        </div>
      </div>
    </div>
    <div className="action-button-container">
      <RandomButtons code = {CustomizeRandImg(assets, imgData)}/>
      <DownloadButtons code = {DownloadImg}/>
    </div>
    </div>
  );
};
export default App;