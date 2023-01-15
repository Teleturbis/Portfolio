import styles from './Contact.module.scss';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  isValidMail,
  isAlphabet,
  isAlphaNumericPunctuation,
} from '@teleturbis/js-validator';

import Input from '../ui/input/Input';

export default function About() {
  const { t } = useTranslation();
  const [focus, setFocus] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [buttonText, setButtonText] = useState<any>(
    t('contact:buttonText.send')
  );
  const [sendStatus, setSendStatus] = useState<string>('');
  const [isSendValid, setIsSendValid] = useState<boolean>(false);

  interface InputEvent {
    element: string;
    value: string | undefined;
    function: string;
  }

  function changeHandler(e: InputEvent) {
    switch (e.function) {
      case 'focus':
        changeFocus(e.element);
        break;

      case 'value':
        changeValue(e.element, e.value);
    }
  }

  function changeFocus(element: string) {
    setFocus(element === '' ? '' : element);
  }

  function changeValue(element: string, value: any) {
    switch (element) {
      case 'firstname':
        setFirstname(value);
        break;

      case 'lastname':
        setLastname(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'mail':
        setEmail(value);
        break;

      case 'organization':
        setOrganization(value);
        break;

      case 'message':
        setMessage(value);
        break;

      case 'topic':
        setTopic(value);
        break;

      default:
        break;
    }
  }

  function checkPhone() {
    if (phone) {
      return /^[0-9/\s\-]+$/.test(phone);
    } else {
      return true;
    }
  }

  async function sendMail() {
    setSendStatus('sending');
    const response: any = await axios(
      'https://portfolio-be-production-0fb4.up.railway.app/sendMail',
      {
        method: 'POST',
        data: {
          apiKey: 'QneE%afc<$-§yEVu}Z6>y<§aMs+SjJaSYnzrxQhgMeT',
          email: email,
          firstname: firstname,
          lastname: lastname,
          organization: organization,
          topic: topic,
          message: message,
          phone: phone || null,
        },
      }
    )
      .then((response) => {
        setSendStatus('sent');
        return response;
      })
      .catch((error) => {
        console.error(error?.response?.status, error?.code);
        setSendStatus('error');
      });

    if (response?.status === 200) {
      setButtonText(t('contact:buttonText.sent'));
      setFirstname('');
      setLastname('');
      setEmail('');
      setOrganization('');
      setTopic('');
      setMessage('');
      setPhone('');
    } else {
      setButtonText(t('contact:buttonText.error'));
    }
  }

  useEffect(() => {
    switch (sendStatus) {
      case 'sending':
        setButtonText(<div className={styles.loadingOutter} />);
        break;

      case 'sent':
        setButtonText(t('contact:buttonText.sent'));
        break;

      case 'error':
        setButtonText(t('contact:buttonText.error'));
        break;

      default:
        setButtonText(t('contact:buttonText.send'));
        break;
    }
  }, [sendStatus]);

  useEffect(() => {
    if (firstname && lastname && email && topic && organization && message) {
      if (
        isValidMail(email).isValid &&
        isAlphabet(firstname, { space: true }) &&
        isAlphabet(lastname, { space: true }) &&
        isAlphaNumericPunctuation(organization, { space: true }) &&
        isAlphaNumericPunctuation(topic, { space: true }) &&
        checkPhone()
      ) {
        setIsSendValid(true);
        return;
      }
    }

    setIsSendValid(false);
  }, [firstname, lastname, email, topic, organization, message, phone]);

  return (
    <main className={`${styles.main}`}>
      <div className={styles.descriptionDiv}>
        <h2>Kontaktiere mich!</h2>
        <p>
          Über eine Nachricht freue ich mich immer! Ich werde mich so schnell
          wie möglich bei dir melden. Du kannst mich auch gerne über das
          nebenstehende Kontaktformular kontaktieren. Du erhältst eine
          Bestätigungsmail, sobald ich deine Nachricht erhalten habe.
        </p>
        <ul>
          <li>
            <span>Email:</span>
            <a href='mail:me@kevinpoppe.com'>Me@KevinPoppe.com</a>
          </li>
          <li>
            <span>Telefon:</span>
            <a href='tel:+4916091118502'>0160 911 18 502</a>
          </li>
        </ul>
      </div>
      <div className={styles.formDiv}>
        <h2>Formular</h2>
        <div className={styles.name}>
          <Input
            id='firstname'
            label='Vorname *'
            placeholder='Vorname'
            changeHandler={changeHandler}
            value={firstname}
            isActive={focus === 'firstname'}
          />
          <Input
            id='lastname'
            label='Nachname *'
            placeholder='Nachname'
            changeHandler={changeHandler}
            value={lastname}
            isActive={focus === 'lastname'}
          />
        </div>
        <Input
          id='organization'
          label='Organisation *'
          placeholder='Organisation'
          changeHandler={changeHandler}
          value={organization}
          isActive={focus === 'organization'}
        />
        <Input
          id='mail'
          label='Email *'
          placeholder='Email'
          changeHandler={changeHandler}
          value={email}
          isActive={focus === 'mail'}
        />
        <Input
          id='phone'
          label='Telefon'
          placeholder='Telefon'
          changeHandler={changeHandler}
          value={phone}
          isActive={focus === 'phone'}
        />
        <Input
          id='topic'
          label='Betreff *'
          placeholder='Betreff'
          changeHandler={changeHandler}
          value={topic}
          isActive={focus === 'topic'}
        />
        <div className={styles.textDiv}>
          <textarea
            className={styles.textarea}
            placeholder='Deine Nachricht an mich'
            onChange={(e) => {
              changeHandler({
                element: 'message',
                value: e.target.value,
                function: 'value',
              });
            }}
            value={message}
            rows={10}
          />
        </div>
        <p className={styles.disclaimer}>* Erforderliches Feld</p>
        <button
          onClick={() => sendMail()}
          className={[styles.button, !isSendValid ? styles.disabled : ''].join(
            ' '
          )}
          disabled={!isSendValid}
        >
          {buttonText}
        </button>
      </div>
    </main>
  );
}

// TODO: Make Responsive
