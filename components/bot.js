import React, { useEffect,useState } from 'react';


export default function Bot(){


  const [loaded,setLoaded] = useState(false);
  
  useEffect(() => {
    debugger;
    const script = document.createElement("script")
    console.log('useEffect done!!');
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true

    script.addEventListener('load',() =>setLoaded(true));
    document.body.appendChild(script);      
  }, []);
  

  useEffect(()=>{
    if(!loaded) return;
    initBotpress();
  },[loaded]);
  const initBotpress=()=>{
        
    window.botpressWebChat.init({
        composerPlaceholder: "Chat with Booming Bulls Academy",
        botConversationDescription: "The purpose of this bot is to resolve your queries",
        botId: "087eb4ae-5f39-4027-9d1c-658275895f47",
        hostUrl: "https://cdn.botpress.cloud/webchat/v0",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "087eb4ae-5f39-4027-9d1c-658275895f47",
        webhookId: "b6312797-8886-4124-baba-4c8986fd5626",
        lazySocket: true,
        themeName: "prism",
        botName: "Booming Bulls Academy",
        frontendVersion: "v0",
        useSessionStorage: true,
        showBotInfoPage: true,
        showPoweredBy: true,
        theme: "prism",
        themeColor: "#2563eb"
    });
}  
  return(
      
          <>
          {loaded ? console.log('Script is loaded'):console.log('Script not loaded')}
          {/* <img src='/demo/images/blocks/logos/BB3jpg'></img> */}
          </>
      // <Script src="https://cdn.botpress.cloud/webchat/v0/inject.js"
      // onLoad={() =>{
      //     initBotpress();
      // }}
      // ></Script>
         
          
      
  )

}


  

  


