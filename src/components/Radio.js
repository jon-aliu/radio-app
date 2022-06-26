import { useParams } from "react-router-dom"
import AudioPlayer from "react-h5-audio-player";
import { useGlobalContext } from "../context";
import { useFetch } from "./useFetch";
const radioByUuid = "https://nl1.api.radio-browser.info/json/stations/byuuid/"

function Radio() {
    
    const {stationuuid} = useParams()

    const {data} = useFetch(radioByUuid+stationuuid)
  return(
      <>
      <div className="radio-container">
      <h1>{data.map((radio,index)=>{
          return(
              <div className="station" key={index}>
                <div className="station-upper">
                  
                
              <img
                className="img"
                src={radio.favicon}
                alt="station logo"
              />
              <div className="station-name">
                <h3>{radio.name}</h3>
                <p>Website:<a href={radio.homepage}>{radio.homepage}</a></p>
              </div>
              <div className="station-info">
             
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
      </div>
      
      
      </>
  );
}

export default Radio;
