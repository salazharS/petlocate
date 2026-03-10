# 🐾 Pet Locate

**Pet Locate** é um aplicativo web progressivo (PWA) criado para ajudar tutores a **cadastrar, localizar e proteger seus pets**.  
Através de **QR Codes personalizados**, o sistema permite que qualquer pessoa que encontrar o animal acesse instantaneamente suas informações e entre em contato com o tutor.

---

##  Demonstração

 **Acesse o projeto:** https://pet-locate-42222.web.app/.  

---

##  Sumário
- [Descrição](#-descrição)
- [Recursos Principais](#-recursos-principais)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [PWA e Service Worker](#-pwa-e-service-worker)
- [Capturas de Tela](#-capturas-de-tela)

---

##  Descrição

O Pet Locate é um web app progressivo (PWA) desenvolvido para o gerenciamento e identificação de animais de estimação, com foco em rastreamento, registro e recuperação de pets perdidos.

Cada cadastro de pet gera automaticamente um QR Code único, que redireciona para uma página pública de identificação, exibindo informações essenciais como nome, foto, raça, cor e dados de contato do tutor.
Essas páginas podem ser acessadas por qualquer pessoa que encontrar o animal, facilitando o contato direto com o responsável.

O sistema permite que tutores gerenciem múltiplos cadastros, consultem seus tokens disponíveis e acompanhem o histórico de localização dos pets dentro de uma interface responsiva e organizada.

O controle de acesso é feito por meio de autenticação via Firebase, e o modelo de utilização é baseado em tokens administrados por um usuário com perfil de Admin, responsável por liberar o uso da plataforma.
Cada novo cadastro consome um token.

---

##  Recursos Principais

 **Autenticação com Google** via Firebase  
 **Cadastro e edição de pets** com foto e dados do tutor  
 **Geração automática de QR Codes**  
 **Painel administrativo de tokens**  
 **Página pública do pet** com mapa e informações   

---

##  Arquitetura do Projeto

```bash
localizacao/
└── public/
    ├── index.html                   # Tela de login e autenticação
    ├── 404.html                     # Página de erro personalizada
    ├── manifest.json                # Manifesto principal do PWA
    ├── service-worker.js            # Cache principal e funcionamento offline
    ├── firebase-messaging-sw.js     # Worker do Firebase Messaging (notificações)
    ├── package.json                 # Dependências do projeto
    ├── package-lock.json            # Controle de versões das dependências
    ├── node_modules/                # Dependências locais (npm)
    │
    └── pets/
        ├── dashboard.html           # Painel principal do tutor
        ├── add_edit_pet.html        # Formulário de cadastro/edição de pet
        ├── admin_tokens.html        # Painel administrativo de tokens
        ├── pet_locate.html          # Página pública (QR Code)
        ├── manifest.json            # Manifesto específico da seção /pets
        ├── service-worker.js        # Cache específico da seção /pets
        └── images/                  # Ícones, logos e fotos dos pets
```

---

##  Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-------------|------------|
| **HTML5 / CSS3 / JS** | Estrutura e estilo da aplicação |
| **Firebase (Auth & Firestore)** | Login e armazenamento de dados |
| **PWA (Manifest + Service Worker)** | Instalação e modo offline |
| **QRCode.js** | Geração de QR Codes para pets |
| **Google Maps Embed API** | Exibição do endereço do tutor |
| **Toast / Modal System** | Notificações e feedback ao usuário |

---

##  PWA e Service Worker

O app foi configurado para funcionar **offline** (ainda em fase de testes):
- `service-worker.js` gerencia o cache dos principais arquivos;
- `manifest.json` define ícones, cores e nome do app;
- É possível **instalar o Pet Locate** em dispositivos móveis e desktops.

Ocorre alguns erros de cache dentro de sistemas iOS. 

---

##  Capturas de Tela 

<img width="2330" height="2339" alt="image" src="https://github.com/user-attachments/assets/3ec0e88b-f604-4f9a-948e-1c0628c4d535" />
> - `pet_locate.html` — Página pública via QR (https://pet-locate-42222.web.app/pets/pet_locate.html?id=UKjmnB2MeHmhS09uGqdv)


<img width="2528" height="1326" alt="image" src="https://github.com/user-attachments/assets/b0830a96-4ffc-4c5a-b767-5d64fd3f12bd" />
> - `dashboard.html` — Painel de pets  

