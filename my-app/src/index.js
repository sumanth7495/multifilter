import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import malicious from "./malicious.svg";
import suspicious from "./suspicious.svg";
import benign from "./benign.svg";
import error from "./error.svg";



const results = {
  "results": [
    {
      "indicator": "mal@emalware.net",
      "ti_tool": "Virus Total",
      "ti_tag": "Malicious",
      "ti_score": "3 - High",
      "ti_permalink": "https://virustoal.com/my-virus-link",
      "ti_logo": malicious
    },
    {
      "indicator": "emailware.net",
      "ti_tool": "URLHaus",
      "ti_tag": "Suspicious",
      "ti_score": "7/10",
      "ti_logo": suspicious

    },
    {
      "indicator": "10.24.9182",
      "ti_tool": "AlienVault",
      "ti_tag": "Benign",
      "ti_score": "32/100",
      "ti_logo": benign
    },
    {
      "indicator": "bad@emalware.net",
      "ti_tool": "Hybrid Analysis",
      "ti_tag": "Error",
      "ti_score": "null",
      "ti_logo": error

    },
    {
      "indicator": "scarymalicious@emalware.net",
      "ti_tool": "ipqualityscore",
      "ti_tag": "Suspicious",
      "ti_score": "5 - High",
      "ti_logo": suspicious
    },
    {
      "indicator": "mal@emalware.net",
      "ti_tool": "AbuseIPDB",
      "ti_tag": "Unknown",
      "ti_score": "n/a",
      "ti_logo": error
    },
    {
      "indicator": "safeemailware.net",
      "ti_tool": "URLScan.io",
      "ti_tag": "Benign",
      "ti_score": "23/100",
      "ti_logo": benign
    },
    {
      "indicator": "10.32.100.122",
      "ti_tool": "None",
      "ti_tag": "New",
      "ti_score": "87/100",
      "ti_logo": malicious
    }
  ]
};

ReactDOM.render(<App />, document.getElementById("root"));
