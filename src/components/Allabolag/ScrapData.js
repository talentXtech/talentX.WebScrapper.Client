import { useState } from "react";
import LoadingComponent from "../LoadingComponent";
import { fetchToinitiateScrap } from "../../api/apiToFetch";
import { urlEndPoints } from "../../api/AllabolagUrls";
import { inputFieldValidation } from "../../utils/validations";

function ScrapData() {
  const [inputFieldText, setInputFieldText] = useState({
    value: "",
    isTouched: false,
  });

  const [isLoading, setLoading] = useState(false);

  function initiateScrapHandler() {
    setLoading(true);
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
        console.error(error);
        alert(error);
        setLoading(false);
      })
      .finally(() => {
        setInputFieldText({ value: "", isTouched: false });
      });
  }

  if (isLoading) return <LoadingComponent />;

  return (
    <>
      <div className="container">
        <h1>Allalolag Web Scrapper</h1>
        <form className="formcontainer">
          <h2>Scrap Data from Allabolog</h2>
          <div>
            <label htmlFor="fieldText" className="cartitle">
              Search field Input
            </label>

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

            <button onClick={initiateScrapHandler}>Scrap Data</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ScrapData;
