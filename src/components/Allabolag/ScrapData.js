import { useState } from "react";
import LoadingComponent from "../LoadingComponent";
import { fetchToinitiateScrap } from "../../api/apiToFetch";
import { urlEndPoints } from "../../api/AllabolagUrls";

function ScrapData(props) {
  const [inputFieldText, setInputFieldText] = useState({
    value: "",
    isTouched: false,
  });

  const [isLoading, setLoading] = useState(false);

  function initiateScrapHandler() {
    setLoading(true);
    props.setDataLoaded(true);
    fetchToinitiateScrap(urlEndPoints.get.initiateScrap + inputFieldText.value)
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess) {
          setLoading(false);
          alert("Data scrapped successfully and is ready for download!");
        } else {
          alert("Issue with Scrapping data. Try again later...");
          setLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      })
      .finally(() => {
        setInputFieldText({ value: "", isTouched: false });
        props.setDataLoaded(false);
      });
  }

  return (
    <>
      <div className="container">
        <h1>Allalolag Web Scrapper</h1>
        <h2>Scrap Data</h2>
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            <form className="formcontainer">
              <div>
                <label htmlFor="fieldText" className="fieldTitle">
                  Search field Input*
                </label>

                <input
                  className="para inputBox"
                  type="text"
                  id="fieldText"
                  name="fieldText"
                  placeholder="Please enter a valid Keyword to"
                  value={inputFieldText.value}
                  onChange={(e) =>
                    setInputFieldText({
                      ...inputFieldText,
                      value: e.target.value,
                    })
                  }
                  onBlur={() =>
                    setInputFieldText({ ...inputFieldText, isTouched: true })
                  }
                />
                {inputFieldText.isTouched &&
                inputFieldText.value.length === 0 ? (
                  <p className="para message error">
                    *Please provide valid text
                  </p>
                ) : (
                  <p></p>
                )}
              </div>

              <button
                disabled={inputFieldText.value.length === 0}
                className="button primary"
                onClick={initiateScrapHandler}
              >
                Scrap Data
              </button>
            </form>
          </>
        )}
        <div className="breakLine"></div>
      </div>
    </>
  );
}
export default ScrapData;