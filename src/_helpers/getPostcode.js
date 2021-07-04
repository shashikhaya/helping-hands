const getPostcode = async (lng, lat) => {
  const locResponse = await fetch(
    `https://postcodes.io/postcodes?lon=${lng}&lat=${lat}`
  );
  const location = await locResponse.json();
  return `${location.result[0].postcode}, ${location.result[0].admin_district}`;
};

export default getPostcode;
