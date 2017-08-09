const http = require("http");

// keep the server awake by pinging every 5 minutes (300000)
module.exports = () => {
    setInterval(() => {
        http.get(`http://juxta-proxy.herokuapp.com/`);
    }, 300000);
}
