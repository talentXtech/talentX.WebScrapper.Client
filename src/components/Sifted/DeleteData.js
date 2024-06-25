import { useState } from "react";
import { fetchToDeleteData } from "../../api/apiToFetch";
import { SiftedUrlsEndpoints } from "../../api/SiftedUrls";
import { message } from "../../consts/Consts";

function DeleteData(props) {
  const [sector, setSector] = useState({
    value: "",
    isTouched: false,
  });

  const deleteAllDataFromDb = (e) => {
    var urlFOrInitialData = SiftedUrlsEndpoints.delete.allScrapOutputData;
    fetchToDeleteData(urlFOrInitialData);
    props.setDataLoaded(false);
  };

  function deleteDataByCategory(e) {
    var searchTerm = e.split(" ").join("%20");
    var url = SiftedUrlsEndpoints.delete.scrapOutputDataBySector + searchTerm;
    fetchToDeleteData(url);
    setSector({ value: "", isTouched: false });
    props.setDataLoaded(!props.dataLoaded);
  }

  return (
    <>
      <div className="container">
        <h2>Delete Scrapped data from Database</h2>
        <div className="formcontainer">
          <h3>Delete all Scrapped data </h3>
          <button
            className="button primary"
            onClick={() => {
              if (window.confirm(message.confirmDeleteAlert)) {
                props.setDataLoaded(true);
                deleteAllDataFromDb();
              }
            }}
          >
            Delete All Data
          </button>
        </div>

        <div className="formcontainer">
          <div>
            <p className="fieldTitle">
              Select Searched Input-Text to filter & delete data
            </p>
            <select
              className="para inputBox"
              title="Select Category to filter & delete data"
              id="searchInputText"
              name="searchInputText"
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
              {props.sectorsToDownload.map((text, index) => (
                <option id="searchInputText-options" key={index} value={text}>
                  {text}
                </option>
              ))}
            </select>
          </div>
          <button
            disabled={sector.value === ""}
            className="button primary"
            onClick={() => {
              if (window.confirm(message.confirmDeleteAlert)) {
                deleteDataByCategory(sector.value);
              }
            }}
          >
            Delete Data
          </button>
        </div>
      </div>
    </>
  );
}
export default DeleteData;
