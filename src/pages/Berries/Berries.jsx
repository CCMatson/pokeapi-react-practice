import { useEffect, useState } from "react";
import { getBerryList } from "../../services/api-calls";
// import { Link } from "react-router-dom";

const BerryList = () => {
  const [berryList, setBerryList] = useState([])

  useEffect(() => {
    const fetchBerryList = async () => {
      const berryData = await getBerryList()
      setBerryList(berryData.results)
    }
    fetchBerryList()
  },[])

  return (
    <>
    <h1>Berry List</h1>
    {berryList.length ?
    <>
    {berryList.map(berry =>
      <div>
        {berry.name}
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