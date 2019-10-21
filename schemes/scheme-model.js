const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    // addStep
}

function find(){
    return db('schemes')
};    

function findById(id){
    return db('schemes')
        .where({id})
};   

function findSteps(id){
    return db('schemes AS sc')
        .join('steps AS st', {'sc.id': 'st.scheme_id'})
        .select( 'scheme_name', 'step_number', 'instructions')
        .where({scheme_id: id})
        .orderBy('step_number')
};   

function add(schemeData){
    return db('schemes')
        .insert(schemeData)
};   

// function addStep(stepData, id){
// }; 

function update(changes, id){
    return db('schemes')
        .update(changes)
        .where({id})
};   

function remove(id){
    return db('schemes')
        .del()
        .where({id})
};   