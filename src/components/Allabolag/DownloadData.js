import { useState } from "react";
import { fetchToDownloadDataAsCsv } from "../../api/apiToFetch";
import { urlEndPoints } from "../../api/AllabolagUrls";
import { inputFieldValidation } from "../../utils/validations";

function DownloadData() {
  const [inputFieldText2, setInputFieldText2] = useState({
    value: "",
    isTouched: false,
  });

  const getAllScrapDataAsCsv = () => {
    const fileName = "Allabolag-All-Data.csv";
    var url = urlEndPoints.get.DataAsCSV;
    fetchToDownloadDataAsCsv(url, fileName);
  };

  function getScrapDataAsCsv(inputText) {
    var searchTerm = inputFieldText2.value.split(" ").join("%20");
    var url = urlEndPoints.get.DataBySearchInput + searchTerm;
    const fileName = "Allabolag-" + inputText + "-Data.csv";
    fetchToDownloadDataAsCsv(url, fileName);
    setInputFieldText2({ value: "", isTouched: false });
  }
  return (
    <>
      <div>
        <div>
          <h2>Dwonload Scrapped Data from Allabolog</h2>
          <div>
            <input
              className="para inputBox"
              type="text"
              id="fieldText"
              name="fieldText"
              value={inputFieldText2.value}
              onChange={(e) =>
                setInputFieldText2({
                  ...inputFieldText2,
                  value: e.target.value,
                })
              }
              onBlur={() =>
                setInputFieldText2({ ...inputFieldText2, isTouched: true })
              }
            />
            {inputFieldValidation(inputFieldText2) ? (
              <p className="para message error">*Please provide valid text</p>
            ) : (
              <p></p>
            )}
          </div>
          <button
            disabled={inputFieldValidation(inputFieldText2)}
            onClick={() => getScrapDataAsCsv(inputFieldText2.value)}
          >
            Download File
          </button>

          <button onClick={getAllScrapDataAsCsv}>
            Download All Data as CSV File
          </button>
        </div>
      </div>
    </>
  );
}
export default DownloadData;
