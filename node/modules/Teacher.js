var User = require('./User');
function Teacher(id,name,age){
    User.apply(this,[...arguments]);
    this.teach = res => {
        res.write(`${this.name}讲课`);
    }
}
module.exports = Teacher;