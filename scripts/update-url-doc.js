const glob = require("glob");

glob("*.{png,jp{,e}g}", {}, function (er, files) {
  console.log(files);
});
