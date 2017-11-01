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
Podem ser declarados com a palavra reservada *Array* (com diversas possibilidades de tipagens) ou com colchetes *[ ]*.

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


## Configuração do projeto TypeScript para o VSCode
Criar um arquivo com o nome de *tsconfig.json* - tsconfig tem mais opções de configuração em sua documentação

```js
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
    }
}
```

Task gerada a partir do command pallet do VSCode
1. Generate task runner
2. Selecione a opção *Typescript - tsconfig.json*


### Ocultar arquivos
1. Preferences > Workspace settings
2. Será aberto um arquivo json para configurar - será gerado um arquivo *settings.json* sempre configurar o settings e nunca o default.
3. Escreva o comando *"files.exclude"* para configurar a task.

Exemplo:
```js
{
    "editor.wordWrap": "on",
    "window.zoomLevel": 0,
    "workbench.iconTheme": "vs-seti",
    "editor.renderIndentGuides": true,
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": true
    }
}
```

### Arquivo .map
O arquivo *.map* possui informações do debug, caso tenha algum erro, o erro estará indicado nesse arquivo.


## Classes
Para criar uma classe é necessário declarar apenas o seu nome.

Exemplo de uma classe typescript
```js
export class Animal {

    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}
```

Foi declarado uma classe *Animal*, com um atributo *nome*, um método construtor e o método nome que retorna uma string.

O *export* é necessário ser declarado junto da classe para definir o nível de seus acessos.

O private define o acesso da variável *nome*. O *constructor* cria o método *nome*.

Exemplo de um arquivo typescript que esta sendo criado para executar e passar via parâmetro para a classe animal.
```js
import {Animal} from './animal';

let a = new Animal('Bixano');
```


## Herança
A herança no *typescript* é definida com a palavra reservada *extends*. Ao declarar *extends*, a classe *Animal* tem métodos e atributos herdados de uma classe para outra.

Se um método da classe pai for subscrito na classe filha, você pode chamar o método da classe pai usando *super*.

```js
import {Animal} from "./animal";

export class Cavalo extends Animal {

    constructor (nome: string) {
        super(nome);
    }

    public mover(distanciaEmMetros: number): void {
        console.log("Galopando...");
        super.mover(distanciaEmMetros);
    }
}
```

## Interface
Uma interface também define a estrutura das classes que a implementam, mas a diferença em relação às Classes Abstratas é que todos os métodos e atributos devem ser implementados de alguma forma.

Declaração de uma interface
```js
export interface DaoInterface {
    tableName: string;

    insert(object: any): boolean;
    update(object: any): boolean;
    delete(id: number): any;
    find(id: number): any;
    findAll(): [any];
}
```

## Generics
Utilizado para tornar um componente, uma classe ou um método reutilizável, possibilitando de trabalhar uma mesma classe com uma variedade de tipos.

Para indicar que um *generics* será criado/utlizado é necessário declarar o tipo entre *< >*

```js
export interface DaoInterface<T> {
    tableName: string;

    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number): T;
    find(id: number): T;
    findAll(): [T];
}
```

O *T* é um tipo. Foi passado poderia ser qualquer tipo; carro, animal, pessoa, etc.


### Classe generics
A classe precisa ser declarada como *generics*, para isso basta passar o tipo.

```js
export class Dao<T> implements DaoInterface<T> {

}
```