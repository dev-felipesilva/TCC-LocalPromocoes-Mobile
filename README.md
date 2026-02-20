LOCAL PROMOÇÕES

Este é o repositório do aplicativo mobile desenvolvido para o meu Trabalho de Conclusão de Curso (TCC). O objetivo do app é facilitar a comparação de preços entre diferentes supermercados da região, permitindo que o usuário monte uma cesta de compras e visualize qual estabelecimento oferece o melhor custo-benefício dentre as opções disponíveis.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Front-end:** [React Native](https://reactnative.dev/) com [ExpoGo](https://expo.dev/go) para exibição
- **Linguagem:** JavaScript
- **Back-end (Serverless):** [Google Firebase](https://firebase.google.com/)
- **Banco de Dados:** Cloud Firestore

## Funcionalidades

- Consulta de produtos e preços em tempo real.
- Adição de itens a uma cesta de comparação.
- Cálculo automático do valor total por mercado.
- Interface intuitiva para navegação entre categorias.

## Como rodar o projeto localmente

Para testar o projeto no seu ambiente de desenvolvimento:

1. Clone este repositório:
   
   git clone (https://github.com/dev-felipesilva/TCC-LocalPromocoes-Mobile )

2. Entre na pasta do projeto:
   cd LocalPromocoesMobile

3. Instale as dependências:
   npm install

4. Inicie o servidor em Expo:
   npx expo start

5. Use o **Expo Go** em seu celular Android/IOS para escanear o QR Code.

## Arquitetura 

O aplicativo segue uma arquitetura moderna onde o React Native gerencia toda a lógica de interface e estado no lado do cliente, comunicando-se diretamente com o Firebase Firestore para a persistência de dados.

Desenvolvido por **Felipe Antônio de Sá Silva** como parte do curso de Sistemas de Informação.
