import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import FIlterButton from './FIlterButton';
import Pagination from './Pagination';
import SearchInput from './SearchInput';


// Columns configuration
const columns = [
    { Header: 'Device Serial', accessor: 'serialNo',
    Cell : props => <div>{props.value}</div>
    },
    { Header: 'Location', accessor: 'location', 
    Cell: ({ row }) => {
        const { city, state, country } = row.original.location;
        return (
          <div>
            <div>{row.original.theatreName}</div>
            <div style={{color: "#084782",paddingTop:"4px"}}>{city}, {state}, {country}</div>
          </div>
        );
      }
    },
    { Header: 'Bandwidth', accessor: 'bandwidth' ,
     Cell : ({row}) =>{
        return (
         <div>
            <div>{row.original.bandwidth}</div>
            <div style={{color: "#69788C",paddingTop:"4px"}}>{row.original.avgBandwidth}</div>
         </div>
        )
 
     }
    },
    { Header: 'Status', accessor: 'deviceStatus',
    Cell : props =>   
     <div className='cardstatus' style={{padding:"0px",margin:"0px"}}>
       <div className="cardstatus__div">
          <span className={`${props.value} status_symbol`} ></span>
          <div  style={{color: "#084782"}}>{props.value} </div>
       </div>
    </div>

    },
    { Header: 'Download Status', accessor: 'downloadStatus',
    Cell : props => 
    <div className='cardstatus' style={{padding:"0px",margin:"0px"}}>
      <div className="cardstatus__div">
       <span className={`${props.value} status_symbol`} ></span>
       <div  style={{color: "#084782"}}>{props.value} </div>
      </div>
    </div>
    },
    { Header: 'OS Version', accessor: 'osVersion'},
    {
        Header : " ",
        Cell : ({value,row}) => <Link to={`/details/${row.original.serialNo}`}><button style={{padding:"4px 8px",background: "#E6ECF0",borderRadius: "6px",outline:"none",border:"none",fontWeight:"500"}}>View</button></Link>
    },
  ];
function InfoTable({tabledata}) {
 


  //Table configuration
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,setGlobalFilter,
    nextPage,previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setPageSize,
  } = useTable({ 
    columns, 
    data: tabledata,
   },useGlobalFilter,usePagination);

   const { globalFilter,pageIndex, pageSize } = state;


  return (
    <div>
                <div className="filter_container">
            <SearchInput filter={globalFilter} setFilter={setGlobalFilter}/>
            <FIlterButton />
            <Pagination {...{previousPage, nextPage, canNextPage, canPreviousPage, pageOptions, pageIndex, pageSize, setPageSize}}/>
        </div>
    <div className="infotable table-wrapper">
    <table {...getTableProps()} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 1px #c5c5c5',
                  background: 'white',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      background: 'white',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    </div>

  )
}

export default InfoTable