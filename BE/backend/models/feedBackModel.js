import mongoose from "mongoose";
const feedSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
})

const FeedBack = mongoose.model('Feedback',feedSchema);

export default FeedBack;