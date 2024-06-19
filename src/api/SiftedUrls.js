const mainUrl = "https://localhost:7078/WebScrap/";

const SiftedUrlsEndpoints = {
  post: {
    initiateInitialScrap: mainUrl + "ScrapInitialInfo",
    initiateDetailedScrap: mainUrl + "ScrapAllDetailedScrapInfo",
    initiateDetailedScrapBySector:
      mainUrl + "ScrapDetailedScrapInfoBasedOnSector?sector=",
  },
  get: {
    DataAsCSV: mainUrl + "GetAllScrapInfoAsCSV",
    DataByCategory: mainUrl + "GetScrapInfoBySectorAsCSV?sector=",
  },
  delete: {
    allScrapOutputData: mainUrl + "DeleteAllScrapOutputData",
    scrapOutputDataBySector: mainUrl + "DeleteScrapOutputDataBySector?sector=",
  },
  filters: {
    sectorsToScrapData: mainUrl + "filtersByCategory",
    sectorsToDwonloadData: mainUrl + "getSectorsToDownloadData",
  },
};

export { SiftedUrlsEndpoints };
