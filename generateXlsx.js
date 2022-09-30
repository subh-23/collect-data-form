const User = require('./model/userSchema');
const XLSX = require('xlsx')
var generateUniqueId = require("generate-unique-id")

//taking out all data from database
const generateXlsx = async () => {
    var user = await User.find();
    user = JSON.parse(JSON.stringify(user),"utf-8");
    const uniqueFileName = generateUniqueId();
    convertJsonToExcel(uniqueFileName, user);
}
//convert json to excel
const convertJsonToExcel = (uniqueFileName, user) => {
    const workSheet = XLSX.utils.json_to_sheet(user);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "dataSheet")
    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })
    // Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
    XLSX.writeFile(workBook, `${uniqueFileName}.xlsx`)
}

module.exports = generateXlsx;