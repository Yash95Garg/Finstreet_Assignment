const request = require("request");
_EXTERNAL_URL = "https://api.wazirx.com/api/v2/tickers";

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true}, (err, res, body) => {
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;
