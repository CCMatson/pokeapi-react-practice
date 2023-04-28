import { useEffect, useState } from "react";
// import BerryDetails from "../../components/Berries/BerryDetails";
import { getBerryList } from "../../services/api-calls";
import { Link } from "react-router-dom";

const BerryList = () => {
  const [berryList, setBerryList] = useState([])

  useEffect(() => {
    const fetchBerryList = async () => {
      const berryData = await getBerryList()
      setBerryList(berryData.results)
    }
    fetchBerryList()
  }, [])

  return (
    <>
      {berryList.length ?
        <>
          {berryList.map(berry =>
            <div key={berry.url}>
              <Link to="/berries-details" state={{berry}}>{berry.name}</Link>
            </div>
          )}
        </>
        :
        <>
          <h4>Loading</h4>
        </>
      }
    </>
  )
}

export default BerryList