function getPaymentTokenFromAPI(success) {
    return new Promise((resolve) => {
  if (success === true) {
            resolve({ data: 'Successful response from the API' });
  } else { resolve();}
    });
}

module.exports = getPaymentTokenFromAPI
