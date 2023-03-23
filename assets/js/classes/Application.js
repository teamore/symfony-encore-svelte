import './Network';
import Network from "./Network";

class Application {
    network = undefined;
    currentPage = undefined;
    currentUser = undefined;
    debugMode = false;
    constructor(defaultPage = 'Login', debugMode = false) {
        this.network = new Network();
        this.setDebugMode(debugMode);
        this.currentPage = defaultPage;
        this.network.setResponseCallback((response) => this.networkResponseHandler(response));
    }
    setDebugMode(debugMode) {
        this.debugMode = debugMode;
        this.network.setDebugMode(debugMode);
    }
    debug(message) {
        if (!this.debugMode || !message) {
            return false;
        }
        console.debug(message);
    }
    getCurrentPage() {
        return this.currentPage;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    networkResponseHandler(response) {
        this.debug("Digesting network response...");
        this.debug(response);
        if (response.token) {
            this.network.setBearerToken(response.token);
            this.currentUser = response.payload;
            this.debug("Logged in User ["+this.currentUser.name+"]");
            window.location="Dashboard?token="+response.token;
        }
    }
    redirectTo(newPage) {
        this.debug("redirecting to page: "+newPage);
        this.currentPage = newPage;
        this.pageChangeHandler(newPage);
    }
    pageChangeHandler(newPage) {
    }
    logout() {
        this.currentUser = '';
        this.network.setBearerToken("");
        this.redirectTo("Login");
    }
}

export default Application;