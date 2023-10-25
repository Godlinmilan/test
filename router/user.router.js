const express = require('express')
const router = express.Router();
const uservalidation = require('../middleware.js/validation/user.validation')
const userController = require('../controller/userorg.controller')

router.post('/sendmail-otp', userController.sendotpbyemail)
router.post('/phonenumber-otp', userController.phonenumberotp)
router.post('/forgotuser', userController.forgotuser)
router.post('/forgotusermobile', userController.forgotusermobile)
router.post('/verifyuserotp', userController.verifyuserotp)
router.post('/verifyuserupdatepassword', userController.verifyuserupdatepassword)
router.put('/updatepassword', userController.updatepassword)
router.put('/updatemobilepassword', userController.updatemobilepassword)
router.post('/payment-completed', userController.paymentCompletedEmailTrigger)
router.post('/paymentrefundamount', userController.paymentRefundEmailTrigger)
router.post('/reportemail',userController.reportEmailTrigger)
router.post('/quick-sms', userController.quickDonateSms)
router.post('/project-announcement', userController.announcement)
router.post('/userdeactivated',userController.userDeactivatedStatus)
module.exports = router