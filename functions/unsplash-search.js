const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { query } = JSON.parse(event.body);

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_API_TOKEN}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log('error', error));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  };
};
