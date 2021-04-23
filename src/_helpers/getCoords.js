const getCoords = async (postcode) =>{
    const locResponse = await fetch(`https://postcodes.io/postcodes/${postcode}`)
    const location = await locResponse.json()
    if (location.status===200){
    return {type:location.result.admin_district,coordinates:[location.result.latitude,location.result.longitude]}
    }
    return false
  }

export default getCoords;