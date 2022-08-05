import { Router } from 'express';
import studentsRoutes from './students.routes';
import helloWorldRoutes from './hello-world.routes';
import tasksRoutes from './tasks.routes';
import productRoutes from './products.routes';

const router = Router();

router.use('/students', studentsRoutes);
router.use('/hello-world', helloWorldRoutes);
router.use('/tasks', tasksRoutes);
router.use('/products', productRoutes);

export default router;