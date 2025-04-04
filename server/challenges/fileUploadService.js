const axios = require('axios')
const formData = require("form-data");
const fs = require("fs");
const path = require("path")

module.exports = fileUploadService = async (req, res) => {
    const form = new formData();
    const filePath = path.resolve(__dirname, "../data/fileUpload/sample.txt");
    const myFile = fs.createReadStream(filePath);
    form.append("file", myFile);
  
    const headers = form.getHeaders();
    const resp = await axios.post("http://localhost:3001/upload", form, {
      headers: headers,
    });
  
    res.json(resp.data);
}