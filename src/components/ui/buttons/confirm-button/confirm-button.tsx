import styles from './confirm-button.module.css';
type ConfirmButtonProps = {
  buttonText: string;
};

export const ConfirmButton = ({ buttonText }: ConfirmButtonProps) => {
  return <button className={styles['btn-confirm']}>{buttonText}</button>;
};
