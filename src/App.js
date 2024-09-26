import React, { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { CrptoData } from './data/CrptoData';



function App() {

  const [activeTab, setActiveTab] = useState(0);
  const [activeContent, setActiveContant] = useState(CrptoData[0]);

  let HandleNextTab =(index)=>{
    // alert(index)
    setActiveContant(CrptoData[index]);
    setActiveTab(index)
  }

   

  return (
    <div>
      

    <div className='container mt-5 border p-4 mb-5' >
      <h5>Tabing System</h5>

      <ul>
      {CrptoData.map((itmeData, index)=>{
        return (
          <div key={index}>
            {/* className={} */}
            <li><button className={activeTab===index ? "active" : ""} onClick={()=> HandleNextTab(index)}>{itmeData.title}</button></li>
              </div>
             )
       })}
       </ul>
      {activeContent!==undefined ?
       <p>{activeContent.description}</p>
      :
       ""}
          
      </div>
    
    </div>
  );
}

export default App;
