# 📘 SugarLab

### PAC - Projeto de Aprendizagem Colaborativa Extensionista  
Curso de Engenharia de Software – Católica de Santa Catarina

---

## 👤 Autores

- **Amanda Korczagin**
- **Daniel Douglas dos Santos**
- **Flavia Antonieli de Souza**
- **Guilherme Mafra Paluski**
- **Gustavo Mafra Paluski**
- **Pedro Henrique Vitoreti**

---

## 🎓 Professores Orientadores

- **Luiz Carlos Camargo**
- **Claudinei Dias**

---

## 🧩 Justificativa do Projeto

A busca por capacitação profissional na área da confeitaria tem crescido, impulsionada por um mercado competitivo e pela valorização de produtos artesanais. No entanto, muitos interessados enfrentam dificuldades para acessar cursos de qualidade devido a limitações financeiras, falta de tempo ou ausência de materiais acessíveis.

Diante disso, o projeto propõe o **SugarLab**, uma plataforma digital de cursos de confeitaria que democratiza o acesso ao aprendizado, oferecendo conteúdos organizados, acessíveis e alinhados às demandas do mercado gastronômico. Além do impacto social, o desenvolvimento do sistema permitiu aos estudantes aplicar na prática conceitos essenciais da Engenharia de Software, como prototipação, desenvolvimento web, segurança, testes e boas práticas de arquitetura.

---

## 👨‍💻 Descrição do Sistema

O **SugarLab** é uma plataforma web de cursos online de confeitaria, criada para facilitar o acesso ao aprendizado gastronômico por meio de conteúdos didáticos, organizados e acessíveis. A aplicação permite que usuários realizem cadastro, assinem o serviço e consumam cursos estruturados em módulos, aulas e receitas.

### Entre as principais funcionalidades, destacam-se:

- Acesso a cursos de confeitaria organizados por módulos e aulas;  
- Área de login, registro e gerenciamento de conta;  
- Sistema de assinatura;  
- Interface moderna desenvolvida em **React com Vite**, com foco em responsividade e navegabilidade;  
- Prototipação no **Figma** para garantir consistência visual;  
- Backend robusto em **Java + Spring Boot**, com autenticação e autorização via **JWT**;  
- Testes automatizados com **JUnit**;  
- Pipeline inicial de **CI/CD** para padronizar versionamento e testes.
  
### Tecnologias:

- **Backend:** Java + Spring Boot  
- **Frontend:** React  
- **Arquitetura:** API REST organizada em camadas (Controller, Service, Repository)  
- **Banco:** MySQL

O objetivo é oferecer uma experiência profissional, simples e didática tanto para quem cria cursos quanto para quem deseja aprender.

---

## 🛠 Requisitos para preparar o ambiente de desenvolvimento

### 🛢️ Configuração do Banco de Dados (MySQL)

1. Certifique-se de que o **MySQL** está instalado e rodando na porta padrão **3306**.

2. Crie o banco de dados:
   ```sql
   CREATE DATABASE sugarlab_db;
   ```
3. Verifique ou ajuste as credenciais no arquivo **application.properties**

---

### 🔧 Backend – Spring Boot (Java)

- **Java 17+**
- **Maven 3.8+**
- **Spring Boot 3.x**  
- **Banco de dados: MySQL**

### ▶️ Como rodar o backend:
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
---

### 🖥️ Frontend – React

- **Node.js 18+**

```bash
npm ou yarn
```

### ▶️ Como rodar o frontend:
```bash
npm install
npm run dev
```
---

## 📷 Imagens do projeto

### Página inicial

Apresenta a proposta da aplicação SugarLab, convidando o usuário
a conhecer sobre o curso e as demais ferramentas oferecidas;

<img width="446" height="885" alt="image" src="https://github.com/user-attachments/assets/65ee8c30-cf33-4994-b9ad-7f9e9e5784f3" />

### Receita

Lugar onde se pode encontrar diversas formas de fazer doces.

<img width="721" height="897" alt="image" src="https://github.com/user-attachments/assets/2cc308fc-1ca8-41a0-a190-d296f85ae667" />

### Cursos

lista as categorias e opções de cursos disponíveis para compra pelo usuário, bem como os respectivos detalhes de cada curso, como carga horária, nome do professor, principal foco, entre outros;

<img width="3360" height="3562" alt="image" src="https://github.com/user-attachments/assets/42d3c5e6-31fc-44bc-b221-03a680914c40" />

### Comunidade

Espaço para depoimentos, eventos e interação entre os usuários, objetivando não apenas a coleta de feedback, mas também proporcionando a troca de conhecimento entre os alunos;

<img width="505" height="906" alt="image" src="https://github.com/user-attachments/assets/48809520-e64e-4ae7-99d8-db6648ffb950" />

### Sobre nós

Apresenta a equipe de desenvolvedores, os chefes e professores, bem como a história do projeto

<img width="876" height="792" alt="image" src="https://github.com/user-attachments/assets/900ffca7-4001-48da-b0d9-0106db446148" />

### Assinatura

Mostra os diferentes planos disponíveis, seus respectivos preços e formas de pagamento

<img width="3366" height="2354" alt="image" src="https://github.com/user-attachments/assets/0a5e306f-edca-44dd-b0f4-747eb4cd0cb6" />

### Login e Cadastro

Permite que o usuário crie uma conta ou acesse seu perfil já criado previamente;

#### Cadastro
<img width="3360" height="3150" alt="image" src="https://github.com/user-attachments/assets/2dae7c06-3950-4421-af41-8ecce49d38c5" />

#### Login
<img width="3360" height="2440" alt="image" src="https://github.com/user-attachments/assets/d1d58553-a2f8-476e-9d52-25e71c4563d9" />

### Gestão Administrativa

Painel de administração da plataforma e gerenciamento da disponibilidade dos cursos. A única pessoa a ter acesso administrador será o dono da aplicação;

#### Criar Curso
<img width="3360" height="3280" alt="image" src="https://github.com/user-attachments/assets/d9c29121-5f83-4483-8bff-f198ce5edae3" />

#### Visualização dos cursos criados
<img width="3360" height="3280" alt="image" src="https://github.com/user-attachments/assets/0c609a7f-eee5-4eb5-b185-6f076ed10ec0" />

### Pagamento

Página para finalizar a contratação da assinatura com segurança e realizar o pagamento do plano escolhido;

<img width="1015" height="708" alt="image" src="https://github.com/user-attachments/assets/0ac881ae-5c2f-4897-8ea1-02390cc05f08" />




