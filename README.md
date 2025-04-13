# Login com Google Simples (HTML, CSS e JS)

Este projeto é um exemplo **simples e direto** de como implementar o **login com Google** utilizando apenas **HTML, CSS e JavaScript puro**, sem frameworks ou dependências externas além da [Google Identity Services API](https://developers.google.com/identity/gsi/web).

A ideia é mostrar de forma clara como o processo funciona para que você possa adaptar facilmente em seu backend ou frontend mais robusto no futuro.

## 🚀 Como usar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/diogod2r/login-with-google.git
   cd login-with-google
   ```

2. **Crie um Client ID no Google Cloud**
   - Acesse: [Google Cloud Console](https://console.cloud.google.com/)
   - Crie um novo projeto (ou use um existente)
   - Vá em **APIs & Services > OAuth consent screen** e configure a tela de consentimento
   - Vá em **Credentials > Create Credentials > OAuth 2.0 Client IDs**
   - Escolha: **Web application**
   - Adicione `http://localhost` ou o domínio onde você vai rodar na lista de **Authorized JavaScript origins**
   - Copie seu **Client ID**

3. **Insira o Client ID no projeto**
   Abra o arquivo `script.js` e substitua a string `"YOUR_GOOGLE_CLIENT_ID"` pelo seu Client ID:

   ```js
   client_id: "SEU_CLIENT_ID_AQUI",
   ```

4. **Abra o projeto no navegador**
   Basta abrir o `index.html` com um navegador (duplo clique ou via Live Server).

---

## 🧠 O que esse projeto ensina?

- Como usar o Google Identity Services com `gsi/client`
- Como decodificar um JWT (JSON Web Token) no frontend
- Como renderizar uma interface de usuário com os dados do usuário logado
- Como remover e reexibir o botão de login (simulando um logout)
- Estilo de componente responsivo com CSS puro

---

## 🛠 Próximos passos

Você pode evoluir este exemplo para:
- Enviar o token JWT para o backend e validar com a [API do Google](https://oauth2.googleapis.com/tokeninfo)
- Criar sessões com cookies/headers seguros
- Integrar com Firebase Auth, Google Sheets, ou sua própria base de usuários

---

Se curtiu esse projeto ou te ajudou de alguma forma, deixa uma ⭐ no repositório!
