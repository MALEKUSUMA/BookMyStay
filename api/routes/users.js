import express from "express";



import {
    
    deleteUser,
    getUser,
    getUsers,
    updateUser,
  } from "../controllers/user.js";
import { verifyToken, verifyUser,verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

// router.get("/checkauthentication",verifyToken,(req, res,next) => {
//     res.send("hello user,you are logedin")
// })

// router.get("/checkuser/:id",verifyUser,(req, res,next) => {
//     res.send("hello user,you are logedin and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req, res,next) => {
//     res.send("hello Admin,you are logedin and you can delete all accounts")
// })
//update

router.put("/:id",verifyUser,updateUser);

//delete
router.delete("/:id",verifyUser,deleteUser);

    //gett
router.get("/find/:id",verifyUser,getUser)

        //get all
 router.get("/",verifyAdmin,getUsers)

export default router