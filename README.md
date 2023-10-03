# blogs-backend

post /user -> cria um novo usuario mediante nome, email, senha e imagem(url - opcional) <br/>
post /login -> realiza o login de um usuario existente -> gera um barrer token que sera utilizado para acessar as proximas rotas

get /user -> lista com todos os usuarios -> é necessario ussar o token gerado no login na autorizathion
get /user/:id ->  lista com usuario correspondente ao id -> é necessario ussar o token gerado no login na autorizathion
delete /user/:id -> deleta usuario corresondete ao id ->  é necessario ussar o token gerado no login na autorizathion

post /categories -> cria uma nova categoria mediante um nome (ex: {name: carros} ->  é necessario ussar o token gerado no login na autorizathion
get /categories -> lista com todos as categorias -> é necessario ussar o token gerado no login na autorizathion

post /post -> cria um novo  post mediante titulo, corpo e categorias -> é necessario ussar o token gerado no login na autorizathion
get /post -> lista com todos os posts -> é necessario ussar o token gerado no login na autorizathion
get /post/search?q= -> lista com todos os posts correspondentes  ao termo de busca -> é necessario ussar o token gerado no login na autorizathion
get /post/:id ->  lista com post correspondente ao id -> é necessario ussar o token gerado no login na autorizathion
put /post/:id -> atualiza o post correspondente ao id mediante titulo e corpo ->  é necessario ussar o token gerado no login na autorizathion
delete /post/:id -> deleta o post correspondete ao id ->  é necessario ussar o token gerado no login na autorizathion
