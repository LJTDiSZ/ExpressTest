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
},{
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

TaskSchema.set('toObject', { virtuals: true });
TaskSchema.set('toJSON', { virtuals: true });

TaskSchema.virtual('tlen').get(function(){
    return this.task.length / 3;
});

module.exports = TaskSchema;

