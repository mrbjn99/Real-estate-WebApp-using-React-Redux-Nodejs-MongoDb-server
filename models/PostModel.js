import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    Name:{
    type: String,
    require: true
    },
    Price:{
    type: Number,
    },
    Time:{
    type: Date,
    },
    Location:{
    type: String,
    }
    // createdAT and updatedAt
}, { timestamps: true });

export const PostModel = mongoose.model('Post', schema);