import { useState , useEffect } from 'react'
import { getBerryDetails } from '../../services/api-calls';
import { useLocation, Link } from 'react-router-dom';

const BerryDetails = () => {
  const [berryDetails, setBerryDetails] = useState({})
  const location = useLocation()

  useEffect (() => {
    const fetchBerryDetails = async () => {
      const BerryData = await getBerryDetails(location.state.berry.url)
      setBerryDetails(BerryData)
    }
    fetchBerryDetails()
  }, [location.state.berry.url])
  
  return (
    <>
      <h3>Berry Details</h3>
      <h4>Name: {berryDetails.name}</h4>
      <li>Growth Time: {berryDetails.growth_time}</li>
      <li>Smoothness: {berryDetails.smoothness}</li>
      <h4>Flavors:</h4>
      {berryDetails.flavors?.map(flavor =>
      <div key={berryDetails.url}>
        <li>{flavor.flavor.name} </li>
      </div>
            )}
    </>
  );
}

export default BerryDetails;