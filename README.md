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
- **Banco:** H2 (desenvolvimento)

O objetivo é oferecer uma experiência profissional, simples e didática tanto para quem cria cursos quanto para quem deseja aprender.

---

## 🛠 Requisitos para preparar o ambiente de desenvolvimento

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

## 🛢️ Configuração do Banco de Dados (MySQL)

1. Certifique-se de que o **MySQL** está instalado e rodando na porta padrão **3306**.

2. Crie o banco de dados:
   ```sql
   CREATE DATABASE sugarlab_db;
   ```
3. Verifique ou ajuste as credenciais no arquivo **application.properties**
