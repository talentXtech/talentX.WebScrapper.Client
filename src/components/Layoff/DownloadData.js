import { useState } from "react";
import { fetchToDownloadDataAsCsv } from "../../api/apiToFetch";
import { layoffUrlEndPoints } from "../../api/layoffUrlEndPoints";

function DownloadData() {

  const getAllScrapDataAsCsv = () => {
    const fileName = "LayOff-All-Data.csv";
    var url = layoffUrlEndPoints.get.DataAsCSV;
    fetchToDownloadDataAsCsv(url, fileName);
  };

  return (
    <>
      <div className="container">
        <h2>Download Scrapped data as CSV</h2>
        <form className="formcontainer">
          <h3>Download all Scrapped data as CSV</h3>
          <button className="button primary" onClick={getAllScrapDataAsCsv}>
            Download All as CSV
          </button>
        </form>
        <div className="breakLine"></div>
      </div>
    </>
  );
}
export default DownloadData;
