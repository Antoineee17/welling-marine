"use client"; // Obligatoire pour utiliser les states
import React, {  useState } from 'react';
import './contact.css';

const Contact = () => {
  const [status, setStatus] = useState<null | 'sending' | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formEntries = new FormData(form);

    const formData = {
      firstname: formEntries.get('firstname')?.toString() || '',
      lastname: formEntries.get('lastname')?.toString() || '',
      phone: formEntries.get('phone')?.toString() || '',
      email: formEntries.get('email')?.toString() || '',
      message: formEntries.get('message')?.toString() || '',
    };

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group">
            <label className="label">Prénom</label>
            <input name="firstname" type="text" className="input-line" required />
          </div>
          <div className="form-group">
            <label className="label">Nom</label>
            <input name="lastname" type="text" className="input-line" required />
          </div>
        </div>

        <div className="form-group">
          <label className="label">Numéro de téléphone</label>
          <input name="phone" type="tel" className="input-line" style={{ width: '80%' }} />
        </div>

        <div className="form-group">
          <label className="label">Email</label>
          <input name="email" type="email" className="input-line" style={{ width: '90%' }} required />
        </div>

        <div className="form-group">
          <label className="label">Message</label>
          <textarea 
            name="message"
            className="textarea-message"
            placeholder="Bonjour, j'aimerais un welling marine sur mesure."
            required
          />
        </div>

        <div className="submit-container">
          <button type="submit" className="btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
        
        {status === 'success' && <p style={{color: '#FFA76C', textAlign: 'center', marginTop: '10px'}}>Message envoyé avec succès !</p>}
        {status === 'error' && <p style={{color: 'red', textAlign: 'center', marginTop: '10px'}}>Erreur lors de l'envoi.</p>}
      </form>
    </div>
  );
};

export default Contact;