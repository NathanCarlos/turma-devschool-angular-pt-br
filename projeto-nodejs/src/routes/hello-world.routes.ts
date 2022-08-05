import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log('teste');
    res.send({ message: 'Hello World' });
});

router.get('/all-hello-worlds', (req: Request, res: Response) => {
    res.send([
        { message: 'Hello World' },
        { message: 'Hello World' },
        { message: 'Hello World' },
        { message: 'Hello World' }
    ]);
});

export default router;