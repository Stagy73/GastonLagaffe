import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    numeroTel: "",
    message: "",
  });

  const [envoiMessage, setEnvoiMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Réinitialiser le formulaire après l'envoi
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      numeroTel: "",
      message: "",
    });

    setEnvoiMessage(true);
  };

  return (
    <>
      <div className="contact">
        <h3>Nous contacter</h3>
      </div>
      <div className="contactMessage">
        {envoiMessage && <p>Message envoyé avec succès !</p>}
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              placeholder="Nom *"
              required
            />
          </label>
          <label htmlFor="prenom">
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              placeholder="Prénom *"
              required
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              required
            />
          </label>
          <label htmlFor="numeroTel">
            <input
              type="tel"
              name="numeroTel"
              value={formData.numeroTel}
              onChange={handleInputChange}
              placeholder="Téléphone *"
              required
            />
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message *"
              required
            />
          </label>
          <button id="pinkButton" type="submit">
            Envoyer
          </button>
        </form>
      </div>
      <div className="coordinate">
        <h4>Mes coordonnées</h4>
        <div className="coordinate_detail">
          <h5>Chez Gaston</h5>

          <p className="adresse">
            <p>Le roi d'la gaffe</p>
            <p>rue ne pas déranger je bosse</p>
            <p>00000 Le gang des Gaffeurs</p>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
