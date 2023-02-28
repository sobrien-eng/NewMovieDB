class User {
    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
    }

    static create(newUser, result) {
        //_query(
            "INSERT INTO users SET ?", newUser, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("created user: ", { id: res.insertId, ...newUser });
            result(null, { id: res.insertId, ...newUser });
        //);
    }
    }
    static updateById(id, user, result) {
        //_query(
            "UPDATE users SET password = ?,  WHERE id = ?",
            [user.password, id],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                    return;
                }
                if (res.affectedRows == 0) {
                    // not found User with the id
                    result({ kind: "not_found" }, null);
                    return;
                }
                console.log("updated user: ", { id: id, ...user });
                result(null, { id: id, ...user });
            }
       // );
    }

    static delete(id, result) {
       // _query(
        "DELETE FROM users WHERE id = ?", id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("deleted user with id: ", id);
            result(null, res);
       // );
    }
    }
    static getAll(result) {
        let query = "SELECT * FROM users";
       // _query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("users: ", res);
            result(null, res);
       // });
    }
    static findByUsername(username, result) {
        let query = "SELECT * FROM users";

        if (username) {
            query += ` WHERE username LIKE '%${username}%'`;
        }

       // _query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("users: ", res);
            result(null, res);
       // });
    }
    static findById(id, result) {
       // _query(
        `SELECT * FROM users WHERE id = ${id}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found user: ", res[0]);
                result(null, res[0]);
                return;
            }

            // not found User with the id
            result({ kind: "not_found" }, null);
       // );
    }
    }
    // static findByName(name, result) {

    //     _query(`SELECT * FROM users WHERE username = ${username}`, (err, res) => {
    //         if (err) {
    //             console.log("error: ", err);
    //             result(err, null);
    //             return;
    //         }

    //         if (res.length) {
    //             console.log("found user: ", res[0]);
    //             result(null, res[0]);
    //             return;
    //         }

    //         result({ kind: "not_found" }, null);
    //     });
    // }

    static getAllAdmin(result) {
        //sql.query(
            "SELECT * FROM users WHERE admin=true", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("users: ", res);
            result(null, res);
        //);
    }
    };

    

}
export default User;

