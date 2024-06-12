import DownloadData from "./DownloadData";
import AllabolagFilters from "./GetFilters";
import ScrapData from "./ScrapData";

function Allabolag() {
  return (
    <>
      <ScrapData />
      <DownloadData />
      <AllabolagFilters />
    </>
  );
}

export default Allabolag;
