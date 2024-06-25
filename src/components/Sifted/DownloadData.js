import { useState } from "react";
import { fetchToDownloadDataAsCsv } from "../../api/apiToFetch";
import { SiftedUrlsEndpoints } from "../../api/SiftedUrls";

function DownloadData(props) {
  const [sector, setSector] = useState({
    value: "",
    isTouched: false,
  });

  function getAllScrapDataAsCsv() {
    const fileName = "Sifted-All-Data.csv";
    var url = SiftedUrlsEndpoints.get.DataAsCSV;
    fetchToDownloadDataAsCsv(url, fileName);
  }

  function getScrapDataByCategoryAsCsv(e) {
    var searchTerm = e.split(" ").join("%20");
    var url = SiftedUrlsEndpoints.get.DataByCategory + searchTerm;
    const fileName = "Sifted-" + e + "-Data.csv";
    fetchToDownloadDataAsCsv(url, fileName);
    setSector({ value: "", isTouched: false });
  }

  return (
    <>
      <div className="container">
        <h2>Download Scrapped data as CSV</h2>
        <div className="formcontainer">
          <h3>Download all Scrapped data as CSV</h3>
          <button
            className="button primary"
            onClick={() => getAllScrapDataAsCsv()}
          >
            Download All as CSV
          </button>
        </div>
        <div className="formcontainer">
          <div>
            <p className="fieldTitle">
              Select Sector to filter & download data
            </p>
            <select
              className="para inputBox"
              title="Select Sector to filter & download data"
              id="Sector"
              name="Sector"
              onFocus={() => {
                setSector({
                  ...sector,
                  isTouched: true,
                });
              }}
              onChange={(e) => {
                setSector({
                  ...sector,
                  value: e.target.value,
                  isTouched: true,
                });
              }}
            >
              <option>Select Category</option>
              {props.sectorsToDownload.map((catergory, index) => (
                <option id="category-options" key={index} value={catergory}>
                  {catergory}
                </option>
              ))}
            </select>
          </div>
          <button
            disabled={sector.value === ""}
            className="button primary"
            onClick={() => getScrapDataByCategoryAsCsv(sector.value)}
          >
            Download as CSV
          </button>
        </div>

        <div className="breakLine"></div>
      </div>
    </>
  );
}
export default DownloadData;
