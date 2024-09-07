const express = require("express");
const app = express();

const isOldEnough = (age) => {
  return age > 14;
};

// middlewire
// takes agrument req, res, next
// next is callback -> which can be a next middleware, or the handdler
function isOldEnoughMiddleware(req, res, next) {
  if (req.query.age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "You arent old enough",
    });
  }
}

// app.use is a global middleware and it will aplied to all the rotes below it
// We dont have to use middleware for each route separetly.
app.use(isOldEnoughMiddleware);

// handler
// this is how we can use middleware inside of a route
// app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
//   res.json({
//     msg: "You have ride the ride 1",
//   });
// });

app.get("/ride1", (req, res) => {
    res.json({
      msg: "You have ride the ride 1",
    });
  });
  

app.get("/ride2", (req, res) => {
    res.json({
      msg: "You have ride the ride 2",
    });
});

app.listen(3100);
