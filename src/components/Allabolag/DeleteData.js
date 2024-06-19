import { useState } from "react";
import { fetchToDeleteData } from "../../api/apiToFetch";
import { allabolagUrlEndpoints } from "../../api/AllabolagUrls";

function DeleteData(props) {
  const [catergory, setCategory] = useState({
    value: "",
    isTouched: false,
  });
  const [inputText, setInputText] = useState({
    value: "",
    isTouched: false,
  });

  const deleteAllDataFromDb = (e) => {
    var url = allabolagUrlEndpoints.delete.allScrapOutputData;
    fetchToDeleteData(url);
    props.setDataLoaded(!props.dataLoaded);
  };

  function deleteDataByCategory(e) {
    var searchTerm = e.split(" ").join("%20");
    var url =
      allabolagUrlEndpoints.delete.scrapOutputDataByCategory + searchTerm;
    fetchToDeleteData(url);
    setCategory({ value: "", isTouched: false });
    props.setDataLoaded(!props.dataLoaded);
  }

  function deleteDataBySearchInput(e) {
    var searchTerm = e.split(" ").join("%20");
    var url =
      allabolagUrlEndpoints.delete.scrapOutputDataBySearchFilterInput +
      searchTerm;
    fetchToDeleteData(url);
    setInputText({ value: "", isTouched: false });
    props.setDataLoaded(!props.dataLoaded);
  }

  return (
    <>
      <div className="container">
        <h2>Delete Scrapped data from Database</h2>
        <form className="formcontainer">
          <h3>Delete all Scrapped data </h3>
          <button
            className="button primary"
            onClick={() => {
              if (
                window.confirm("Are you sure you wish to delete this item?")
              ) {
                props.setDataLoaded(true);
                deleteAllDataFromDb();
              }
            }}
          >
            Delete All Data
          </button>
        </form>
        <form className="formcontainer">
          <div>
            <p className="fieldTitle">
              Select Category to filter & delete data
            </p>
            <select
              className="para inputBox"
              title="Select Category to filter & delete data"
              id="category"
              name="category"
              onFocus={() => {
                setCategory({
                  ...catergory,
                  isTouched: true,
                });
              }}
              onChange={(e) => {
                setCategory({
                  ...catergory,
                  value: e.target.value,
                  isTouched: true,
                });
              }}
            >
              <option>Select Category</option>
              {props.categories.map((catergory, index) => (
                <option id="category-options" key={index} value={catergory}>
                  {catergory}
                </option>
              ))}
            </select>
          </div>
          <button
            disabled={catergory.value === ""}
            className="button primary"
            onClick={() => {
              if (
                window.confirm("Are you sure you wish to delete this item?")
              ) {
                deleteDataByCategory(catergory.value);
              }
            }}
          >
            Delete Data
          </button>
        </form>
        <form className="formcontainer">
          <div>
            <p className="fieldTitle">
              Select Searched Input-Text to filter & delete data
            </p>
            <select
              className="para inputBox"
              title="Select Searched Input-Text to filter & delete data"
              id="searchInputText"
              name="searchInputText"
              onFocus={() => {
                setInputText({
                  ...inputText,
                  isTouched: true,
                });
              }}
              onChange={(e) => {
                setInputText({
                  ...inputText,
                  value: e.target.value,
                  isTouched: true,
                });
              }}
            >
              <option>Select Search Input-Text</option>
              {props.searchInputText.map((text, index) => (
                <option id="searchInputText-options" key={index} value={text}>
                  {text}
                </option>
              ))}
            </select>
          </div>
          <button
            disabled={inputText.value === ""}
            className="button primary"
            onClick={() => {
              if (
                window.confirm("Are you sure you wish to delete this item?")
              ) {
                deleteDataBySearchInput(inputText.value);
              }
            }}
          >
            Delete Data
          </button>
        </form>
      </div>
    </>
  );
}
export default DeleteData;
