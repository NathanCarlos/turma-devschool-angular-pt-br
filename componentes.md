# Aula de Componentes Angular!

Para a essas aula vamos abordar os seguintes tópicos:
- O que é um componente no angular;
- Como gerar um componente com o cli utilizando ng generate;
- Exercícios de fixação;

# O Que é Um Componente Angular?

Os componentes são classes escritas em TypeScript que recebem o decorator @Component, assim como mostra a imagem abaixo. 

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/componentes/exemplo-componente.PNG?raw=true)

Quando analisamos a estrutura de um componente, podemos dividi-lo nas seguintes partes:

-   Metadata: são definições que iremos informar ao Angular que a nossa classe é um Component, por meio de decorators, nesse caso  @Component
-   Classe: assim como em qualquer linguagem de programação que utiliza o paradigma da orientação a objeto, possui suas propriedades e métodos

Um Component é um tipo de classe existente em uma aplicação Angular, eles são identificados com o decorator  @Component. Neste decorator existem algumas propriedades mais utilizadas como:  selector,  templateUrl  e  style. Vamos especificá-las:

-   **selector**  é como identificamos o nosso componente. Para todo o componente existe um elemento único associado que permite que ele seja adicionado em um documento HTML. Nesse caso, o nome do elemento desse componente é  conteúdo principal e deve ser escrito como  `<app-conteudo-principal></app-conteudo-principal>`
-   **TemplateUrl**  é o nome do documento HTML que será a parte visual do componente. Nele podemos ter código em HTML juntamente com todos os bindings e diretivas necessários para a exibição do componente no navegador
-   **Template**  também usado para descrever a parte visual do componente, porém nesse caso podemos fornecer código HTML "hard coded", como texto
-   **styleUrl**  é onde informamos quais folhas de estilo contêm o código CSS/SCSS que será aplicado ao template do componente.

Com isso podemos concluir que a estrutura de um componente Angular deve ser formada por esses três elementos, template (HTML), estilo (CSS) e classe (TypeScript). Essas partes são organizadas em arquivos separados e unidas nos metadados do componente através do decorator  @Component.

# Como Gerar um Componente Com o CLI
Para gerar um componente, primeiro precisamos começar a estruturar as pastas para estudar angular com boa prática, utilize o projeto criado na aula anterior que encontra-se neste [link](https://github.com/NathanCarlos/turma-devschool/blob/main/aula1-2.md) e crie duas pastas dentro de src>app, uma chamada shared que é onde vamos colocar os componentes que serão compartilhados com toda aplicação para não precisarmos ficar repetindo html e css, e outra chamada home que é onde vamos criar os componentes que compõem uma página chamada home.
A estrutura deve ficar assim:

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/componentes/pastas-home-shared.PNG?raw=true)

Aproveitando que estamos criando as pastas que ficarão os códigos, crie também mais duas pastas dentro da **home**: **components** e **pages**. Crie também mais uma pasta dentro de **shared** chamada **components**, a estrutura final deve ficar assim:

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/componentes/components-pages.PNG?raw=true)

Agora que finalmente já temos a estrutura de pastas criada, podemos dar continuidade gerando os componentes com boa prática.
Podemos criar o nosso primeiro componente através do angular cli(linha de comando).
Para gerar um componente é bem simples, iremos utilizar o comando **ng g c shared/components/header** onde **ng g c** é o comando do angular client que é abreviação para **ng generate component** e **shared/components** é o caminho onde o angular vai gerar o componente e **header** é o nome do nosso componente. Uma outra alternativa seria utilizar **ng g c header**, porém ele iria criar na pasta app do projeto.
Seguindo a primeira alternativa de comando, o console deverá ficar assim:

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/componentes/ng-g-c-header.PNG?raw=true)

Ao rodar este comando, note que 4 arquivos foram criados para esse novo componente, e que o arquivo **header.component.ts** ficou desta forma:

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/componentes/seletor-header.PNG?raw=true)

Note que o **templateUrl** está recebendo o caminho do arquivo header.component.html que foi gerado pelo angular cli, note também que o **styleUrls** está apontando para o header.component.scss que é o arquivo de estilos desse componente.
Dentro do arquivo **header.component.html** temos o texto "header works!" que foi gerado automaticamente pelo angular cli, esse texto é colocado para sabermos se o componente está sendo carregado corretamente.
Na última linha que foi exibida no console ao rodarmos o comando para gerar o componente, está indicando que o arquivo app.module.ts foi atualizado, isso aconteceu porque quando criamos um componente, para podemos utiliza-lo em um módulo precisamos importar ele na propriedade **declarations** do **@NgModule**, vamos ver um pouco melhor sobre módulos na próxima aula.
Ao rodar o projeto com o ng serve e abrir o localhost:4200, você vai notar que nada mudou na interface, isso acontece porque o nosso componente ainda não foi utilizado em nenhum momento dentro do componente principal que está sendo carregado, ou seja, dentro do app.component.html. Para conseguirmos fazer o nosso componente header ser carregado vamos precisar atualizar o app.component.html e importar o seletor "app-header" como uma tag html dentro do app.component.html, então esse arquivo deverá ficar da seguinte forma:

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/componentes/app-header-tag.PNG?raw=true)

Agora sim! Ao rodar o ng serve você verá este resultado na tela:

![enter image description here](https://github.com/NathanCarlos/turma-devschool/blob/main/imagens-ilustrativas/componentes/header-works.PNG?raw=true)

Pronto! O nosso primeiro componente compartilhado, além de ter sido criado já foi importado no componente principal. Na aula vamos explorar um pouco mais essa parte dos componentes, então é recomendável que antes de realizar os exercícios aguarde a aula!

## Lista de exercícios
Para conseguir realizar a lista de exercícios aguarde a aula para um entendimento melhor, porém se quiser se desafiar a fazer tudo bem :)

Exercício 1) Crie um componente chamado "header" que será o menu de navegação da sua aplicação.
Obs: Utilize o ng generate

Exercício 2) Crie um componente do conteúdo principal da sua aplicação, o nome você pode escolher e no app.component.html ajuste para carregar seu nav e seu conteúdo principal.

Exercício 3) Crie um componente de rodapé e ajuste o seu app.component para carregar nav, conteúdo principal e rodapé.

Exercício 4) Crie um componente que contenha 2 parágrafos e 1 título do site https://www.lipsum.com/ e carregue ele no seu app.component também.

Exercício 5) Estilize o cabeçalho e rodapé do seu site.

# Fontes e Referências
https://www.devmedia.com.br/angular-components-conhecendo-e-configurando-no-seu-projeto/40734
