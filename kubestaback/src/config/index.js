

console.log("env IMG_STORE_PATH:", process.env.IMG_STORE_PATH)
const uploadDir = process.env.IMG_STORE_PATH || '/tmp';
console.log("uploadDir:", uploadDir)
module.exports = {
    uploadDir: uploadDir,
};
