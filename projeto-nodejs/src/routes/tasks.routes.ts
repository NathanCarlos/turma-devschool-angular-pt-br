import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send([
        { id: 1, descricao: 'colocar lixo para fora' },
        { id: 1, descricao: 'colocar lixo para fora' }
    ]);
})

router.get('/all', (req: Request, res: Response) => {
    res.send({ id: 1, descricao: 'colocar lixo para fora' });
});

export default router;