function fetchToinitiateScrap(url, data) {
  var apiRequest = fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return apiRequest;
}




export { fetchToinitiateScrap };
