function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // Simulating no action
            resolve(); // Resolving without any value
        }
    });
}

module.exports = getPaymentTokenFromAPI
