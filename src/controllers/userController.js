import { render } from "ejs"
import userModels from "../models/userModels"

// Get

const getFormAdd_User = (req, res) => {
    res.render('formAdd_User')
}

const getFormUpdate_User = async (req, res) => {
    const username = req.params.username
    let row = await userModels.getUser_By_Username(username)
    let rows = row.length > 0 ? row[0] : {}
    res.render('formUpdate_User', {
        detailUser: rows
    })
}

const getList_Users = async (req, res) => {
    let rows = await userModels.getAll_Users()
    res.render('listUsers', {
        data: { listUsers: rows }
    })
}



// Insert, Update, Delete
const addUser = async (req, res) => {
    let role = 0
    let { username, password, fullname, sex, address, email } = req.body

    await userModels.insertUser(username, password, fullname, sex, address, email)

    console.log('body: ', req.body)
    console.log('<br>')
    console.log('taikhoan:', username, 'matkhau:', password, 'hoten:', fullname, 'gioitinh:', sex, 'diachi:', address, 'email:', email)
    res.send("Thêm thành công")
}


const updateUser = async (req, res) => {
    const username = req.params.username
    let { fullname, sex, address, email } = req.body
    console.log(username)
    await userModels.updateUser(fullname, sex, address, email, username)
    res.send('Update thành công')
}

const deleteUser = async (req, res) => {
    const username = req.params.username
    await userModels.deleteUser(username)
    res.send('Xóa thành công')
}
export default { getFormAdd_User, getList_Users, addUser, updateUser, deleteUser, getFormUpdate_User }