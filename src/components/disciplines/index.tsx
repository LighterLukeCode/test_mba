import { useAppSelector } from "../../redux/hooks";
import styles from "./disciplines.module.scss";

const Disciplines = () => {
  const { items } = useAppSelector(state => state.programsSlice);

  return (
    <ul className={styles.disciplines__list}>
      <li className={styles.discipline}>Маркетинговые стратегии антикризисного менеджмента</li>
      <li className={styles.discipline}>
        Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение
      </li>
      <li className={styles.discipline}>Правовые основы антикризисного управления</li>
      <li className={styles.discipline}>Проектный менеджмент в антикризисном управлении</li>
      <li className={styles.discipline}>Финансово-экономические инструменты антикризисного управления</li>
    </ul>
  );
};

export default Disciplines;
