// Membaca Sistem Menggunakan Async

const fs = require("fs");

const fileReadCallBack = (error, data) => {
  if (error) {
    console.log("Error membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile("todo.txt", "utf8", fileReadCallBack);


// Membaca File dengan Sync

// const fs = require("fs");

// const data = fs.readFileSync("todo.txt", "utf8")
// console.log(data)