const mainUrl = "https://localhost:7292/WebScrap/";
const layoffUrlEndPoints = {
  get: {
    ScrapData: mainUrl + "GetScrapInfo",
    DataAsCSV: mainUrl + "GetScrapInfoAsCSV",
    
  },
  delete: {
    ScrapData: mainUrl + "DeleteScrapOutputData",
   
  },
};

export { layoffUrlEndPoints };
