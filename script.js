const button = () => {
  return `<div id="buttonGoogleAuth"></div>`;
};

const googleAuth = () => {
  google.accounts.id.initialize({
    client_id:
      "YOUR_GOOGLE_CLIENT_ID", // https://console.cloud.google.com/auth/clients
    callback: googleResponse,
  });
  google.accounts.id.renderButton(document.getElementById("buttonGoogleAuth"), {
    theme: "outline",
    type: "standard",
    shape: "pill",
    theme: "outline",
    text: "continue_with",
    size: "large",
    logo_alignment: "left",
  });
  google.accounts.id.prompt();
};

const googleResponse = (response) => {
  const jwt = response.credential;
  const data = decodeToken(jwt);
  newCard(data);
};

const decodeToken = (jwt) => {
  const parts = jwt.split(".");
  const payload = JSON.parse(atob(parts[1]));
  return payload;
};

const card = (image, name, surname, email, id, verified) => {
  return `<div class="userCard" id="googleCard">
    <div class="userHeader"></div>
    <div class="userContent">
      <div class="userImage"><img src="${image}" alt="user"/>
      </div>
      <span class="userName">${name} ${surname}</span>
      <span class="userEmail">${email}</span>
      <span class="userId">${id}</span>
      <span class="userVerified" style="color: ${verified ? 'green' : 'red'};">${
    verified ? "Email verificado" : "email não verificado"
  }</span>
      <div class="userClose" onclick="removeCard()">✕</div>
    </div>
    </div>`;
};

const newCard = (data) => {
  document.getElementById("buttonGoogleAuth")?.remove();
  const content = card(
    data.picture,
    data.given_name,
    data.family_name,
    data.email,
    data.sub,
    data.email_verified
  );
  document.body.insertAdjacentHTML("beforeend", content);
};

const removeCard = () => {
  document.getElementById("googleCard")?.remove();
  document.body.insertAdjacentHTML("beforeend", button());
  googleAuth();
};

window.onload = () => {
  document.body.insertAdjacentHTML("beforeend", button());
  googleAuth();
};