const moment = require.requireActual("moment");

//this mocks the moment library. Check jest documentation for more information.

export default (timestamp = 0) => {
    return moment(timestamp);
};