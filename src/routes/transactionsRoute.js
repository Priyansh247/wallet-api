import express from "express";
import { sql } from "../config/db.js";
import {createTransactions, deleteTransactions, getTransactionsByUserId} from "../controllers/transactionsController.js"

const router=express.Router()

router.get("/:userId",getTransactionsByUserId)

router.post("/",createTransactions)

router.delete("/:id", deleteTransactions)

router.get("/summary/:userId", )

export default router