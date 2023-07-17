import { Router } from 'express';
import appointmentsRouter from './appointment';
import therapistRouter from './therapist';
import adminRouter from './admin';
import userRouter from './auth';
import { findClientSecret, s3upload } from '../controllers';
import { RolesForSelect } from '../types';
import { checkAuth } from '../middlewares';
import sessionRouter from './session';

const router = Router();
router.get('/', (req: any, res: any) => {
  console.log(req.token);
//   res.send(req);
});
router.use('/appointments', appointmentsRouter);
router.use('/therapists', therapistRouter);
router.use('/admin', adminRouter);
router.use('/auth', userRouter);
router.post('/payment-intent', checkAuth(RolesForSelect.user), findClientSecret);
router.use('/session', sessionRouter);
router.get('/upload-url', s3upload);

export default router;
