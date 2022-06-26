import { useParams,Link} from "react-router-dom"
import AudioPlayer from "react-h5-audio-player";
import { useGlobalContext } from "../helpers/context";
import nomusic from '../images/no-music.png'
import { useFetch } from "../helpers/useFetch";
import {AiOutlineStar} from 'react-icons/ai'

import { UserAuth } from '../../context/AuthContext';

const radioByUuid = "https://nl1.api.radio-browser.info/json/stations/byuuid/"

function Radio() {
  const { addFav} = UserAuth()
    const {stationuuid} = useParams()

    const {data} = useFetch(radioByUuid+stationuuid)

    const handleAddFav = async () => {
      try {
        await addFav(data)
        alert("just add it in your fav")
      } catch (e) {
        console.log(e.message);
      }
    };
  return(
      <>
      <div className="radio-container">
        <h1>You are currently listening to: </h1>
      <h1>{data.map((radio,index)=>{
       
          console.log(radio.url_resolved)
          return(
              <div className="station" key={index}>
                <div className="station-upper">
                  
                
              <img
                className="img"
                src={radio.favicon}
                onError={({currentTarget})=>{currentTarget.onerror=null;currentTarget.src=nomusic}}
                alt="station logo"
              />
              <div className="station-name">
                <h3>{radio.name}</h3>
                <p><a href={radio.homepage}>Go to this radio's website</a></p>
              </div>

              </div>
              
              <AudioPlayer
                className="player"
                
                src={radio.url_resolved}
                showJumpControls={false}
                layout="stacked"
                customProgressBarSection={[]}
                customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                autoPlayAfterSrcChange={false}
                footer
              />
            </div>
          )
          
      })}</h1>
                    <div className="station-info">
              <p className="favorite" onClick={handleAddFav} >Add This radio to your favorites: <Link className="favorite-btn" to={`/`}><AiOutlineStar/></Link></p>
              </div>
      </div>
     
      
      
      </>
  );
}

export default Radio;
