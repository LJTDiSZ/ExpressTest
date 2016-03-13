/**
 * Created by Jun on 3/12/16.
 */
var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

function validatePresenceOf(value){
    return value && value.length;
}

var TaskSchema = new Schema({
    task: { type:String },
    owner: { type:String }
});

module.exports = TaskSchema;

