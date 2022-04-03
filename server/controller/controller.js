var Studentdb = require('../model/model');

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Empty message check"});
        return;
    }

    const student = new Studentdb({
        name: req.body.name,
        email: req.body.email,
        status: req.body.status
    })

    student
        .save(student)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Error has occured"
            });
        });

}

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Studentdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "No student with ID: "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error getting ID:" + id})
            })

    }else{
        Studentdb.find()
            .then(student => {
                res.send(student)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Unable to fetch info" })
            })
    }

    
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Studentdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update student with ${id}. Student not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error updating student information"})
        })
}

exports.delete = (req, res)=>{
    const id = req.params.id;

    Studentdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot delete student with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Student was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}