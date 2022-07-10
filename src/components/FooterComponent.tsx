import React from "react";

// CSS
import "./styles/FooterComponent.scss";

export function FooterComponent() {
  return (
    <footer>
      <div>
        <span>
          Guilherme Henrique - Contacts:{" "}
          <a href="https://www.linkedin.com/in/guilherme-henrique-0bb264204/">
            <strong>Linkedin</strong>
          </a>
          <a href="https://github.com/Guilherme2014-ai">
            <strong>GitHub</strong>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5515988315201&text=Olá%2C%20envie%20sua%20mensagem%2C%20logo%20irei%20responder.">
            <strong>Whatsapp</strong>
          </a>
        </span>
      </div>
    </footer>
  );
}
