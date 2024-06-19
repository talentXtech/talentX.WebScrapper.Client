const mainUrl = "https://localhost:7118/WebScrap/";
const allabolagUrlEndpoints = {
  post: {
    initiateScrap: mainUrl + "ScrapInfo?filterInput=",
  },
  get: {
    DataAsCSV: mainUrl + "GetScrapInfoAsCSV",
    DataBySearchInput: mainUrl + "GetScrapInfoAsCSVBySearchInput?filterInput=",
    DataByCategory: mainUrl + "GetScrapInfoAsCSVByCategory?filterInput=",
  },
  delete: {
    allScrapOutputData: mainUrl + "DeleteAllScrapOutputData",
    scrapOutputDataByCategory:
      mainUrl + "DeleteScrapOutputDataByCategory?filterInput=",
    scrapOutputDataBySearchFilterInput:
      mainUrl + "DeleteScrapOutputDataBySearchFilterInput?filterInput=",
  },
  filters: {
    filtersBySearchInput: mainUrl + "filtersBySearchInput",
    filtersByCategory: mainUrl + "filtersByCategory",
  },
};

export { allabolagUrlEndpoints };
