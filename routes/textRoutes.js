const express=require('express')
const { textUserController } = require('../controllers/textController')

// router Object
const router=express.Router()

// router GET | POST | UPDATE | DELETE
router.get('/test-user',textUserController)


// export
module.exports=router
