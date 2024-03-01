import React, { useEffect, useState } from 'react';

function CardStatus({tabledata}) {
    const [dwnldStatus, setDwnldStatus] = useState({
        Failed: 0,
        Cancelled: 0,
        Downloading: 0,
        Succeeded: 0
    });

    useEffect(() =>{
        const resultstatus = tabledata.reduce((acc,appliance)=>{
            acc[appliance.downloadStatus]++;
            return acc;
        },{ Failed: 0, Cancelled: 0, Downloading: 0, Succeeded: 0 });
        setDwnldStatus(resultstatus);
    }, [tabledata]); 

  return (
    <div className='cardstatus'>
      <div className="cardstatus__div">
        <span className="status_symbol" style={{backgroundColor:"#CF1322"}}></span>
        <span>{dwnldStatus.Failed} Failed</span>
      </div>
      <div>
        <span className="status_symbol" style={{backgroundColor:"#F0A203"}}></span>
        <span>{dwnldStatus.Cancelled} Cancelled</span>
      </div>
      <div>
        <span className="status_symbol" style={{backgroundColor:"#B2B2B2"}}></span>
        <span>{dwnldStatus.Downloading} Downloading</span>
      </div>
      <div>
        <span className="status_symbol" style={{backgroundColor:"#0D7C2D"}}></span>
        <span>{dwnldStatus.Succeeded} Downloaded</span>
      </div>
    </div>
  );
}

export default CardStatus;
