import { useState } from "react";
import LoadingComponent from "../LoadingComponent";
import { postFetchToinitiateScrap } from "../../api/apiToFetch";
import { SiftedUrlsEndpoints } from "../../api/SiftedUrls";
import { message } from "../../consts/Consts";

function ScrapData(props) {
  const [sector, setSector] = useState({
    value: "",
    isTouched: false,
  });

  const [isLoading, setLoading] = useState(false);

  function initiateInitialScrapHandler() {
    setLoading(true);
    postFetchToinitiateScrap(SiftedUrlsEndpoints.post.initiateInitialScrap)
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
        props.setDataLoaded(!props.dataLoaded);
      });
  }

  function initiateDetailedHandler(e) {
    setLoading(true);
    postFetchToinitiateScrap(
      SiftedUrlsEndpoints.post.initiateDetailedScrapBySector + e
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
        props.setDataLoaded(!props.dataLoaded);
      });
  }

  function initiateAllDetailedHandler() {
    setLoading(true);
    postFetchToinitiateScrap(SiftedUrlsEndpoints.post.initiateDetailedScrap)
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess) {
          setLoading(false);
          alert(data.data);
        } else {
          alert(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      })
      .finally(() => {
        props.setDataLoaded(!props.dataLoaded);
      });
  }

  return (
    <>
      <div className="container">
        <h1>Sifted Web Scrapper</h1>
        <h2>Scrap Data</h2>
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            <form className="formcontainer">
              <h3>Scrap Sectors and Article Urls</h3>
              <button
                className="button primary"
                onClick={initiateInitialScrapHandler}
              >
                Scrap Data
              </button>
            </form>
            <form className="formcontainer">
              <div>
                <p className="fieldTitle">Select Sector to Scrap data</p>
                <select
                  className="para inputBox"
                  title="Select Sector to Scrap data"
                  id="category"
                  name="category"
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
                  {props.sectorsToScrap.map((sectorName, index) => (
                    <option id="sector-options" key={index} value={sectorName}>
                      {sectorName}
                    </option>
                  ))}
                </select>
              </div>
              <button
                disabled={sector.value.length === 0}
                className="button primary"
                onClick={() => initiateDetailedHandler(sector.value)}
              >
                Scrap Data
              </button>
            </form>
            <form className="formcontainer">
              <h3>Scrap All Detailed Data</h3>
              <button
                className="button primary"
                onClick={() => initiateAllDetailedHandler()}
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
