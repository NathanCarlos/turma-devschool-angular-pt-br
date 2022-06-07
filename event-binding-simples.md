
# Aula de Event Binding Angular!

Para a essas aula vamos abordar os seguintes tópicos:
- O Que é Event Binding;
- Exercícios de fixação;

# O Que é Event Binding 

Com o event-binding enviamos valores vindos do template HTML para o componente(TypeScript), este tipo de binding é importantíssimo por ser utilizado para manipular os eventos e interações com o template e enviados para o componente.

E como o próprio nome diz, event binding, utilizamos de eventos para que possamos disparar os métodos ou expressões para atualizarmos a model(TS) a partir de um elemento Html presente no template.

Por exemplo, em um input field, podemos disparar um evento enquanto o campo está sendo preenchido:

><input (input)="model.skype=$event.target.value" type="text"/>

Em angular definimos o event binding utilizando os parenteses "(nomeevento)",  
ex.:para o evento "_OnChange_" utilizamos (change), para o "_OnClick_" temos (click) no caso (input) representa um evento que é capturado quando uma tecla é pressionada. desta forma podemos definir uma expressão para setar a model

> ex.:(input)="model.skype=$event.target.value"

ou podemos também chamar um método

> ex.:(input)="metodoHandler($event)"

e também transferir o valor do template para o componente através do objeto $event

# Fontes e Referências
http://blog.almeidapedro.com.br/post/2017/12/13/bindings-em-angular
