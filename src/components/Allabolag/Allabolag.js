import { useState, useEffect } from "react";
import DownloadData from "./DownloadData";
import { allabolagUrlEndpoints } from "../../api/AllabolagUrls";
import ScrapData from "./ScrapData";
import DeleteData from "./DeleteData";

function Allabolag() {
  const [categories, setCategories] = useState([]);
  const [searchInputText, setSearchInputText] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(allabolagUrlEndpoints.filters.filtersByCategory)
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          setCategories([...data.data]);
        }
      });
  }, [dataLoaded]);

  useEffect(() => {
    fetch(allabolagUrlEndpoints.filters.filtersBySearchInput)
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          setSearchInputText([...data.data]);
        }
      });
  }, [dataLoaded]);
  return (
    <>
      <ScrapData setDataLoaded={setDataLoaded} dataLoaded={dataLoaded} />
      <DownloadData categories={categories} searchInputText={searchInputText} />
      <DeleteData
        setDataLoaded={setDataLoaded}
        dataLoaded={dataLoaded}
        categories={categories}
        searchInputText={searchInputText}
      />
    </>
  );
}

export default Allabolag;
