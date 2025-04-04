const address = {};
module.exports = rateLimiter = (req, res, next) => {
  const ip = req.ip,
    t = new Date().getTime(),
    a = address[ip] || { c: 0, t: t };
  // new request - then t - a.t will be 0
  // if already exists - then t (current time) - a.t (last request time) will be greater than 0
  // if the time difference is greater than 60000 (1 minute) and count is greater than 5 then reset the count and time
  if (t - a.t > 60000 && a.c >= 5) {
    a.c = 0;
    a.t = t;
  } else {
    // if the time difference is less than 60000 and count is greater than 5 then return error
    if (a.c >= 5) {
      return res
        .status(429)
        .send(
          `Too many requests, please try again after ${Math.ceil(
            (60000 - (t - a.t)) / 1000
          )} seconds - list : ${JSON.stringify(address)}`
        );
    }
    // if the time difference is less than 60000 and count is less than 5 then increment the count
    a.c++;
  }
  // add the object to the address object with the ip as the key
  address[ip] = a;
  next();
};