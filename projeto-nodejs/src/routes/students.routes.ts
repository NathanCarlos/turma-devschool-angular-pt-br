import { Router, Request, Response } from 'express';
import { Student } from '../models/student.model';

// GET(Buscar), POST(Criar), PUT(Atualizar), DELETE

const router = Router();

const students: Array<Student> = [
    {
        id: 1,
        name: 'Nathan',
        email: 'nathan@gmail.com',
        password: '123456',
        monthlyPayment: 350,
        inclusionDate: new Date()
    },
    {
        id: 2,
        name: 'Augusto',
        email: 'augusto@gmail.com',
        password: '123456',
        monthlyPayment: 250,
        inclusionDate: new Date()
    },
    {
        id: 3,
        name: 'Palloma',
        email: 'palloma@gmail.com',
        password: '123456',
        monthlyPayment: 450,
        inclusionDate: new Date()
    }
];

router.get('/', (req: Request, res: Response) => {
    res.status(200).send(students);
});

router.get('/id/:id', (req: Request, res: Response) => {
    const student = students.find((student) => student.id === parseInt(req.params.id));
    if(student) {
        res.status(200).send(student);
    } else {
        res.status(404).send({ message: 'Estudante não encontrado!' });
    }
});

router.post('/create', (req: Request, res: Response) => {
    const nextId = (students[(students.length - 1)].id + 1);
    const student = req.body;
    student.id = nextId;
    student.inclusionDate = new Date();
    students.push(student);
    res.status(201).send(student);
});

router.put('/update/:id', (req: Request, res: Response) => {
    const partialStudent = req.body;
    const student = students.find((student) => student.id === parseInt(req.params.id));
    if(!student) {
        res.status(404).send({ message: 'Estudante não encontrado, não foi possível fazer a atualização!' });
    } else {
        student.name = partialStudent.name;
        student.email = partialStudent.email;
        res.status(200).send(student);
    }
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const studentIndex = students.findIndex((student) => student.id === parseInt(id));
    if (studentIndex === -1) {
        res.status(404).send({ message: 'Estudante não encontrado, não foi possível fazer a exclusão!' });
    } else {
        students.splice(studentIndex, 1);
        res.status(200).send({ message: 'Estudante excluído com sucesso!' });
    }
});

export default router;