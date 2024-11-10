import connection from "../config/connDB";

const getAll_Users = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM `users`')
    return rows
}

const getUser_By_Username = async (username) => {
    const [rows, fields] = await connection.execute('SELECT * FROM `users` WHERE username=?', [username])
    return rows
}





const insertUser = async (username, password, fullname, sex, address, email) => {
    await connection.execute('INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?,?,?,?,?,?)', [username, password, fullname, sex, address, email])
}

const updateUser = async (fullname, sex, address, email, username) => {
    await connection.execute(
        'UPDATE users SET fullname = ?, address = ?, sex = ?, email = ? WHERE username = ?',
        [fullname, address, sex, email, username]
    );
}

const deleteUser = async (username) => {
    await connection.execute('DELETE FROM users WHERE username = ?', [username])
}
export default { getAll_Users, getUser_By_Username, insertUser, updateUser, deleteUser }