const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: "private_QnXjTp45iM/rpbcdeTis1HdsdMA="
})

const uploadFile = async (buffer) => {

    const result = await imagekit.upload({
        file: buffer,
        fileName: "image.jpg"
    })

    return result;

}

module.exports = uploadFile;