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
