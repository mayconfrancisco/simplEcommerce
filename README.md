# SimplEcommerce

Projeto que simula um ecommerce, lista e filtra artigos e adiciona no carrinho.

**Projeto de Desafio do curso Bootcamp da RocketSeat - O Objetivo do projeto é acadêmico, usar em um único projeto os itens abaixo listados no item Sopinha de Letrinhas**

[Imagem do App SimplEcommerce](https://raw.githubusercontent.com/mayconfrancisco/simplEcommerce/master/imgs/SimplEcommerceRN.gif)


### Para rodar o projeto

**_Rodar API_**

npm install -g json-server

json-server server.json -d 500

**_Rodar App_**

react-native run-ios

react-native run-android

react-native run-ios --simulator="iPhone 6"

### Sopinha de Letrinhas ;)

react-navigation para as rotas

react-native-gesture-handler para os gestos

react-native-iphone-x-helper para aquela força nos espaços e tamanhos

react-native-vector-icons para ícones

redux e redux-saga para gerenciamento do estado, tudo integrado com o Reactotron, usando reduxsauce para os ducks e seamless-immutable no reducer

styled-components para os estilos do app para aumentar a produtividade com o uso da memória muscular _[haha]_ (Torna os estilos praticamente os mesmos da Web)

JSON-SERVER para API de serviços (server.json)

Axios para as requisições a API

### Seria bom implementar:

Fluxo de erro em tela no consumo da API com Saga - está logando no Reactotron;

Erro em tela caso esteja sem rede (NetInfo)

Adicionar ícone e SplashScreen
