
# API de Gerenciamento de Blogs






## Introdução
Bem-vindo à API de Gerenciamento de Blogs! Esta documentação deve ajudá-lo a se familiarizar com os recursos disponíveis e como consumi-los com solicitações HTTP.


## Como usar

  #### Para começar usar, crie um usuário ou faça um login
  Caso não possua uma conta, deverá criar-la e em seguida efetuar o login
   ```
  "https://api.url.com/newUser"
  ```
  Caso já possua uma conta, basta entrar com usuário e senha
  ```
  "https://api.url.com/login"
  ```
  Ao efetuar o login com sucesso, receberá um token como o exemplo abaixo:
  ```json
      {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjk2MzczNDMwLCJleHAiOjE2OTg5NjU0MzB9.B_NiIm-KkbvMQ1_IjQHFUJqn_TzIDbN1mhoK5sTlNVM"
          
      },
      ...
  ```
  Possuindo um token de acesso, poderá realizar requisições livremente
  #### Exemplos de requisições
<details>
  
  ```
  "https://api.url.com/user"

  [
    {
        "id": 1,
        "displayName": "Morpheus",
        "email": "morpheus@email.com",
        "image": "http://image.url.com"
    },
    {
        "id": 2,
        "displayName": "Neo",
        "email": "neo@email.com",
        "image": "http://image.url.com"
    }
]
  ```
  ```
  "https://api.url.com/user/1"

    {
        "id": 1,
        "displayName": "Morpheus",
        "email": "morpheus@email.com",
        "image": "http://image.url.com"
    }
  ```
  ```
  "https://api.url.com/categories"

   [
    {
        "id": 1,
        "name": "Hello World"
    },
    {
        "id": 2,
        "name": "Matirx"
    },
   ]
  ```
  ```
  "https://api.url.com/post"

   [
    {
        "id": 1,
        "title": "Latest updates, August 1st",
        "content": "The whole text for the blog post goes here in this key",
        "userId": 1,
        "published": "2023-10-03T23:26:53.000Z",
        "updated": "2023-10-03T23:26:53.000Z",
        "user": {
            "id": 1,
            "displayName": "morpheus",
            "email": "morpheus@email.com",
            "image": "http://imageurl.com"
        },
        "categories": [
            {
                "id": 1,
                "name": "Hello World"
            },
            {
                "id": 2,
                "name": "Matirx"
            }
        ]
    }
   ]
  ```
```
  "https://api.url.com/post/1"
    {
        "id": 1,
        "title": "Latest updates, August 1st",
        "content": "The whole text for the blog post goes here in this key",
        "userId": 1,
        "published": "2023-10-03T23:26:53.000Z",
        "updated": "2023-10-03T23:26:53.000Z",
        "user": {
            "id": 1,
            "displayName": "morpheus",
            "email": "morpheus@email.com",
            "image": "http://imageurl.com"
        },
        "categories": [
            {
                "id": 1,
                "name": "Hello World"
            },
            {
                "id": 2,
                "name": "Matirx"
            }
        ]
    }
  ```
```
  "https://api.url.com/post/search?q=latest"

   [
    {
        "id": 1,
        "title": "Latest updates, August 1st",
        "content": "The whole text for the blog post goes here in this key",
        "userId": 1,
        "published": "2023-10-03T23:26:53.000Z",
        "updated": "2023-10-03T23:26:53.000Z",
        "user": {
            "id": 1,
            "displayName": "morpheus",
            "email": "morpheus@email.com",
            "image": "http://imageurl.com"
        },
        "categories": [
            {
                "id": 1,
                "name": "Hello World"
            },
            {
                "id": 2,
                "name": "Matirx"
            }
        ]
    }
   ]
  ```
</details>
 
#### Rotas
<details>
  post /newUser -> cria um novo usuario mediante nome, email, senha e imagem(url - opcional) <br/>
  
  post /login -> realiza o login de um usuario existente -> gera um barrer token que sera utilizado para acessar as proximas rotas <br/>

  <br/>
  get /user -> lista com todos os usuarios -> é necessario ussar o token gerado no login na autorizathion <br/>
  get /user/:id -> lista com usuario correspondente ao id -> é necessario ussar o token gerado no login na autorizathion <br/>
  put /user/:id -> permite editar as informações de um usuario -> é necessario ussar o token gerado no login na autorizathion <br/>
  delete /user/:id -> deleta usuario corresondete ao id -> é necessario ussar o token gerado no login na autorizathion <br/>

  <br/>
  post /categories -> cria uma nova categoria mediante um nome (ex: {name: carros} -> é necessario ussar o token gerado no login na autorizathion <br/>
  get /categories -> lista com todos as categorias -> é necessario ussar o token gerado no login na autorizathion  <br/>

  <br/>
  post /post -> cria um novo post mediante titulo, corpo e categorias -> é necessario ussar o token gerado no login na autorizathion <br/>
  get /post -> lista com todos os posts -> é necessario ussar o token gerado no login na autorizathion <br/>
  get /post/search?q= -> lista com todos os posts correspondentes ao termo de busca -> é necessario ussar o token gerado no login na autorizathion <br/>
  get /post/:id -> lista com post correspondente ao id -> é necessario ussar o token gerado no login na autorizathion <br/>
  put /post/:id -> atualiza o post correspondente ao id mediante titulo e corpo -> é necessario ussar o token gerado no login na autorizathion <br/>
  delete /post/:id -> deleta o post correspondete ao id -> é necessario ussar o token gerado no login na autorizathion <br/>
</details>

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:guilhermegattimarinho/blogs-backend.git
```

Entre no diretório do projeto

```bash
  cd blogs-backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Stack utilizada

**Banco de dados relacional:** MySQL

**Back-end:** Node, Express, Sequelize, Docker ->  API Rest


## Feedback

Se você tiver algum feedback, por favor deixe-me saber por meio de ggattimarinho@gmail.com


## Autores

- [@guilhermegattimarinho](https://www.github.com/guilhermegattimarinho)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

