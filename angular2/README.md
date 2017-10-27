# Angular2 e Typescript

## Documentação oficial
__[https://angular.io/](https://angular.io/)__

__[https://github.com/angular/angular](https://github.com/angular/angular)__

## Características
* Roda diretamente do servidor
* Facilidade de SEO
* Angular CLI
* Mobile Toolkit
* Augury
* Nativescript e Ionic 2

## Benefícios
* Torna a organização do código de fácil leitura para códigos de grande complexidade, graças aos módulos, namespaces além do forte apoio ao OOP.
* Devido à sua tipagem estática, o código escrito em TypeScript é mais previsível e é mais fácil de poder depurar o código;
* Typescript permite que no momento que realiza a etapa de compilação do Javascript que retorna todos os erros antes que eles atinjam em tempo de execução evitando assim “quebrar” o código antes que seja executado;

## Requisitos
Necessário instalar o __[Node.js](https://nodejs.org/en/)__ e o npm (npm vem instalado com node).

Recomendado instalar o node na raiz de seu disco.

---

# Typescript
__[Site oficial](https://www.typescriptlang.org/)__

Typescript é um superset de JavaScript que compila para JavaScript puro possibilitando a leitura do js em qualquer navegador.

Tem como grande característica uma forte tipagem, com essa inferência de tipo é possivel reduzir o tempo de compilação.

O mais utilizado atualmente é o ES6.


## Instalação
Digite o seguinte comando para instalar o typescript:
```js
npm install -g typescript
```

Para saber a versão do Typescript
```js
tsc -v
```


## Compilação
Pode ser compilado através de linha de comando, via IDE e editores de texto ou via task runners.

Typescript
```js
tsc nomedoarquivo.ts
```

Node
```js
node nomedoarquivo.js
```


## Tipos
Os tipos declarados no typescript podem ser:

### String
É basicamente um texto.

```js
var fullname: string = "Matheus Pessoa";
```

### Number
Números flutuantes/float

```js
var age: number = 21;
```

### Boolen
Verifica *true* or *false*

```js
let isActive: boolean = true;
```

### Arrays
Podem ser declarados com a palavra reservada *Array* (com diversas possibilidades de tipagens) ou com colchetes *[]*.

```js
var persons: string[] = ['Matheus', 'Luciano'];
```

```js
var persons: Array<string> = ['Matheus', 'Luciano'];
```

### Enum
Ideal para trabalhar com listas, ele nada mais é que um objeto, mas com a chave dos elementos definida de forma mais amigável.

```js
enum Color {Red=1, Green, Blue};
var c: Color = Color.Green;

console.log(c);
```

### Any
Ignora os tipos declarados, aceita qualquer coisa.

O tipo any é ideal para transpor um JavaScript existente para TypeScript evitando se preocupar com os erros na compilação, fazendo isso de forma gradual.

```js
var notSure: any = 4;
notSure = "maybe a string";
notSure = false; // ok é um boolean
```

### Void
Contrário do any, muito usado em funções, para informar que ela não retorna nada.

```js
function warnUser(): void {
    alert("Mensagem de aviso");
}
```

### Retorno de dados
Pode informar um tipo para o retorno de funções, isso pode ser feito com qualquer um dos data types informados aqui.

```js
function isChecked(): boolean {
    return true;
}
```
