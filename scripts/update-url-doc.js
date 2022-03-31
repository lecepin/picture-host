const glob = require("glob");
const fs = require("fs");
const path = require("path");

glob(
  "images/**",
  {
    nodir: true,
  },
  (er, files) => {
    let content = "# Pictrue-Host Image URL\n";

    content += "\n ## From Github";

    files.map((item) => {
      content += `\n - [https://raw.githubusercontent.com/lecepin/picture-host/main/${item}](https://raw.githubusercontent.com/lecepin/picture-host/main/${item})`;
    });

    content += "\n ## From JsDelivr";
    files.map((item) => {
      content += `\n - [https://cdn.jsdelivr.net/gh/lecepin/picture-host/${item}](https://cdn.jsdelivr.net/gh/lecepin/picture-host/${item})`;
    });

    fs.writeFileSync(path.resolve(__dirname, "../URL.md"), content);
  }
);
