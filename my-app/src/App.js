import { useState, useCallback, useEffect } from "react"
import "./App.css"
import getOptionDetails from "./filterdata"
import $ from 'jquery';

const App = () => {
  const [optionDetails, setOptionDetails] = useState([{indicator: "", ti_tool:""}])


  const fetchOptionDetails = useCallback(async () => {
    try {
      const optionDetails = await getOptionDetails();
      if (optionDetails) {
        setOptionDetails(optionDetails);
      }
    } catch (error) {
      console.log('error----------->>', error)
      // (error);
    }
  }, []);

  useEffect(() => {
      fetchOptionDetails();
  }, []);


var cols = {
    IndicatorDropdown: 1,
    ResultDropdown: 2,
    VendorDropdown: 3
},
filters = {
    IndicatorDropdown: 'All',
    ResultDropdown: 'All',
    VendorDropdown: 'All'
};

function filter(column, value) {
var table = document.getElementById("table-tbody"),
    tr = table.getElementsByTagName("tr"),
    i,
    keys,
    found;

filters[column] = value; //{region: 'email.net', role: all, ass: all}
keys = Object.keys(filters); // [region, role, ass]
for (i = 0; i < tr.length; i++) { //iteration thru each row region, role, ass
    found = keys.every(function (k) {
        var td = tr[i].getElementsByTagName("td")[cols[k]];
        return filters[k] === "All" || td && td.innerHTML.indexOf(filters[k]) > -1;
    });
    tr[i].style.display = found ? "" : "none";
}
}

// //Filtering region dropdown
$('body').on("change", '#IndicatorDropdown', function () {
filter('IndicatorDropdown', $(this).val());
});

//Filtering role dropdown
$('body').on("change", '#ResultDropdown', function () {
filter('ResultDropdown', $(this).val());
});

//Show active inactive users
$('body').on("change", '#VendorDropdown', function () {
filter('VendorDropdown', $(this).val());
});

window.$ = document.querySelectorAll.bind(document)


// document.querySelector('#IndicatorDropdown').addEventListener("change",  
//   filter(IndicatorDropdown, document.querySelector(this).value)
// );

// document.querySelector('body').addEventListener("change", '#ResultDropdown', function () {
//   filter('ResultDropdown', document.querySelector(this).value);
// });

// //Show active inactive users
// document.querySelector('body').addEventListener("change", '#VendorDropdown', function () {
//   filter('VendorDropdown', document.querySelector(this).value);
// });
  const tbodies = optionDetails?.results?.map((item, i) => {
    return (
      <tbody key={i}>
        <tr>
           <td className="table-logo">
           <div className="logo-container">
                <img className="background" src={item.ti_logo}/>
           </div>
            <div>
              <a href="/">TI-917</a>
            <div>{item.indicator}</div>
            </div>
            </td>
           <td>{item.ti_tag}</td>
           <td>{item.ti_tool}</td>
           <td>{item.ti_score}</td>
      </tr>
      </tbody>
      
    )
  })
  return (
    <div className="container">
      <table className="row">
        <thead>
          <tr>
            <th colSpan="4">Indicator Reference Display</th>
          </tr>
          <tr>
            <th>
            <select id="IndicatorDropdown">
                    <option value="All">Indicator Selector (ALL)</option>
                    <option value="bad@emalware.net">bad@emalware.net</option>
                    <option value="emailware.net">emailware.net</option>
                    <option value="mal@emalware.net">mal@emalware.net</option>
                    <option value="scarymalicious@emalware.net">scarymalicious@emalware.net</option>
            </select>
            </th>
            <th>
            <select id="ResultDropdown">
                    <option value="All">Result Selector (ALL)</option>
                    <option value="Malicious">Malicious</option>
                    <option value="Suspicious">Suspicious</option>
                    <option value="Benign">Benign</option>
                    <option value="Error">Error</option>
                    <option value="Unknown">Unknown</option>
            </select>
            </th>
            <th>
            <select id="VendorDropdown">
                    <option value="All"> Vendor Selector (ALL)</option>
                    <option value="Virus Total Results">Virus Total</option>
                    <option value="URLHaus Results">URLHaus </option>
            </select>
            </th>
            <th>
            <button className="export-button" >Export</button>
            </th>
          </tr>
        </thead>
        {tbodies}
      </table>
    </div>
  )
}

export default App
