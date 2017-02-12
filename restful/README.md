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
id: http.meusite.com/user
```

## URN
Uniform Resource Name (Nome uniforme de recurso)

É um tipo de URI que usa o URN Scheme

Tem por objetivo a identificação unica do recurso em qualquer local independente da sua localização. A URN necessita de um "resolvedor".


## IRI
Internationalized Resource Identifier (Identificador de recursos internacionais)

Utiliza caracteres diferentes, contem caracteres unicode.
