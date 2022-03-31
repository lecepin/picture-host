const glob = require("glob");

glob(
  "images/**",
  {
    nodir: true,
  },
  function (er, files) {
    console.log(files);
  }
);
