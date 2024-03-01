import React, { useEffect, useState } from 'react';
import { getAllAppliances } from '../../actions';
import '../CardStatus';
import CardStatus from '../CardStatus';
import InfoTable from '../InfoTable';
import './_allappliances.scss';


function Allappliances() {
  const [tabledata, setTableData] = useState([]);
  //useEffect
   useEffect(()=>{
    fetchAppliancesInfo();
   },[])

   async function fetchAppliancesInfo(){
    const result = await getAllAppliances();
    setTableData(result)
  }
  return (
    <div className="all_app">
        <h1>Devices</h1>
        <CardStatus tabledata={tabledata}/>
        <InfoTable tabledata={tabledata}/>
    </div>
  )
}

export default Allappliances