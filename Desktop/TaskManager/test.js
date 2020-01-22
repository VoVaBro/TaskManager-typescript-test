// const email= 'vbr@gmail.com'
// const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
// console.log(reg.test(email))

/*
const fs = require('fs')
const path = require('path');
const dir = path.resolve('./uploads')

function genFilesLength(folder) {
    var a = [];
    function bar() {
        let files = fs.readdirSync(folder)
        a.push(files.length)
        return a
    }
    return bar;
}

const genId = genFilesLength(dir);

const setId = genId()

const fileId = () => {
    if (setId[0] == 0) {
        return 1
    } else {
        return setId[0]+1
    }
}

//////

const getId = () => {
    let data = fs.readFileSync('./uploads/tasks.json', 'utf-8')
    return JSON.parse(data)
 }
 
 const id = getId()
 
 const setId = (taskId) => {
     if (taskId == 0){
         return 1
     } else {
         taskId + 1
     }
 }
 
 
 app.get('/', (req, res) => {
 
     const task = [{
         "id": `2`,
         "username": `jhon`,
         "email": `vbr@"gmail".com`,
         "text": `hello`,
         "status": `1`
     }]
 
     fs.readFile('./uploads/tasks.json', 'utf-8', (err, data) => {
 
 
 
         const res = JSON.parse(data)
 
         const add = res.concat(task)
 
         fs.writeFile('./uploads/tasks.json', JSON.stringify(add, null, 2), 'utf-8', (err) => {
             if (err) {
                 throw err
             }
         })
     })
 })
 */


// const jwt = require('jsonwebtoken');

// const genJwtToken = userId => {
//     const payload = {
//         id: userId,
//         type: 'access'
//     }
//     const secret = 'TaskManagerApp'

//     const options = {
//         expiresIn: '24h'
//     }

//     const token = jwt.sign(payload, secret, options)

//     return token;

    
// }
// let token = genJwtToken(1)
// console.log (jwt.decode(token))

