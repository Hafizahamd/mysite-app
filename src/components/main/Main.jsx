import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

   const{onSent, recentPrompt, showresult, loading,
   resultData,setinput,input} = useContext(Context);

  return (
    <div className='main'>
     <div className="nav">
     <p>Gemini</p>
     <img src={assets.user_icon}  alt=''/>
     </div>
     <div className="main-container">


        {!showresult
        ?<>

        
      <div className="greet">
         <p><span>Hello,Dev</span></p>
         <p>How Can I help You</p>
      </div>
      <div className="Cards">
        <div className="card">
          <p>Google Gemini is the name of Google's next-generation AI model series, which represents the company's advancements in artificial </p>
          <img src={assets.compass_icon} alt=''/>
        </div>
        <div className="card">
          <p> Introduced in December 2023, Gemini aims to build on the capabilities of its predecessor, Bard, and offer improved  to enhance various applications,</p>
          <img src={assets.message_icon} alt=''/>
        </div>
        <div className="card">
          <p>Google Gemini is the name of Google's next-generation AI model series, which represents the company's advancements </p>
          <img src={assets.bulb_icon} alt=''/>
        </div>
        <div className="card">
          <p> AI technology. advancements in artificial intelligence and natural language processing</p>
          <img src={assets.code_icon} alt=''/>
        </div>
      </div>
        </>
        :<div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt='' />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt='' />
            {loading
            ?<div className="load">
              <hr />
              <hr />
              <hr />

            </div>  
          :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
          
          }
            
          </div>


        </div>
        }


      <div className="main-bottom">
        <div className="search-box">
         <input  onChange={(e)=> setinput(e.target.value)} value={input} type='text'placeholder='Enter a Prompt here' ></input>
           <div>
         <img src={assets.gallery_icon} alt="" />
          <img src={assets.mic_icon} alt="" />
         {input?<img onClick={()=> onSent(input)}  src={assets.send_icon} alt="" />:null}
         </div>
        </div>
        <p className="bottom-item">
        Google Gemini is part of Google's suite of AI tools, designed to compete with other AI systems like OpenAI's ChatGPT. ,
        </p>
      </div>
      
     </div>

    </div>
  )
}

export default Main