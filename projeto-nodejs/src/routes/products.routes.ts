import { Router, Request, Response } from 'express';
import { Product } from '../models/product.model';

const router = Router();

const products: Array<Product> = [
    {
        id: 1,
        descricao: 'Notebook S51',
        imagem: 'https://images.samsung.com/is/image/samsung/br-notebook-style-s51-np730xbe-kp1br-np730xbe-kp1br-fronttitanumsilver-185313138?$720_576_PNG$',
        preco: 5000,
        quantidade: 5,
        disponivel: true,
    },
    {
        id: 2,
        descricao: 'Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,” Full HD Windows 10',
        imagem: 'https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-e30-intel-core-i3-4gb-1tb-156-full-hd-windows-10/magazineluiza/135258300/44bf629ad1472f3a86f5ae8b55ed0672.jpg',
        preco: 3500,
        quantidade: 3,
        disponivel: true,
    },
    {
        id: 3,
        descricao: 'Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10',
        imagem: 'https://acerstore.vteximg.com.br/arquivos/ids/157506-760-760/A514-53-54_SSD_01.jpg?v=637396805695270000',
        preco: 4000,
        quantidade: 2,
        disponivel: true,
    },
    {
        id: 4,
        descricao: 'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
        imagem: 'https://d3bkgvrq5dqryp.cloudfront.net/Custom/Content/Products/34/17/3417_product-00079815_m39_637400210574011388',
        preco: 3000,
        quantidade: 0,
        disponivel: false,
    },
    {
        id: 5,
        descricao: 'Notebook ASUS VivoBook X543UA-GQ3157T Cinza Escuro',
        imagem: 'https://www.lojaasus.com.br/media/catalog/product/cache/e62f984c1b34771579d59f0076d196f0/0/0/00asus_laptop_x543_cinza_escuro_13_1_8.png',
        preco: 3350,
        quantidade: 2,
        disponivel: true,
    }
];

router.get('/all', (req: Request, res: Response) => {
    res.send(products);
});

router.get('/:id', (req: Request, res: Response) => {
    res.send(products.find((product) => product.id === parseInt(req.params.id)));
});

router.post('/create', (req: Request, res: Response) => {
    const product = req.body;
    product.id = (products[(products.length - 1)].id + 1);
    products.push(product);
    res.status(201).send({ message: 'Produto criado com sucesso!' });

});

router.put('/update/:id', (req: Request, res: Response) => {
    const product = req.body;
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if(productIndex === -1) res.status(404).send({ message: 'Produto não encontrado para fazer atualização!' });
    products[productIndex] = product;
    res.status(200).send({ message: 'Produto atualizado com sucesso!' });
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((product) => product.id === id);
    if(productIndex === -1) res.status(404).send({ message: 'Produto não encontrado para fazer a remoção!' });
    products.splice(productIndex, 1);
    res.status(200).send({ message: 'Produto excluído com sucesso!' });
});

export default router;