/**
 * Created by Jun on 3/12/16.
 */
var express = require('express');
var router = express.Router();

var Task = require('../app/models/task');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Task.find({}, function(err, docs){
        //console.log(docs);
        res.render('tasks/index', { title: 'Todos index view', docs: docs });
    });
});

router.post('/', function(req, res){
    console.log(req.body.task);
   var task = new Task({task:req.body.task});
    console.log(task);
    task.save(function(err){
        console.log("task saving");
        console.log(err);
        if (!err){
           res.redirect('/tasks/');
       } else {
           res.redirect('/tasks/new');
       }
    });
});

router.get('/new', function(req, res){
   res.render('tasks/new', { title: 'New Task'});
});

router.get('/:id/edit', function(req, res){
   Task.findById(req.params.id, function(err, doc){
        res.render('tasks/edit', {title:'Edit Task View', task:doc});
    });
});

router.put('/:id', function(req, res){
   Task.findById(req.params.id, function(err, doc){
       console.log("PUT:");console.log(doc);
       doc.task = req.body.task;
       doc.save(function(err){
           if (!err){
               res.redirect('/tasks');
           } else {

           }
       });
   }) ;
});

router.delete('/:id', function(req, res){
    Task.findById(req.params.id, function(err, doc){
        if (!doc) return next(new NotFound('Document not found'));
        console.log(doc);
        doc.remove(function(){
            res.redirect('/tasks');
        });
    });
});

module.exports = router;