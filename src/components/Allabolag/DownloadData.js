import { useState } from "react";
import { fetchToDownloadDataAsCsv } from "../../api/apiToFetch";
import { allabolagUrlEndpoints } from "../../api/AllabolagUrls";

function DownloadData(props) {
  const [catergory, setCategory] = useState({
    value: "",
    isTouched: false,
  });
  const [inputText, setInputText] = useState({
    value: "",
    isTouched: false,
  });

  const getAllScrapDataAsCsv = () => {
    const fileName = "Allabolag-All-Data.csv";
    var url = allabolagUrlEndpoints.get.DataAsCSV;
    fetchToDownloadDataAsCsv(url, fileName);
  };

  function getScrapDataByCategoryAsCsv(e) {
    var searchTerm = e.split(" ").join("%20");
    var url = allabolagUrlEndpoints.get.DataByCategory + searchTerm;
    const fileName = "Allabolag-" + e + "-Data.csv";
    fetchToDownloadDataAsCsv(url, fileName);
    setCategory({ value: "", isTouched: false });
  }

  function getScrapDataBySearchInputAsCsv(e) {
    var searchTerm = e.split(" ").join("%20");
    var url = allabolagUrlEndpoints.get.DataBySearchInput + searchTerm;
    const fileName = "Allabolag-" + e + "-Data.csv";
    fetchToDownloadDataAsCsv(url, fileName);
    setInputText({ value: "", isTouched: false });
  }
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
        <form className="formcontainer">
          <div>
            <p className="fieldTitle">
              Select Category to filter & download data
            </p>
            <select
              className="para inputBox"
              title="Select Category to filter & download data"
              id="category"
              name="category"
              onFocus={() => {
                setCategory({
                  ...catergory,
                  isTouched: true,
                });
              }}
              onChange={(e) => {
                setCategory({
                  ...catergory,
                  value: e.target.value,
                  isTouched: true,
                });
              }}
            >
              <option>Select Category</option>
              {props.categories.map((catergory, index) => (
                <option id="category-options" key={index} value={catergory}>
                  {catergory}
                </option>
              ))}
            </select>
          </div>
          <button
            disabled={catergory.value === ""}
            className="button primary"
            onClick={() => getScrapDataByCategoryAsCsv(catergory.value)}
          >
            Download as CSV
          </button>
        </form>
        <form className="formcontainer">
          <div>
            <p className="fieldTitle">
              Select Searched Input-Text to filter & download data
            </p>
            <select
              className="para inputBox"
              title="Select Searched Input-Text to filter & download data"
              id="searchInputText"
              name="searchInputText"
              onFocus={() => {
                setInputText({
                  ...inputText,
                  isTouched: true,
                });
              }}
              onChange={(e) => {
                setInputText({
                  ...inputText,
                  value: e.target.value,
                  isTouched: true,
                });
              }}
            >
              <option>Select Search Input-Text</option>
              {props.searchInputText.map((text, index) => (
                <option id="searchInputText-options" key={index} value={text}>
                  {text}
                </option>
              ))}
            </select>
          </div>
          <button
            disabled={inputText.value === ""}
            className="button primary"
            onClick={() => getScrapDataBySearchInputAsCsv(inputText.value)}
          >
            Download as CSV
          </button>
        </form>
        <div className="breakLine"></div>
      </div>
    </>
  );
}
export default DownloadData;
