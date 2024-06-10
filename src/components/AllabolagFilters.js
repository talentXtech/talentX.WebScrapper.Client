import { useEffect, useState } from "react";
function AllabolagFilters() {
  const [categories, setCategories] = useState([]);
  const [searchInputText, setSearchInputText] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7118/WebScrap/filtersByCategory")
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          setCategories(...data.data);
        }
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7118/WebScrap/filtersBySearchInput")
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          setSearchInputText(...data.data);
        }
      });
  }, []);

  return (
    <>
      <p>{categories}</p>
      <p>{searchInputText}</p>
    </>
  );
}

export default AllabolagFilters;
