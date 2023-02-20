import express from "express"

//import all the controllers
import { createUser, getAllUsers, getUserInfoById } from "../controllers/user.controller.js"

const router = express.Router();