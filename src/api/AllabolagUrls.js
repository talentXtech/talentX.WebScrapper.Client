const mainUrl = "https://localhost:7118/WebScrap/";
const allabolagUrlEndpoints = {
  get: {
    initiateScrap: mainUrl + "ScrapInfo?filterInput=",
    DataAsCSV: mainUrl + "GetScrapInfoAsCSV",
    DataBySearchInput:
      mainUrl + "GetScrapInfoAsCSVBySearchInput?filterInput=",
    DataByCategory: mainUrl + "GetScrapInfoAsCSVByCategory?filterInput=",
  },
  delete: {
    initialScrapData: mainUrl + "DeleteInitialScrapOutputData",
    detailedScrapOutputData: mainUrl + "DeleteDetailedScrapOutputData",
    detailedScrapOutputDataByCategory:
      mainUrl + "DeleteDetailedScrapOutputDataByCategory?filterInput=",
    detailedScrapOutputDataBySearchFilterInput:
      mainUrl +
      "DeleteDetailedScrapOutputDataBySearchFilterInput?filterInput=",
  },
  filters: {
    filtersBySearchInput: mainUrl + "filtersBySearchInput",
    filtersByCategory: mainUrl + "filtersByCategory",
  },
};

export { allabolagUrlEndpoints };
