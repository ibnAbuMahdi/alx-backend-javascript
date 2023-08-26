function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise((resolve, reject) => {
            resolve({ data: 'Successful response from the API' });
    });
  } else {
  	done();
  }
}

module.exports = getPaymentTokenFromAPI
