import React from "react";

// CSS
import "./styles/FooterComponent.scss";

export function FooterComponent() {
  return (
    <footer>
      <div>
        <span>
          Verygood Muhirwa - Contacts:{" "}
          <a href="https://www.linkedin.com/in/verygood-muhirwa-39a6b225b/">
            <strong>Linkedin</strong>
          </a>
          <a href="https://github.com/VerygoodMuhirwa">
            <strong>GitHub</strong>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+250787023438&text=Olá%2C%20envie%20sua%20mensagem%2C%20logo%20irei%20responder.">
            <strong>Whatsapp</strong>
          </a>
        </span>
      </div>
    </footer>
  );
}
