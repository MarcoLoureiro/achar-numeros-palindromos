import { Router} from "express";
import * as PsController from '../controllers/psController';

const router = Router();

router.get('/',PsController.home);


export default router;