import { createAndDownloadCsv } from "../utils/CreateAndDownloadCSV";

function postFetchToinitiateScrap(url) {
  var apiRequest = fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return apiRequest;
}

function fetchToDownloadDataAsCsv(url, fileName) {
  fetch(url)
    .then((resp) => resp.blob())
    .then((blob) => {
      createAndDownloadCsv(blob, fileName);
      alert("The requested file is downloaded successfully!");
    })
    .catch(() => {
      alert("Issue with Downloading the file. Please try again later...");
    });
}

function fetchToDeleteData(url) {
  fetch(url, {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.isSuccess) {
        alert("Data deleted successfully!");
      } else {
        alert(data.data);
      }
    })
    .catch(() => {
      alert("Issue with Deleting Data. Please try again later...");
    });
}

export {
  fetchToDownloadDataAsCsv,
  fetchToDeleteData,
  postFetchToinitiateScrap,
};
