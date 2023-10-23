import multer from "multer";

// Creating Multer Storage And Give Nam Of The File And Destination Of The
// Destination -> Where Should Our File Place
// File-Name   -> What is The Name Of The file(Photo In Our case)
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    //  Giving Our file Unique name By giving suffix
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    const completeFileName = filename + "-" + uniqueSuffix + ".png";
    cb(null, completeFileName);
  },
});
// Creating Upload Instance By Using Storage Path and Name
export const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
});
