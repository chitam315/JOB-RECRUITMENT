const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const { TIMESTAMP } = require('mysql/lib/protocol/constants/types');

mongoose.plugin(slug)

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
    name: {type: String},
    companyName: {type: String},
    location: {type: String},
    salary: {type: String},
    description: {type: String},
    image: {type: String},
    postedDate: {type: String},
    jobLevel: {type: String},
    jobCategory: {type: Array},
    skill: {type: String},
    preferredLanguage: {type: String},
    slug: {type: String, slug: 'name', unique: true, slugOn: {save: true, update: true, updateOne: true, updateMany: true, findOneAndUpdate: true}}

},{timestamps:true})

module.exports = mongoose.model('posts',Post)