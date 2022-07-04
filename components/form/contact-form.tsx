import selectors from './contact-form.module.scss';
import { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');  

  return (
    <form className={selectors['contact-form']} data-cmp='contact-form' onSubmit={(e) => {
      e.preventDefault();
      setName('');
      setEmail('');
      setMessage('');
    }}>
      <div className={selectors["item-container"]}>
        <label htmlFor='name-input'>Nome</label>
        <input type="text" name="name" id="name-input" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
      </div>
      <div className={selectors["item-container"]}>
        <label htmlFor='email-input'>Email</label>
        <input type="email" name="email" id="email-input" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
      </div>
      <div className={selectors["item-container"]}>
        <label htmlFor="message-textarea">Mensagem</label>
        <textarea name="message" id="message-textarea" value={ message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
      </div>
      <input className={selectors['submit-btn']} type="submit" value="Enviar" />
    </form>
  )
}