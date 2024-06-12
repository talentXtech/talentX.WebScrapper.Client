import { useEffect, useState } from "react";
import { urlEndPoints } from "../../api/AllabolagUrls";
function AllabolagFilters() {
  const [categories, setCategories] = useState([]);
  const [searchInputText, setSearchInputText] = useState([]);

  useEffect(() => {
    fetch(urlEndPoints.filters.filtersByCategory)
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          setCategories([...data.data]);
        }
      });
  }, []);

  useEffect(() => {
    fetch(urlEndPoints.filters.filtersBySearchInput)
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          setSearchInputText([...data.data]);
        }
      });
  }, []);

  return (
    <>
      <ul>
        {categories.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
      <ul>
        {searchInputText.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </>
  );
}

export default AllabolagFilters;
