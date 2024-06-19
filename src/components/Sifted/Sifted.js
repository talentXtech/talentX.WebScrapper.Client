import { useState, useEffect } from "react";
import DownloadData from "./DownloadData";
import { SiftedUrlsEndpoints } from "../../api/SiftedUrls";
import ScrapData from "./ScrapData";
import DeleteData from "./DeleteData";

function Sifted() {
  const [sectorsToScrap, setSectorsToScrap] = useState([]);
  const [sectorsToDownload, setSectorsToDownload] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(SiftedUrlsEndpoints.filters.sectorsToScrapData)
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          setSectorsToScrap([...data.data]);
        }
      });
  }, [dataLoaded]);

  useEffect(() => {
    fetch(SiftedUrlsEndpoints.filters.sectorsToDwonloadData)
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          setSectorsToDownload([...data.data]);
        }
      });
  }, [dataLoaded]);
  return (
    <>
      <ScrapData
        setDataLoaded={setDataLoaded}
        dataLoaded={dataLoaded}
        sectorsToScrap={sectorsToScrap}
      />
      <DownloadData sectorsToDownload={sectorsToDownload} />
 <DeleteData
        setDataLoaded={setDataLoaded}
        dataLoaded={dataLoaded}
        sectorsToScrap={sectorsToScrap}
        sectorsToDownload={sectorsToDownload}
      /> 
    </>
  );
}

export default Sifted;
