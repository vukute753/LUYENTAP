import express from 'express'
import getHome from '../controllers/homeController'
import getAbout from '../controllers/aboutController'
import getContact from '../controllers/contactController'
import userController from '../controllers/userController'

const router = express.Router()


router.get('/', getHome)

router.get('/about', getAbout)

router.get('/contact', getContact)

router.get('/formAdd_User', userController.getFormAdd_User)

router.get('/listUsers', userController.getList_Users)

router.get('/formUpdate_User/:username', userController.getFormUpdate_User)




router.post('/addUser', userController.addUser)

router.post('/updateUser/:username', userController.updateUser)

router.get('/deleteUser/:username', userController.deleteUser)

// router.get('/listUsers', getlist_Users)

export default router