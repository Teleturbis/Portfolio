import styles from './Input.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {
  label: string;
  placeholder: string;
  changeHandler: (e: InputEvent) => void;
  value: string | undefined;
  id: string;
  isActive?: boolean;
}

interface InputEvent {
  element: string;
  value: string;
  function: string;
}

export default function LangSwitch(props: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <div
      className={`${styles.inputDiv} ${props.isActive ? styles.active : ''}`}
    >
      <label className={styles.label} htmlFor={props.label}>
        {t(props.label)}
      </label>
      <input
        className={styles.input}
        type='text'
        placeholder={t(props.placeholder)}
        onFocus={() =>
          props.changeHandler({
            element: props.id,
            value: '',
            function: 'focus',
          })
        }
        onBlur={() =>
          props.changeHandler({
            element: '',
            value: '',
            function: 'focus',
          })
        }
        onChange={(e) => {
          props.changeHandler({
            element: props.id,
            value: e.target.value,
            function: 'value',
          });
        }}
        value={props.value}
      />
    </div>
  );
}
