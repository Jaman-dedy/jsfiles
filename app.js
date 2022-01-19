const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "test.txt"),
      "utf8"
    );
    console.log(`==>`, data);
    await fsPromises.unlink(path.join(__dirname, "files", "test.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "test2.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "test2.txt"),
      "\n\nNice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "test2.txt"),
      path.join(__dirname, "files", "renamed.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "renamed.txt"),
      "utf8"
    );
    console.log("==>", newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
