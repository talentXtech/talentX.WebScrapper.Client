import { useState } from "react";
import LoadingComponent from "../LoadingComponent";
import { postFetchToinitiateScrap } from "../../api/apiToFetch";
import { allabolagUrlEndpoints } from "../../api/AllabolagUrls";
import { message } from "../../consts/Consts";

function ScrapData(props) {
  const [inputFieldText, setInputFieldText] = useState({
    value: "",
    isTouched: false,
  });

  const [isLoading, setLoading] = useState(false);

  function initiateScrapHandler() {
    setLoading(true);

    postFetchToinitiateScrap(
      allabolagUrlEndpoints.post.initiateScrap + inputFieldText.value
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess) {
          setLoading(false);
          alert(data.data);
        } else {
          alert(message.error);
          setLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      })
      .finally(() => {
        setInputFieldText({ value: "", isTouched: false });
        props.setDataLoaded(!props.dataLoaded);
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
            <div className="formcontainer">
              <div>
                <label htmlFor="fieldText" className="fieldTitle">
                  Search field Input*
                </label>

                <input
                  className="para inputBox"
                  type="text"
                  id="fieldText"
                  name="fieldText"
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
            </div>
          </>
        )}
        <div className="breakLine"></div>
      </div>
    </>
  );
}
export default ScrapData;
