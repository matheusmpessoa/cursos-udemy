# Entendendo e documentando REST/RESTful APIs

## API
Application Programming Interface (Interface de programação de aplicativos)

Conjuntos de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseada na web. É criado uma interface para fazer algo.

Uma boa analogia é a mesa do DJ, pois a mesa do DJ tem botões para ele trabalhar, os botões seriam as rotinas disponiveis do "sistema".

O conceito na prática é aplicado criando uma API e sendo utilizado por um Website, native apps ou social integration.

## Resource
Na tradução seriam "Recursos".

Resource são coisas que podem ser manipuladas através de um *id*

Exemplo:
```
recurso: Usuario
id: www.meusite.com/user
```

A nomeação de um recurso é sempre formada por um substantivo, nunca um verbo, pois é sempre algo manipulavel.

## URI 
Uniform Resource Identifier (Identificador Uniforme de Recursos)

Cadeia de caracteres compactada usada para identificar ou denominar um recurso na internet.

## URL
Uniform Resource Locator (localizador padrão de recursos)

É o endereço de um recurso disponivel em uma rede. URL é mais completo que uri.
```
recurso: Usuario
id: http://meusite.com/user
```

## URN
Uniform Resource Name (Nome uniforme de recurso)

É um tipo de URI que usa o URN Scheme

Tem por objetivo a identificação unica do recurso em qualquer local independente da sua localização. A URN necessita de um "resolvedor".


## IRI
Internationalized Resource Identifier (Identificador de recursos internacionais)

Utiliza caracteres diferentes, contem caracteres unicode.


## REST
Transferencia de Estado Transicional

Tem como origem a tese de um PHD. 

Foram formulados constraints (regras).

Conjunto de regras:

1. Cliente-servidor separando as diferentes formas de um servidor.
    Front-end seria o cliente.
    Back-end seria o servidor.

    Permite a evolução e escalabilidade destas responsabilidades de forma independente.

2. Stateless
    Todas as requisições precisam ser tradadas pelo servidor. Cada requisição não deve ter ligações com requisições anteriores ou futuras.

    O servidor deve tratar unicamente.

3. Cache
    Permição de cache para evitar um grande uso do servidor.

4. Interface uniforme
    Tudo deve ficar no padrão. Deve-se criar uma padronização no sistema.

    Elementos devem ser considerados:
        - Recursos
        - Mensagens autodescritivas

5. Sistema em camadas
    A ideia é colocar no meio do caminho elementos que sejam transparentes para seus clientes.
    
    Distribui para cada servidor tal requisição.
    
6. Código sob-demanda
    Única constraint opcional.
    
    A ideia é aumentar a flexibilidade, por exemplo, um código JavaScript que só é baixado quando uma determinada página é carregada. 
    
    É uma prática opcional pois reduz a "visibilidade".
    
--- 

## Quando utilizar REST ou RESTful
Quando estamos discutindo sobre o modelo e sobre características que vistas anteriormente, é necessário utilizar o termo REST, já no momento em que você estiver falando de uma implementação que usa essas mesmas características, você deve usar RESTful.

Rest nada mais é que um conjunto de melhores práticas denominadas constraints. Ou seja, se temos uma API que não segue os principios REST, teremos apenas uma API HTTP.

Representações são o formato que a informação é devolvida (JSON ou XML).
São devolvidos por JSON (JavaScript Object Notation), com uma chave e um valor.
XML (eXtensible Markup Language) não usa chave e valor, utiliza tags.

## Diferenças entre REST e SOAP
REST (Representational State Transfer) vs SOAP (Simple Object Acess Protocol)

REST é um modelo arquitetural e SOAP é um protocolo.

REST trabalha com requisições HTTP. O SOAP utiliza envelopamento HTTP, utilizando chamadas procedurais.

REST suporta vários tipos de formato (JSON, XML e YAML). SOAP utiliza somente XML.

---

## CURL
cURL é uma ferramenta de linha de comando para pegar ou enviar arquivos usando sintaxe de URL.

Uma requisição cURL é composta da palavra curl**, da URL a qual você quer acessar, e um conjunto de opções que permitem vocÇe modificar qualquer coisa na requisição que será enviada.

### Comandos de ação do CURL
* -H 
    É um atalho para Header. Essa opção permite adicionaar ou substituir campos do cabeçalho HTTP. 
    ```
    -h "Content-Type: application/json"
    ```

* -d
    É um atalho para data. É esta opção que vamos usar quando queremos enviar dados para o servidor. Ex com um payload 
    ```
    JSON: -d'{"name":"Jackson Pires"}'
    ```

* -i
    -include quando usamos esta opção, o cURL não mostrará apenas o corpo da resposta enviada do servidor, mas também o cabeçalho/header.

* -I
    -head traz apenas o cabeçalho. Esta opção diz ao cURL para fazer uma requisição do tipo HEAD que irá trazer apenas o cabeçalho/header.

* -x
    -request. Esta opção especifica qual o verbo HTTP que queremos usar. O padrão é o GET mas nós podemos usar também o POST, PUT, PATCH ou delete

* --help
    Para pedir ajuda ao curl.

Fake online REST API para teste e prototipação. __[https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)__

Como fazer requisição com o CURL:

Digite:
```
curl -i http://jsonplaceholder.typicode.com/users/1
curl -i http://jsonplaceholder.typicode.com/posts/1
```

## Analisando uma resposta HTTP
1. Start-line (Linha de início / Obrigatória)
    Divida em Request-line e Status-line.

2. Header Fields (Linha)
    Os header fields representam os metadados da requisição e resposta HTTP. Eles contém informações como a transferência de dados.
    Nesta resposta contém informações como Content-Type, Content-Length e x-powered-by.
    
    Obs: Quando um header-field possui x na frente o mesmo não é oficial. É possível utilizar mas o mesmo não é oficial. Existem controvérsias sobre esse header-field, o ideal é pesquisar sobre o header para conhecer melhor o que se trata.

3. Empty Line (Linha em branco / Obrigatória)

4. Message-Body (Corpo da mensagem /)
    O corpo da mensagem contém os dados que foram enviados do servidor em resposta à requisição feita. Muitas vezes é utilizado o JSON.
    
Uma outra forma de fazer uma requisição é usando a opção **-v**, que faz com que o resultado seja mais verboso, mostrando de fato como ocorreu a requisição. É utilizado para mostrar mais informações.

```
curl -v -i https://jsonplaceholder.typicode.com/posts/1
```

---

## Métodos HTTP
Existem 9 métodos os quais podemos utilizar para a criação de uma API RESTful. Esse conjunto de métodos possui a semântica de operações possíveis de serem efetuadas sob um determinada recurso.

Na especificação original do HTTP existiam apenas 3 métodos (GET, POST, HEAD). Na revisão 1.1 foram adicionados mais 5 verbos (OPTIONS, PUT, DELETE, TRACE E CONNECT). A RFC 5789 estendeu o HTTP com um novo método PATCH.

* GET
    O método GET é utilizado quando existe a necessidade de se obter um recurso. Ele é considerado idempotente, ou seja, independente da quantidade de vezes que é executado sob um recurso, o resultado sempre será o mesmo.
    
    ```
    curl www.exemplo.com/cliente/1
    curl -X GET www.exemplo.com/cliente/1
    ```
    
* POST
    Utilizado para a criação de um recurso a partir do uso de uma reprentação.
    
    ```
    curl -X POST www.exemplo.com/cliente \
    - H "Content-Type: application/json" \
    -d '{"nome":"João"}'
    ```
    
    Ao digitar -d fica a informação que você quer enviar.
    
    Obs: Para escrever na linha de baixo é so digitar contra-barr: \

* PUT
    O método PUT é utilizado como forma de atualizar um determinado recurso.
    
    ```
    curl -X PUT www.exemplo.com/cliente \
    - H "Content-Type: application/json" \
    -d '{"nome":"João da Silva"}'
    ```
    
* DELETE
    O DELETE tem como finalidade a remoção de um determinado recurso.

    ```
    curl -X DELETE www.exemplo.com/cliente/1
    ```

## Analogia ao banco de dados
POST - Create
GET - Read
PUT - Update
DELETE - Delete


## Métodos extras

* HEAD
    O método HEAD é muito parecido com o método GET, a única diferença é que o servidor não retornará o "body" depois de receber a requisição.
    
    ```
    curl -I -v http://www.exemplo.com/users
    ```
    
* PATCH
    O método PATCH faz "modificações parciais nos recursos", ou seja, fazer a alteração de valores específicos de um recurso, ao invés de enviar todos os dados novamente.
    
    Enquanto o método PUT só permite a "substituição" inteira do recurso, o PATCH permite modificações parciais.
    
    ```
    curl -X PATCH www.exemplo.com/cliente \
    - H "Content-Type: application/json" \
    -d '{"age":"26"}'
    ```
    
* OPTIONS
    O OPTIONS pode ser usado para saber quais métodos podem ser aplicados a um determinado recurso, ou qual a URL permitida para se comunicar com um determinado recurso.
        
    ```
    curl https://www.exemplo.com/posts -i -X OPTIONS
    ```
    
* TRACE
    Ecoa de volta a requisição recebida para que o cliente veja se houveram mudanças e adiçoes feitas por servidores intermediários.
    Muito comum desabilitar esse método por questões de segurança, utilizado normalmente em testes.
    
    Trace vulnerabilidade
    ```
    curl https://www.google.com -X TRACE
    ```
    
* CONNECT
    Converte a requisição de conexão para um túnel TCP/IP transparente, usualmente para facilitar comunicação criptografada com SSL (HTTPS) através de um proxy HTTP não criptografado.
    
## Safe Methods
São métodos que são considerados "salvos". Eles não fazem nenhum efeito de qualquer um dos lados (cliente/servidor).

É possível implementar algo para quando um safe method for chamado, como por exemplo atualizar o contador de um usuário, mas, o cliente não pode ser o responsável por essa alteração.

Os safe methods são: GET e HEAD.

### Métodos Idempotentes
Idempotência é uma propriedade de algumas operações matemáticas e da ciência da computação, que quando "rodadas" múltiplas vezes o resultado não será alterado depois da primeira vez.

Ou seja, o impacto de enviar 10 requisições HTTP para um método idempotente será o mesmo de se enviar apenas uma única requisição.

Os métodos idempotentes são: GET, HEAD, PUT, DELETE, OPTIONS e TRACE.