const utils = require("./utils");


function sendPaymentRequestApi(totalAmount, totalShipping){
	const total = utils.calculateNumber("SUM", totalAmount, totalShipping);
	console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestApi
