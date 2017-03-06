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

Tem como origem a tese de um PHD feito por Roy Fielding.

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

Uma requisição cURL é composta da palavra curl**, da URL a qual você quer acessar, e um conjunto de opções que permitem você modificar qualquer coisa na requisição que será enviada.

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

* -X

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
* POST - Create
* GET - Read
* PUT - Update
* DELETE - Delete


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

---

## Modelo de maturidade Richardson
Apesar de Roy Fielding deixar bastante claro que para uma API ser considerada RESTful ela precisa obrigatoriamente seguir todas as constraints definidas em seu trabalho, na prática, muitas vezes precisamos de uma abordagem um pouco mais simples.

Sendo assim, Leonard Richardson propôs um modelo de 4 níveis para que alcancemos uma API REST.

Os níveis 0, 1 e 2 talvez sejam mais familiares, e de fato são mais fáceis de implementar, porém, deve ficar claro que os mesmos não são considerados RESTful.

![Glorias do REST](https://martinfowler.com/articles/images/richardsonMaturityModel/overview.png)

* Nível 0 - POX

    Neste nível, as mensagens podem ser serializadas em formatos como XML, JSON ou outros. É importante lembrar, como dito anteriormente, que não é o formato da mensagem que define ou não um sistema REST.
    
    ```
    POST /salvarCliente
    
    <Cliente>
    <Nome>Manoel da Silva</Nome>
    ...
    </Cliente>
    ```
    
    ```
    GET /buscarCliente/1
    
    HTTP/1.1 200 OK

    <buscarCliente>
    <status>CLIENTE NÃO ENCONTRADO</STATUS>
    <codigo>404</codigo>
    </buscarCliente
    ```
    
    Nesse exemplo apresentado acima, em resumo, significa que não foi utilizado o HTTP da maneira correta.
    
* Nível 1 - Recursos
    
    No nível 1 é onde dizem que tem recursos. Passa-se a usar recursos como forma de modelar e organizar a API. Neste nível não precisaremos conhecer a funcionalidade de cada método e sim apenas o recurso ao qual temos acesso.
    
    ```
    POST /cliente
    
    <Cliente>
    <Nome>Manoel da Silva</Nome>
    </Cliente>
    ```
    
* Nível 2 - Verbos HTTP

    O HTTP deixa de ser um papel apenas de transporte e passam a exercer um papel semântico na API, ou seja, seus verbos passam a ser utilizados com o propósito no qual foram criados.
    
    Enviando
    ```
    POST /cliente
    
    <Cliente>
    <Nome>Manoel da Silva</Nome>
    ...
    </Cliente>
    ```
    
    Recebendo
    ```
    201 Created
    
    Location: /cliente/1
    ```
    
    A utilização dos métodos (GET, POST, PUT, DELETE) começam a ser utilizados.
    
    No nível 2 dizem que os verbos HTTP são utilizados de forma correta.
    
    É muito comum a utilização de *HTTP response status code* nesse nível. A documentação do __[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)__ é separada em categorias diferentes.
    
* Nível 3 - HATEOAS

    HATEOAS (Hypermidia as the Engine of Application State).
    
    APIs que não utilizam HATEOAS não podem ser consideradas RESTful, mesmo assim, você vai encontrar muitos conteúdos sobre REST que nem ao menos citam essa característica.
    
    Apesar de aparentemente ser algo não muito familiar HATEOAS é um conceito presente no dia a dia de todos os usuários da Web.
    
    HATEOAS seria um documento mostrar suas possíveis interações com ele mesmo através do corpo da mensagem de retorno de uma requisição.
    
---

## Outras ferramentas para requisições

Além do CURL existem hoje outras ferramentas como o __[HTTPie](https://httpie.org/)__ e __[Postman](https://www.getpostman.com/)__ para fazer requisições e analisar suas respostas.

* HTTPie

    Sua principal característica é a rapidez. Essa ferramenta possui highlight e identação.
    
    Está disponível para download para Windows, Linux e MAC.
    
* Postman

    Muito famoso pela qualidade e simplicidade.
    
    Está disponível como extensão para o Google Chrome e download para Windows.
    
---

## Media Type

Media Types é uma string que define qual o formato do dado e como ele deve ser lido pela máquina. Media type basicamente é utilizado para solicitar ao servidor uma representação específica de uma resposta a uma requisição. Isso permite um computador diferenciar entre JSON e XML, por exemplo.

- application/json
- application/xml
- multipart/form-data
- text/html

Um media type é composto por duas partes separada por uma barra. A primeira parte refere-se ao tipo e a segunda ao subtipo. Também é possível especificar alguns parâmetros adicionais, como por exemplo o *charset=UTF-8*.

A primeira parte contém um tipo registrado de alto nível, que pode ser:

- application
- audio
- example
- image
- message
- model
- multipart
- text
- video

Na segunda parte, basta pedir o formato desejado.

Para pedir o formato que você quer na resposta da requisição é necessário configurar no header. Para informar o media type, usamos o header field **accept** no momento da requisição.

```
curl mockbin.org/request -H "Accept: application/json"
curl mockbin.org/request -H "Accept: application/xml"
```

O parâmetro **q** define quality factor, que informa a ordem preferida de retorno da requisição. Esse parâmetro deve estar no intervalo de 0 a 1, sendo 1 o de maior prioridade. Dess

```
curl mockbin.org/request -H "Accept: application/json;q=0.5, application/yaml;q=0.7"
```

## Media Type vs Mime Types
Mime type é chamado atualmente de Media type, é a mesma a coisa, só é um nome utilizado antigamente.

## Content-Type vs Accept
É muito comum a confusão entre os campos Content-Type e o Accept, mas devemos saber que o Content-Type é o campo que identifica o conteúdo da requisição, ou seja, em uma requisição POST, o formato dos dados envidados deve ser indicado no Content-Type, já o Accept, informa o tipo de retorno ao servidor.

## Tratando erros
Naturalmente, quando fazemos requições RESTful, receberemos como retorno um possível erro, seja por falha no formato da requisição, seja por causar internas referentes ao servidor. Isso não significa que o retorno apresentado seja uma mensagem clara, que não deixa dúvidas sobre o que aconteceu de fato.

O intuito da gerência de erros em APIs RESTful é informar ao requisitante uma mensagem que retrate o que de fato ocorreu. Mais do que isso, um status code que não seja genérico e sim, útil.

É possível tratar erros atráves das seguintes classes do status code:

1. Informacional

    Códigos começados com 1 são conhecidos como códigos informacionais. A maioria deles não são usados nos dias atuais.

2. Success

    Esses códigos indicam que ouve sucesso no intercâmbio entre o servidor e o cliente.

3. Redirection

    Os códigos indicam que o cliente deve fazer uma ação adicional antes da 

4. Client error

    Nesse caso, o código indica que existe algo errado com a requisição do cliente.
    
5. Server error

    O cliente enviou uma requisição válida porém o servidor não foi capaz de processá-la com sucesso.
    
Site para consulta de __[status http](https://httpstatuses.com/)__.

Em requisições HTTP o ideal é sempre retornar o status code menos genérico, e se necessário uma message-body com detalhes do erro ocorrido.

---

## Versionamento
É sempre importante deixar funcionando outras versões de sua API.

Versionamento não faz parte das constraints REST, nem também do Modelo de maturidade Richardson, mas é indispensável para criar APIs que sofrem mudanças ao longo do tempo.

1. Subdomínio

    ```
    api1.example.com/users
    ```

2. URL (A mais utilizada por conta de sua fácil implementação)

    ```
    example.com/v1/users
    ```

3. URL com parâmetros

    ```
    example.com/users?v=1
    ```

4. HTTP Header customizado

    ```
    X-API-Version: 1
    ```

5. Accept Header com Media Type customizado

    ```
    Accept: application/vnd.myapi.v2+json
    ```

6. Accept Header com opção de versão

    ```
    Accept: application/vnd.myapi+json;version=2.0
    ```
---

## Caching
Caching é extremamente importante, não só para os usuários, mas também para reduzir o custo de rodar aplicações. Na computação, qualquer valor que é difícil e computacionalmente custoso de obter deve ser cacheado.

As únicas coisas que não devem ser cacheadas são as que mudam com muita frequência.

Esse processo chama-se cache invalidation/invalidação de cache e não é algo simples de se fazer. Cache pode salvar uma enorme quantidade de tempo.

A medida em que diminuímos o tempo de requisição, suas aplicações precisarão de menos poder para rodar e isso implica em gastar menos com servidores. Cache permite uma aplicação escalar mais facilmente, especialmente se a maioria das requisições retornam dados.

Infelizmente nem tudo pode ser cacheado. Alguns dados real-time precisam ser buscados todas as vezes. O restante pode ser cacheado por um período de tempo, seja alguns segundo ou um dia, dependendo da frequência em que os dados mudam.

Mais informações detalhadas podem ser encontradas em __[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)__

### Objetivos
Os objetivos do Caching HTTP são de eliminar o envio de requisições o máximo possível, e caso uma requisição precise ser feita, reduzir os dados de resposta.

O primeiro objetivo pode ser alcançado usando-se um mecanismo de expiração conhecido como Cache-control, e o segundo é através do mecanismo de validação ETag ou Last-Modified.

- Mínimo de requisições: Cache-control
- Mínimo de dados nas respostas: ETag

### Prevenindo requisições inteiras - Cache-control
A maneira mais rápida de fazer uma requisição HTTP é não enviá-la inteiramente.

Para controlar o caching no cliente o mais indicado é usar o header field Cache-control

O header Cache-control pode ser usado para definir uma política de cache para um recurso.

Exemplo:
```
Cache-control: max-age=3600
Cache-control: no-cache
Cache-control: private, max-age=86400
```

- Max-age: Especifica em segundos quanto tempo o recurso pode ser cacheado. É interessante notar que esse cache também pode ser feito por intermediários, não só o browser em si.

- private/public: Define quem pode fazer o cache. Public significa que qualquer um pode fazer o cache. Private por sua vez indica que o cache só pode ser feito pelo browser, ou seja, os intermediários como os CDNs não podem fazer cache.

- no-chache/no-store: Essas duas diretivas se confundem mas, a no-store informa a resposta não deve ser armazenada seja no browser ou em seus intermediários, já o no-cache significa que a resposta pode ser cacheada mas não pode ser reusada sem antes checar o servidor. Ela pode ser combinada com um ETag.

Mais informações detalhadas podem ser encontradas em __[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)__

Para obter um exemplo, digite:
```
curl -I http://g1.globo.com/
```

### ETag
Até agora foi estudado como prevenir requisições usando o header Cache-control, mas infelizmente na maior parte das APIs web isso é raramente possível.

Uma outra forma de ganhar tempo e largura de banda é usando o header ETag. ETag vem de Entity Tag e destina-se a assegurar um token de validação identificando uma versão específica de uma resposta.

**Exemplo**: Em um primeiro momento um cliente faz a requisição de um recurso (*/users/jackson*), na resposta o servidor inclui o token atual ("*12345*") na header ETag.
```
curl http://www.exemple.com/users/jackson
HTTP/1.1 200 OK
Content-Length: 2048
ETag: "12345"
[DATA]
```

Os header fields Etag e If-none-match são combinadas para se fazer cache com ETags.

### Cache com diferentes tipos de reprentação

Utilizar Cache é importante para reduzir o tempo de resposta para os usuários.

Dados real-time são os mais complicados de se fazer Cache.

Para resolver problema de trabalhar com diferentes represenações de chaves, utiliza-se o *vary*.

Mais informações detalhadas podem ser encontradas em __[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)__

---

### Autenticação

Autenticação é uma parte importante de qualquer aplicação web moderna, ela tem uma missão de identificar quem está usando a aplicação e se ela tem permissão para usá-la.

Muitos sites ainda gerenciam a autenticação através de cookies conforme a __[RFC 6265](https://tools.ietf.org/html/rfc6265)__

Cookies são criados para permitir o servidor gravar e manter os estados (stateful), o que é completamente contrário ao que o REST propõe (stateless), ou seja uma requisição não depende da outra.

O padrão do esquema de autenticação HTTP *basic* e através de *digest* são stateless, mas, atualmente muitas empresas precisam identificar seus usuários e querem diminuir a barreira para que eles usem seus produtos. Isso significa não ficar pedindo a senha do usuário frequentemente, de preferência apenas uma única vez.

Quando uma aplicação web oferece ferramentas para outras aplicações web através de API, a autenticação pode ser feita através de uma *API Key* ou *API secret token* como são conhecidas.

Uma API Key é uma combinação de letras e números bem grande, como um hash, e fica sendo transmitida em todas as requisições para identificar aplicação e geralmente é combinada com um email/senha.

Com estas API Keys trafegam entre o servidor e o cliente, é importante que o servidor tenha configurado os __[certificados SSL](https://letsencrypt.org)__ para garantir a maior segurança possível.

Uma das soluções para login é no momento em que o usuário faz o login, o mesmo recebe um token baseados em suas credenciais e daí pra frente o token servirá de identificação nas proximas requisições. 

### Identificação x Autenticação x Autorização
Serve apenas para identificar. Pode ocorrer problemas pois é possivel passar API Keys para outras pessoa.

A autenticação se dá quando comprovamos quem somos, usando por exemplo uma combinação de login/senha.

A autorização tem o intuito de definir o que podemos ou não fazer, pois mesmo que o sistema identifique e autentique, as credenciais podem estar permitidas a apenas ler um determinado conteúdo, por exemplo.

### Autenticação com HTTP
Os mecanismos padrões de autenticação com HTTP são definidos como *basic* (básica) e *digest* (resumida).

Nesses dois mecanismos o conjunto usuario/senha é incluido em cada requisição, codificado em Base64 para a autenticação *Basic* e com um *hash MD5* para a autenticação *Digest*.

A documentação informa que para uma autenticação o cliente deve enviar o header *Authorization* no seguinte formato:

```
Authorization: auth-scheme hashed-credentials
```

Requisição de autenticação básica HTTP via curl teríamos:
```
curl -u jack:pass http://www.example.com
```

Em retorno à requisição feita com o header Authorization, caso as credenciais não sejam autorizadas, o servidor deve retornar o status code *401 Unathorized* e setar o header *www-authenticate* com o tipo de autenticação que deve ser usado e qual o domínio (realm).
```
www-Authenticate: Basic realm="Perfil"
```

A diretiva de domínio "realm" é opcional e indica a proteção de um determinado espaço, pois uma mesma aplicação pode-se ter diferentes áreas protegidas usando diferente esquemas de autenticação.

Sendo assim, uma autenticação básica seria:
```
Authorization: Basic am9objpwYXNz
```