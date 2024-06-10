import { useState } from "react";
import LoadingComponent from "./LoadingComponent";
import { fetchToinitiateScrap } from "./PostFetch";

function AllabolagScrapper() {
  const [inputFieldText, setInputFieldText] = useState({
    value: "",
    isTouched: false,
  });
  const [inputFieldText2, setInputFieldText2] = useState({
    value: "",
    isTouched: false,
  });
  const [isLoading, setLoading] = useState(false);
  const [dataReady, setDataReady] = useState(false);

  function initiateScrapHandler() {
    setLoading(true);
    setDataReady(false);
    fetchToinitiateScrap(
      "https://localhost:7118/WebScrap/ScrapInfo?filterInput=" +
        inputFieldText.value
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess) {
          setDataReady(true);
          setLoading(false);
          setInputFieldText({ value: "", isTouched: false });
        } else {
          alert("Issue with Scrapping data");
          setLoading(false);
          setInputFieldText({ value: "", isTouched: false });
        }
      })
      .catch((error) => {
        console.error(error);
        alert(error);
        setLoading(false);
        setInputFieldText({ value: "", isTouched: false });
      });
  }

  const getAllScrapDataAsCsv = () => {
    fetch("https://localhost:7118/WebScrap/GetScrapInfoAsCSV")
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Allabolag-All-Data.csv";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert("The file is downloaded");
      })
      .catch(() =>
        alert("Issue with Downloading the file. Please try again later...")
      );
  };

  function getScrapDataAsCsv(inputText) {
    var searchTerm = inputFieldText2.value.split(" ").join("%20");
    fetch(
      "https://localhost:7118/WebScrap/GetScrapInfoAsCSV?filterInput=" +
        searchTerm
    )
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Allabolag-" + inputText + "-Data.csv";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert("The file is downloaded");
        setInputFieldText2({ value: "", isTouched: false });
      })
      .catch(() => {
        alert("Issue with Downloading the file. Please try again later...");
        setInputFieldText2({ value: "", isTouched: false });
      });
  }

  function inputFieldValidation(input) {
    if (input.value.length < 1 && input.isTouched) return true;
  }

  if (isLoading) return <LoadingComponent />;

  return (
    <>
      <div className="container">
        <h1>Allalolag Web Scrapper</h1>
        <form className="formcontainer">
          <h2>Scrap Data from Allabolog</h2>
          <label htmlFor="fieldText" className="cartitle">
            Search field Input
          </label>
          <div>
            <input
              className="para inputBox"
              type="text"
              id="fieldText"
              name="fieldText"
              value={inputFieldText.value}
              onChange={(e) =>
                setInputFieldText({ ...inputFieldText, value: e.target.value })
              }
              onBlur={() =>
                setInputFieldText({ ...inputFieldText, isTouched: true })
              }
            />
            {inputFieldValidation(inputFieldText) ? (
              <p className="para message error">*Please provide valid text</p>
            ) : (
              <p></p>
            )}
          </div>
          <button onClick={initiateScrapHandler}>Scrap Data</button>

          <button
            disabled={!dataReady}
            onClick={() => getScrapDataAsCsv(inputFieldText.value)}
          >
            Download File
          </button>

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
                  <p className="para message error">
                    *Please provide valid text
                  </p>
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
        </form>
      </div>
    </>
  );
}
export default AllabolagScrapper;
