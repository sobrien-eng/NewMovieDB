const bcrypt = require('bcryptjs');
const fs = require('fs');
const csv = require('fast-csv');
let data = []
x = -1;
//npm i fast-csv bcryptjs

//uncomment all commented code to mass push to database
fs.readdir(__dirname + '\\user data', (err, files) => {
   // files.forEach(
       // fileName => {
            fs.createReadStream(__dirname + '\\user data\\' + "users1.csv")//fileName
        .pipe(csv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', row => {
            data.push(row)
        })
        .on('end', () => {
            data.forEach(user =>{
                bcrypt.hash(user.password, 10, (err, hash) => {
                    console.log(hash);
                    user.password = hash;
                    x++
                    if(x >= 999){
                        console.log(data)
                    }
                })
            })
        });
}
);
console.log(data);

