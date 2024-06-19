import { fetchToDeleteData } from "../../api/apiToFetch";
import {layoffUrlEndPoints} from "../../api/LayoffUrls"

function DeleteData() {
  const deleteAllDataFromDb = (e) => {
    var url = layoffUrlEndPoints.delete.ScrapData ;
    fetchToDeleteData(url);
  };

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
                deleteAllDataFromDb();
              }
            }}
          >
            Delete All Data
          </button>
        </form>
      </div>
    </>
  );
}
export default DeleteData;
