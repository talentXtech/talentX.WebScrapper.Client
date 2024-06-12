import { createAndDownloadCsv } from "../utils/CreateAndDownloadCSV";

function fetchToinitiateScrap(url) {
  var apiRequest = fetch(url, {
    method: "GET",
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
    })
    .catch(() => {
      alert("Issue with Downloading the file. Please try again later...");
    });
}

export { fetchToinitiateScrap, fetchToDownloadDataAsCsv };
