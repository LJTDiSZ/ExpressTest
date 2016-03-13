/**
 * Created by Jun on 3/12/16.
 */
var mongoose = require('mongoose')
var TaskSchema = require('../schemas/task')
var task = mongoose.model('todoTask', TaskSchema);

module.exports = task
