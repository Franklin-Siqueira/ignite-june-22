<!--
 Copyright 2022 Franklin Siqueira.
 SPDX-License-Identifier: Apache-2.0
-->
<p align="center">
	<img src="header.svg" width="100%" alt="Header SVG" >
</p>

Semana dedicada ao desenvolvimento, utilizando [Vite](https://www.npmjs.com/package/vite), [ReactJs](https://www.npmjs.com/package/react), [TypeScript](https://www.typescriptlang.org/), [GraphQL](https://www.npmjs.com/package/graphql) e [GraphCMS](https://graphcms.com/). Mais ainda, também são usados as ferramentas de desenvolvimento [Tailwind](https://www.npmjs.com/package/tailwindcss), [PostCSS](https://www.npmjs.com/package/postcss) e o [Autoprefixer](https://www.npmjs.com/package/autoprefixer).


Caso não tenha instalados os requisitos acima, siga os procedimentos indicados nos links para cada um deles.

---
### **Inicialização | Basic Setup**

```shell
> git init
>...
> npm i vite 
>...
> npm create vite@latest
```

Escolha o **React** e o **TypeScript**.

Concluído o *setup básico*, siga as instruções que irão aparecer no console do terminal, ou *command line*. Observe que não é necessário seguir a última instrução (*npm run dev*) nesse momento.

Em seguida:

```shell
>...
> npm install
>...
```

O próximo passo é instalar as **ferramentas de desenvolvimento** citadas acima:

```shell
>...
> npm i tailwindcss postcss autoprefixer -D
>...
> npx tailwindcss init -p
```

A flag **-p** é usada para criação do arquivo de configuração do **PostCSS**.

Após a instalação, abra o arquivo *tailwind.config.js* e adicione o conteúdo disponibilizado [neste arquivo]().

Feito isso, **remova** os arquivos *.css e .svg* da pasta */src*, já que não serão usados.

Para evitar a interrupção do processo de desenvolvimento e o vai-e-vem de instalação de dependências, é indispensável a instalação das bibliotecas [date-fns](https://www.npmjs.com/package/date-fns) e [Phosphor](https://www.npmjs.com/package/phosphor-icons), conforme segue abaixo:

```shell
// Phosphor
> npm i phosphor-react
// date-fns
> npm i date-fns
```

No decorrer da criação do app as suas funcionalidades ficarão mais claras. De qualquer forma, caso a curiosidade seja inquietante, veja onde a Phosphor é usada [aqui]; e a date-fns [aqui].

Finalmente, instalamos o *GraphQL* e o *Apollo client*.

```shell
>...
> npm i @apollo/client graphql
```

Como o objetivo deste repositório é demonstrar as possibilidades inerentes à utilização do **ReactJs** e do **GraphQL** no desenvolvimento web, alguns detalhes ficam por conta da curiosidade de cada um. Partindo dessa premissa, as minúcias relativas à criação e a configuração da **API** do **GraphCMS** ficarão para uma outra oportunidade. Dessa forma, considerando que não há como chegar a algum resultado prático sem uma **API** configurada, é necessário o uso do modelo elaborado por [Diego Fernandes](https://github.com/diego3g), da [RocketSeat](https://github.com/rocketseat-education/), com o *link*  para *clonagem* disponibilizado em seguida:

[Link para a API de tutorias](https://rseat.in/lab-graphcms)

Tendo uma conta criada no **GraphCMS**, atribua um nome à sua escolha e uma descrição que ajude a entender o propósito da **API**.

Não menos importante é instalar as **extensões** para essas ferramentas, caso esteja desenvolvendo no **VS Code**.

O *setup* inicial está concluído.

---
### **Atividades | Tasks**

**GraphQL Playground at GraphCMS**


<details>
  <summary>
    <strong>
      Criando uma query no GraphQL
    </strong>
  </summary>
  <code>
  
    query MyQuery {
      lessons {
        id
        slug
        title
        teacher {
          name
          bio
          avatarURL
        }
      }
    }
    // Returns
    {
      "data": {
        "lessons": [
          {
            "id": "cl4okwrf84hfx0blye3fr8sqa",
            "slug": "instagram-clonning",
            "title": "Instagram Clonning",
            "teacher": {
              "name": " Coding With Russ",
              "bio": "GitHub and YouTube content creator",
              "avatarURL": "https://avatars.githubusercontent.com/u/71890899?v=4"
            }
          }
        ]
      }
    }

  </code>
</details>

Codificação da **Configuração das Cores Usadas** com o **Tailwind**:

<details>
  <summary>
    <strong>Colors Definitions on Tailwind</strong>
  </summary>
  <code>
  
    colors: {
      green: {
        300: '#00B37E',
        500: '#00875F',
        700: '#015F43',
      },
      blue: {
        500: '#81D8F7',
      },
      orange: {
        500: '#FBA94C',
      },
      red: {
        500: '#F75A68',
      },
      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#8D8D99',
        500: '#323238',
        600: '#29292E',
        700: '#121214',
        900: '#09090A'
      }
    },

  </code>
</details>


[Debug e Error Handling]()

[Live Preview](https://htmlpreview.github.io/?https://github.com/franklin-siqueira/Impulso-JavaScript-Evolution/blob/master/Módulo_II-Fundamentos_Web_com_HTML_e_CSS/Recriando_a_página_inicial_do_Instagram/Instagram/index.html)

---
### **Sobre este projeto | Project's stack**

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Franklin-Siqueira/Impulso-JavaScript-Evolution/tree/master/Módulo_II-Fundamentos_Web_com_HTML_e_CSS/Recriando_a_página_inicial_do_Instagram/graphs/commit-activity) [![GitLab last commit](https://badgen.net/github/last-commit/Franklin-Siqueira/Impulso-JavaScript-Evolution/)](https://github.com/Franklin-Siqueira/Impulso-JavaScript-Evolution/tree/master/Módulo_II-Fundamentos_Web_com_HTML_e_CSS/Recriando_a_página_inicial_do_Instagram/-/commits)

![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=plastic&logo=macos&logoColor=blue)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=plastic&logo=visual-studio-code&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=black) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=black)
<!-- [![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg) -->
<!-- [![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)  -->
<!-- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E) [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/) -->



---
### **Perfil | About me**

[![Profile Views Counter](https://komarev.com/ghpvc/?username=Franklin-Siqueira&color=blueviolet)](https://github.com/antonkomarev/github-profile-views-counter)

#### **Contato | Contacts**

<!-- [![Github Badge Classes](https://img.shields.io/badge/-Github%20Classes-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/Franklin-Siqueira-Classes)](https://github.com/Franklin-Siqueira-Classes) -->
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/franklin-c-siqueira/)](https://www.linkedin.com/in/franklin-c-siqueira/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:franklin.cs.design@gmail.com)](mailto:franklin.cs.design@gmail.com/)
<!-- [![Twitter Badge](https://img.shields.io/badge/-Twitter-1DA1F2?style=flat-square&logo=Twitter&logoColor=white&link=https://twitter.com/marcopollivier)](https://twitter.com/marcopollivier) -->
<!-- [![Youtube Badge](https://img.shields.io/badge/-Youtube-FF0000?style=flat-square&logo=Youtube&logoColor=white&link=https://youtube.com/marcopollivier)](https://youtube.com/franklinsiqueira) -->
<!-- [![Dev.to Badge](https://img.shields.io/badge/-Dev.to-363D44?style=flat-square&logo=Dev.to&logoColor=white&link=https://dev.to/marcopollivier)](https://dev.to/franklinsiquera) -->

---
#### **Desenvolvimento | Development**
[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg) [![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/) [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/) [![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://npmjs.com/)

---
#### **Design | Graphic Design**
![Illustrator](https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=brown)
![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)
![Adobe InDesign](https://img.shields.io/badge/Adobe%20InDesign-49021F?style=for-the-badge&logo=adobeindesign&logoColor=pink) ![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=blue)

---

[![Awesome Badges](https://img.shields.io/static/v1?label=Badges'r&message=Awesome&color=blue)](https://github.com/franklin-siqueira)

---

**License**

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/Franklin-Siqueira/Impulso-JavaScript-Evolution/blob/master/assets/LICENSE.md)

This sample code is released using the MIT license. For more information see the [LICENSE](https://github.com/Franklin-Siqueira/Impulso-JavaScript-Evolution/blob/master/assets/LICENSE.md) file.

---

<p align="center">
	<img src="footer_ignite.svg" width="100%" alt="Header SVG" >
  <img style="width: 32px; height: 32px; border-radius: 50%;" src="./event-platform/src/assets/img/favicons/favicon-16x16.png" width="16px" align="right">
</p>

  ---
