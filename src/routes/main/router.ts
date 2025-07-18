import { Router } from "express";

import modulesRoutes from "../moduleRoutes";
import gridRoutes from "../gridRoutes";
import taskRoutes from "../taskRoutes";

const router = Router()


router.use('/modules', modulesRoutes)
router.use('/grids', gridRoutes)
router.use('/tasks', taskRoutes)

export default router