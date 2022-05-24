
# Aula de Módulos e Data Binding Angular!

Para essa aula vamos abordar os seguintes tópicos:
- O que são módulos no Angular;
- O que é data binding(One-way-binding) e como utilizar;
- Exercícios de fixação;

# O Que São Módulos no Angular?

Um **module** é um mecanismo para agrupar **components, directives , pipes e services** relacionados, de forma a combinar com outros módulos para criar um aplicativo. Uma aplicação angular pode ser pensada como um quebra-cabeça onde cada peça (ou cada módulo) é necessária para poder ver a imagem completa.

O módulo é composto  por uma classe e o decorator @NgModule como mostra a imagem abaixo.

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/modulos-e-data-binding/imagem-exemplo-modulo.PNG?raw=true)

Um Módulo é um tipo de classe existente em uma aplicação Angular, eles são identificados com o decorator  @NgModule. Neste decorator existem algumas propriedades mais utilizadas como:  declarations, imports, providers e bootstrap como mostra a imagem abaixo.
![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/modulos-e-data-binding/imagem-exemplo-parametros-ng-module.PNG?raw=true)

Vamos entender o que é cada um deles, abaixo:

-   **declarations**: é onde colocamos todos os componentes que pertencem a esse módulo e estão disponíveis para uso;
- **imports**: é onde importamos os módulos que vamos utilizar para complementar a construção de nossas páginas ligadas a este módulo. Por exemplo, se eu quiser criar um formulário, posso importar o módulo **FormsModule** que é nativo do Angular e me auxilia na construção do formulário, como mostra a imagem abaixo;

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/modulos-e-data-binding/forms-module-exemplo.PNG?raw=true)

- **providers**: é onde colocamos os serviços que serão utilizados pelos componentes do módulo, como por exemplo um serviço que busca/cadastra usuários no back-end;
- **bootstrap**: é onde informamos qual componente será inicializado primeiro quando o módulo for carregado.

Com base nessas informações que vimos acima, vale lembrar que nem todos os atributos passados para o decorator @NgModule são obrigatórios, quando geramos um módulo criado através do angular CLI com o comando **ng generate module**, ele fica só com o **declarations** e **imports** que são necessários pois precisamos informar quais componentes pertencem àquele módulo e quais módulos estamos utilizando para construção de componentes mais otimizados. A imagem abaixo é de um módulo gerado através do comando **ng g m home**.

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/modulos-e-data-binding/exemplo-modulo-com-cli.PNG?raw=true)

Além dos atributos(Metadados) listados acima, temos mais alguns que são utilizados pelo NgModule, e eles são: **exports, schema, jit, id**  e etc...

# O Que é Data Binding e Como Utilizar Através de Intorpolação
Ligação de dados ou Data Binding é uma técnica geral que une duas fontes de dados/informações e as mantém em sincronia em um processo que estabelece uma conexão entre UI (interface de usuário) da aplicação e a lógica de negócio.

Agora que sabemos o que é data binding podemos conhecer quais são os tipos de ligação de dados que podemos trabalhar no Angular.

## Interpolação

Utilizado para exibir uma propriedade do componente(Typescript) ao seu respectivo template HTML utilizando chaves duplas. É possível exibir vários tipos de dados, como por exemplo, textos, números, data, matrizes, listas, etc.

Este tipo de binding consiste em uma ligação unidirecional (One-way binding) sempre seguindo o caminho do componente para os elementos HTML.

**Exemplos:**

conteudo-principal.component.ts

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/modulos-e-data-binding/exemplo-interpolacao-one-way-binding.PNG?raw=true)

conteudo-principal.component.html

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/modulos-e-data-binding/exemplo-interpolacao-one-way-binding-html.PNG?raw=true)

Esse será o resultado quando o componente for exibido no navegador:

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/modulos-e-data-binding/resultado-interpolacao.PNG?raw=true)

## Lista de exercícios
Para conseguir realizar a lista de exercícios aguarde a aula para um entendimento melhor, porém se quiser se desafiar a fazer tudo bem :)

Exercício 1) Crie um projeto angular com o ng new para gestão de colaboradores.

Exercício 2) Crie um módulo para services, pipes e components compartilhados e um módulo para feature de colaboradores.

Exercício 3) Com o projeto do exercício anterior, crie 3 componentes, 1 header, 1 footer, 1 componente para listagem dos cadastros de colaboradores. O header e footer serão compartilhados entre a aplicação, então crie na pasta shared>components, já a listagem de colaboradores crie em features/colaboradores.

Exercício 4) Com o projeto do exercício anterior, estilize de forma básica o header e footer.

Exercício 5) Com o projeto do exercício anterior, no componente de listagem de colaboradores, crie uma variável que vai receber a lista de colaboradores abaixo, e faça a listagem na tela com data-binding através de interpolação.
>colaboradores = [
        {
            id: 1,
            nome: 'Nathan Carlos',
            salario: 7000,
            cargo: 'Dev Pl'
        },
        {
            id: 2,
            nome: 'David Carlos',
            salario: 3000,
            cargo: 'Dev Jr'
        },
        {
            id: 3,
            nome: 'Mateus Augusto',
            salario: 3500,
            cargo: 'Dev Jr'
        },
        {
            id: 4,
            nome: 'Alberto Silva',
            salario: 10000,
            cargo: 'Dev Sr'
        },
        {
            id: 5,
            nome: 'Rogerio Souza',
            salario: 9000,
            cargo: 'Dev Sr'
        },
        {
            id: 6,
            nome: 'Gabriel Miguel',
            salario: 9500,
            cargo: 'Dev Sr'
        },
        {
            id: 6,
            nome: 'Alan Jhonnes',
            salario: 11000,
            cargo: 'Arquiteto'
        }
    ]


Exercício 6) No app.component.html utilize nessa ordem: header, listagem, footer.

Exercício 7) No app.component crei uma tag H1 e interpole um título de uma variável criada no typescript.

Exercício 8) No app.component crie uma div e exiba as seguintes informações do objeto do colaborador abaixo:
>{
    id: 7,
    nome: 'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev Pl'
}

Obs: para interpolar os valores desse objeto, não esqueça de criar uma vriável no typescript e atribuir o objeto.

# Fontes e Referências
http://www.macoratti.net/17/06/angcli_pag5.htm
http://www.macoratti.net/17/07/ang2_boots1.html
http://adrianocsilva.com.br/blog/data-bindings-no-angular
