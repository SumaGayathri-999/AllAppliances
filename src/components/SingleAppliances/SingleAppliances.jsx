import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleAppliance } from '../../actions';
import './_singleappliances.scss';

function SingleAppliances() {
    const [single_appliance, setSingleAppliance] = useState([]);
    const {serialNo} = useParams();
    
    //useEffect
    useEffect(()=>{
      fetchSingleAppliancesInfo();
     },[])
  
     async function fetchSingleAppliancesInfo(){
      const result = await getSingleAppliance(serialNo);
      setSingleAppliance(result[0])
    }

  function addOrdinalSuffix(dateString) {

    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1: return `${day}st ${month}`;
      case 2: return `${day}nd ${month}`;
      case 3: return `${day}rd ${month}`;
      default: return `${day}th ${month}`;
    }
  }
  return (
    <div className="single_appliance">
      {single_appliance && 
      <>
      <div className="bread_crumbs">
        <span>Device</span>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 6.02246C6.5 6.27441 6.40039 6.49121 6.20703 6.68457L1.70703 11.0732C1.55469 11.2256 1.36719 11.3076 1.14453 11.3076C0.687501 11.3076 0.32422 10.9443 0.32422 10.4932C0.32422 10.2705 0.41211 10.0596 0.576173 9.89551L4.56055 6.02832L0.576172 2.15527C0.417969 1.99121 0.324219 1.78613 0.324219 1.55762C0.324219 1.10645 0.6875 0.743164 1.14453 0.743164C1.36719 0.743164 1.55469 0.825195 1.71289 0.977539L6.20703 5.36621C6.40625 5.57129 6.5 5.77637 6.5 6.02246Z" fill="#69788C" />
        </svg>
        <span>{single_appliance.serialNo}</span>
      </div>

      <div className="single_appliance__headInfo">
        <div className="id_info">
          <h1>{single_appliance.serialNo}</h1>
          <div style={{ display: "flex" }}>
            <button>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.66658 0.833336L11.1933 2.36L7.93992 5.61334L5.27325 2.94667L0.333252 7.89334L1.27325 8.83334L5.27325 4.83334L7.93992 7.5L12.1399 3.30667L13.6666 4.83334V0.833336H9.66658Z" fill="#2D3540" />
              </svg>
              Speed Test</button>
            <button >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.7141 13.6667H9.27309C10.596 13.6667 11.2789 12.9714 11.2789 11.6362V2.35764C11.2789 1.02861 10.596 0.333336 9.27309 0.333336H2.7141C1.39738 0.333336 0.708252 1.02861 0.708252 2.35764V11.6362C0.708252 12.9714 1.39738 13.6667 2.7141 13.6667ZM2.8187 12.4361C2.22802 12.4361 1.93268 12.1284 1.93268 11.5562V2.43763C1.93268 1.87771 2.22802 1.55776 2.82485 1.55776H9.16233C9.75917 1.55776 10.0545 1.87156 10.0545 2.43763V11.5562C10.0545 12.1284 9.75917 12.4361 9.16849 12.4361H2.8187ZM3.75394 4.0866H8.2394C8.46706 4.0866 8.63319 3.90817 8.63319 3.68667C8.63319 3.47131 8.46706 3.30519 8.2394 3.30519H3.75394C3.52628 3.30519 3.354 3.47131 3.354 3.68667C3.354 3.90817 3.52628 4.0866 3.75394 4.0866ZM3.75394 6.18474H8.2394C8.46706 6.18474 8.63319 6.00631 8.63319 5.7848C8.63319 5.56945 8.46706 5.40333 8.2394 5.40333H3.75394C3.52628 5.40333 3.354 5.56945 3.354 5.7848C3.354 6.00631 3.52628 6.18474 3.75394 6.18474ZM3.75394 8.28288H5.93206C6.15357 8.28288 6.3197 8.1106 6.3197 7.89525C6.3197 7.67374 6.15357 7.50146 5.93206 7.50146H3.75394C3.52628 7.50146 3.354 7.67374 3.354 7.89525C3.354 8.1106 3.52628 8.28288 3.75394 8.28288Z" fill="#2D3540" />
              </svg>
              Logs
            </button>
          </div>
        </div>

        <h3>{single_appliance.theatreName}</h3>
        <p>{single_appliance?.location?.city}, {single_appliance?.location?.state}, {single_appliance?.location?.country}</p>
        <div className="status_details_conatiner">
          <div className="status_details_conatiner__div">
            <div className={`${single_appliance.deviceStatus} status_symbol`}></div>
            <div>{single_appliance.deviceStatus}</div>
          </div>
          <div className="status_details_conatiner__div">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.3836 6.32012L12.5584 3.34928C11.4371 1.60286 9.44579 0.442882 7.3836 0.333328V6.32012ZM6.99694 13.6538C8.54358 13.6538 10.0258 13.106 11.2115 12.1265L6.52006 7.54454C6.38473 7.41566 6.33962 7.3061 6.33962 7.09988V0.359106C2.99501 0.687767 0.333496 3.5555 0.333496 6.99033C0.333496 10.6378 3.34945 13.6538 6.99694 13.6538ZM13.6668 6.98388C13.6668 6.04301 13.4477 5.07636 13.0611 4.26437L7.81537 7.28032L11.9849 11.3789C13.0288 10.2125 13.6668 8.64008 13.6668 6.98388Z" fill="#2D3540" />
            </svg>
            <div>{single_appliance.storage}</div>
          </div>
        </div>
        <div className="horizontal_line"></div>

        <div className="subheadings">
          <div>Details</div>
          <div>Content</div>
          <div>Bandwidth</div>
        </div>
      </div>

      <div className="single_appliance__detailsCont">
        <div>
          <h5>Device Serial</h5>
          <p>{single_appliance.serialNo}</p>
        </div>
        <div>
          <h5>Location</h5>
          <p>{single_appliance.theatreName}</p>
        </div>
        <div>
          <h5>City</h5>
          <p>{single_appliance?.location?.city}, {single_appliance?.location?.state}, {single_appliance?.location?.country}</p>
        </div>
        <div>
          <h5>ISP Payment Responsibility</h5>
          <p>{single_appliance.ispPaymentResponsibility}</p>
        </div>
        <div>
          <h5>Bandwidth</h5>
          <p>{single_appliance.bandwidth}</p>
        </div>
        <div>
          <h5>Average Bandwidth</h5>
          <p>{single_appliance.avgBandwidth}</p>
        </div>
        <div>
          <h5>Plan Start Date</h5>
          <p>{addOrdinalSuffix(single_appliance.planStartDate)}</p>
        </div>
        <div>
          <h5>Billing Cycle</h5>
          <p>{single_appliance.billingCycle}</p>
        </div>
        <div>
          <h5>Download Status</h5>
          <p>{single_appliance.downloadStatus}</p>
        </div>
        <div>
          <h5>OS Version</h5>
          <p>{single_appliance.osVersion}</p>
        </div>
        <div>
          <h5>Storage Available</h5>
          <p>{single_appliance.storage}</p>
        </div>
      </div>
      </>}

    </div>
  )
}

export default SingleAppliances;