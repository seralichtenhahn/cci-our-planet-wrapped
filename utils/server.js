export const getApiData = async (endpoint) =>
  fetch(`https://api.footprintnetwork.org${endpoint}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${Buffer.from(
        `user:${process.env.FOOTPRINT_NETWORK_API_KEY}`,
        'utf-8',
      ).toString('base64')}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
