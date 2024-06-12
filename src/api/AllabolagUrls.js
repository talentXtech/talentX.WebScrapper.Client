const allabolagUrls = "https://localhost:7118/WebScrap/";
const urlEndPoints = {
  get: {
    initiateScrap: allabolagUrls + "ScrapInfo?filterInput=",
    DataAsCSV: allabolagUrls + "GetScrapInfoAsCSV",
    DataBySearchInput:
      allabolagUrls + "GetScrapInfoAsCSVBySearchInput?filterInput=",
    DataByCategory: allabolagUrls + "GetScrapInfoAsCSVByCategory?filterInput=",
  },
  delete: {
    initialScrapData: allabolagUrls + "DeleteInitialScrapOutputData",
    detailedScrapOutputData: allabolagUrls + "DeleteDetailedScrapOutputData",
    detailedScrapOutputDataByCategory:
      allabolagUrls + "DeleteDetailedScrapOutputDataByCategory?filterInput=",
    detailedScrapOutputDataBySearchFilterInput:
      allabolagUrls +
      "DeleteDetailedScrapOutputDataBySearchFilterInput?filterInput=",
  },
  filters: {
    filtersBySearchInput: allabolagUrls + "filtersBySearchInput",
    filtersByCategory: allabolagUrls + "filtersByCategory",
  },
};

export { urlEndPoints };
