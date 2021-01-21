const {Schema, model} = require('mongoose')

const postSchema = new Schema ({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('PostMessage', postSchema)
