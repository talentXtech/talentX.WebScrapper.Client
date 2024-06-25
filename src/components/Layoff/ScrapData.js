import { useState } from "react";
import LoadingComponent from "../LoadingComponent";
import { postFetchToinitiateScrap } from "../../api/apiToFetch";
import { layoffUrlEndPoints } from "../../api/LayoffUrls";
import { message } from "../../consts/Consts";

function ScrapData() {
  const [isLoading, setLoading] = useState(false);

  function initiateScrapHandler() {
    setLoading(true);

    postFetchToinitiateScrap(layoffUrlEndPoints.post.ScrapData)
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
      });
  }

  return (
    <>
      <div className="container">
        <h1>LayOff Web Scrapper</h1>
        <h2>Scrap Data</h2>
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            <form className="formcontainer">
              <h3>Srap data from Layoff</h3>

              <button
                className="button primary"
                onClick={() => {
                  if (window.confirm(message.confirmScrapAlert))
                    initiateScrapHandler();
                }}
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
