Projeto de Rede Social - Comentários Interativos
Descrição do Projeto
Este é um projeto de uma aplicação de rede social, onde os usuários podem interagir por meio de posts e comentários. A aplicação permite que o usuário publique conteúdos, curta e exclua comentários, além de exibir informações sobre o autor de cada post. Foi desenvolvido utilizando React, CSS Modules e Hooks. Este projeto foi criado com o objetivo de reforçar e consolidar os conhecimentos de React, focando principalmente na manipulação de estados, uso de hooks e interatividade com componentes.

Funcionalidades
Exibição de Posts:

A aplicação exibe posts com o nome do autor, a foto de perfil, e o conteúdo do post. Cada post contém informações como o nome do autor, cargo e data de publicação formatada.

Adicionar Comentários:

Os usuários podem adicionar novos comentários nos posts.

A interface permite adicionar novos comentários através de um campo de texto. O comentário é adicionado à lista de comentários de um post específico.

Curtir Comentários:

A aplicação permite curtir os comentários. Cada clique no botão de "Curtir" aumenta o número de curtidas do comentário.

O contador de curtidas é atualizado dinamicamente sempre que o botão é pressionado.

Excluir Comentários:

A funcionalidade de exclusão de comentários foi implementada. Ao clicar no ícone de lixeira, o comentário é removido da lista de comentários.

Os comentários são removidos com base no conteúdo, evitando a exclusão de múltiplos comentários idênticos.

Edição de Perfil:

Um componente de barra lateral exibe o perfil do usuário, com a possibilidade de editar o perfil.

Tecnologias Usadas
React: Biblioteca JavaScript para a construção de interfaces de usuário.

React Hooks: Utilização de hooks como useState para gerenciar o estado da aplicação.

CSS Modules: Estilização dos componentes com escopo local de estilos, evitando conflitos entre as classes CSS.

Phosphor Icons: Conjunto de ícones usados para ações como curtir e excluir comentários.

Date-fns: Biblioteca para formatação de datas.

Como Executar o Projeto
Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados na sua máquina.

Passos para Instalar
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até o diretório do projeto:

bash
Copiar
Editar
cd nome-do-repositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm start
A aplicação estará disponível no http://localhost:3000.

Estrutura do Projeto
/src: Contém todos os arquivos de código-fonte da aplicação.

/components: Componentes React reutilizáveis.

/assets: Imagens e ícones usados no projeto.

/styles: Arquivos de estilo (CSS Modules).

Desafios e Melhorias Futuras
Autenticação de Usuário: Adicionar um sistema de login e cadastro para os usuários.

Persistência de Dados: Integrar uma API para salvar os posts e comentários em um banco de dados.

Melhorias na Interface: Criar uma interface mais dinâmica e responsiva.
