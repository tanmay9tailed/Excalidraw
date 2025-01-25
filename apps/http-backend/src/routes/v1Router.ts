import express from "express";
import authRoutes from "./authRoutes";
import { Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { CreateRoomSchema } from "@repo/common/config";

const router = express.Router();

router.use("/auth", authRoutes);
router.post("/create-room", authMiddleware, (req: Request, res: Response) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
});

export default router;
