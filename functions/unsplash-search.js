exports.handler = (event) => {
  const { query } = JSON.parse(event.body);
  // var myHeaders = new Headers();
  // myHeaders.append(
  //   'Authorization',
  //   'Client-ID '
  // );

  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow',
  // };

  // fetch(
  //   `https://api.unsplash.com/search/photos?query=${formData.get(
  //     'query'
  //   )}`,
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log('error', error));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(`You searched for ${query}`),
  };
};
