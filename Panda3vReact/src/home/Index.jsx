import React from 'react';
//import './App.css';

import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;
    
    return (

        <div className="p-4">
        <div className="container">
           <h1>Hi {user.firstName}!</h1>
        </div>
        <div className='ppsh'>
           <div class="container">
              <div class="row">
                 <div class="column" >
                    <h5 >
                       Music is our passion! Panda 3 is a service dedicated to it. 
                       Thanks to Panda 3 you can easily manage line-up on our music event. 
                       Simply go into 'Events' tab, and tell us you want to be in our lineup this year,
                       we will take care of the rest!
                    </h5>
                 </div>
                 <div class="column  margincolumn"
                 style={{  
                 backgroundImage: "url(" + "https://i.imgur.com/ndly6eF.png" + ")",
                 backgroundPosition: 'center',
                 backgroundSize: '450px',
                 backgroundRepeat: 'no-repeat'
                 }}>
              </div>
              <div class="column">
              </div>
           </div>
        </div>
     </div>
     </div>
        
    );
}

export { Home };