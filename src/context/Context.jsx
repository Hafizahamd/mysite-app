import { createContext, useState } from "react";
import run from "../Config/gemini";
export  const Context = createContext();


const ContextProvider = (props)=> {



    const [input, setinput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setresultData] = useState('');

    const DelayPara = (index, nextword)=> {

      setTimeout(function()  {
        setresultData(prev=>prev+nextword);
      },5*index);



    }

    const newChat = () =>{

      setloading(false);
      setshowresult(false)
    }


  const onSent  = async (prompt) => {
       

     setresultData('');
     setloading(true);
     setshowresult(true)
     
     
         setPrevPrompt(prev=>[...prev,input]);
         setrecentPrompt(input)
         const   response = await run(input);

     
     
     
    
    let responsarray = response.split('**');
    let newResponse  = "";
      
    for (let i = 0; i < responsarray.length; i++) {
      if (i === 0 || i%2 !==1) {
        newResponse += responsarray[i];
        
      } else {
        newResponse += "<br>"+responsarray[i]+"<br>"
        
      }
      
      
    }
    
let newResponse2 = newResponse.split(' * ').join('</br>');
       let newresponsearray = newResponse2.split('')
       for (let i=0; i< newresponsearray.length; i++) {
        
        const nextword = newresponsearray[i];
        DelayPara(i, nextword);
        
       }
       setloading(false);
       setinput('');

  } 

  

    
    const ContextValue = {

        prevPrompt,
        setPrevPrompt,
        onSent,
        setrecentPrompt,
        recentPrompt,
        showresult,
        loading,
        resultData,
        input,
        setinput,
        newChat
     



    }

    return(

    <Context.Provider value={ContextValue} >
         {props.children}

    </Context.Provider>

    )

}

export default ContextProvider;