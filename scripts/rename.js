const glob = require("glob");
const fs = require("fs");
const path = require("path");

glob(
  "rename/**",
  {
    nodir: true,
  },
  (er, files) => {
    const nameObj = {};

    files.map((fileName) => {
      let ext = fileName.substring(fileName.lastIndexOf("."));
      let newName;

      while (!newName || nameObj[newName]) {
        newName = Date.now() + Math.random().toString().substring(0, 5);
      }
      nameObj[newName] = 1;

      fs.renameSync(
        path.resolve(__dirname, "..", fileName),
        path.resolve(__dirname, "../rename", newName + ext)
      );
    });
  }
);
