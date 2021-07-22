export const handleResponse = async (response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(JSON.parse(message));
  }
  const data = await response.json();
  return data;
};

export const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return {};
  }
  return { Authorization: `Bearer ${JSON.parse(token)}` };
};

export const getCoords = async (postcode) => {
  const response = await fetch(`https://postcodes.io/postcodes/${postcode}`);
  if (!response.ok) {
    throw new Error("Invalid Postcode!");
  }
  const location = await response.json();
  return [location.result.latitude, location.result.longitude];
};

export const getPostcode = async (lng, lat) => {
  const response = await fetch(
    `https://postcodes.io/postcodes?lon=${lng}&lat=${lat}`
  );
  const location = await response.json();
  return `${location.result[0].postcode}, ${location.result[0].admin_district}`;
};
