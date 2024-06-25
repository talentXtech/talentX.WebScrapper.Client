const mainUrl = "http://localhost/layoff/WebScrap/";
const layoffUrlEndPoints = {
  post: {
    ScrapData: mainUrl + "GetScrapInfo",
  },
  get: {
    DataAsCSV: mainUrl + "GetScrapInfoAsCSV",
  },
  delete: {
    ScrapData: mainUrl + "DeleteScrapOutputData",
  },
};

export { layoffUrlEndPoints };
