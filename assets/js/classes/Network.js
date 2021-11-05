import axios from "axios";

class Network {
    bearerToken = undefined;
    responseCallback = null;
    errorCallback = null;
    debugMode = false;
    constructor(bearerToken = undefined, responseCallback = null, errorCallback = null, debugMode = false) {
        this.setBearerToken(bearerToken);
        this.setResponseCallback(responseCallback);
        this.setErrorCallback(errorCallback);
        this.setDebugMode(debugMode);
    }
    setBearerToken(bearerToken = undefined) {
        this.debug("set Bearer Token: "+bearerToken);
        this.bearerToken = bearerToken;
    }
    setResponseCallback(responseCallbackFunction = undefined) {
        this.responseCallback = responseCallbackFunction;
    }
    setErrorCallback(errorCallbackFunction = undefined) {
        this.errorCallback = errorCallbackFunction;
    }
    setDebugMode(debugMode = false) {
        this.debugMode = debugMode;
        if (debugMode) console.debug("Network: verbose debug mode activated");
    }
    debug(message) {
        if (!this.debugMode || !message) {
            return false;
        }
        console.debug(message);
    }
    callApi(uri, data = undefined, headers = undefined, method = "GET", callback = null, errorCallback = null) {
        method = method.toLowerCase();
        this.debug("trigger " + method + " request to API (" + uri + ")");
        if (headers === undefined) {
            headers = {
                'Content-Type': `application/json`,
                'Accept': `application/json`
            };
        }
        if (this.bearerToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.bearerToken}`
            //headers['authorization'] = ((this.bearerToken.substr(0,7) !== "Bearer ") ? 'Bearer ': '') + this.bearerToken;
        }
        this.debug({headers:headers});
        if (data !== undefined) this.debug(data);
        if (method === 'get' && data !== undefined && data.params === undefined) {
            data = {params: data};
        }

        callback = callback || this.responseCallback;
        errorCallback = errorCallback || this.errorCallback;

        if (this.debugMode) {
            axios.interceptors.request.use(request => {
                console.debug('Starting Request', JSON.stringify(request, null, 2))
                return request
            })
        }

        axios[method](
            uri,
            data,
            {headers: headers}
        ).then(result => {
            if (callback === null) {
                this.debug(result);
            } else {
                callback(result.data);
            }
        }).catch(error => {
            if (errorCallback === null) {
                if (error.response) {
                    console.error("Request responded with an error ["+error.response.status+"].");
                    this.debug(error.response);
                } else if (error.request) {
                    console.error("timeout")
                    this.debug(error.request);
                }
                console.error(error);
            } else {
                this.debug("an error occurred. trying to call custom errorCallback function.")
                errorCallback(error);
            }
        });

        return null;
    }

}

export default Network;