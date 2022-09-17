import styles from "./programModule.module.scss";

const ProgramModule = () => {
  return (
    <div className={styles.div}>
      <h6 className={styles.h6}>
        <span className={styles.span}>1 модуль</span>
      </h6>

      <ul className={styles.ul}>
        <li>Маркетинговые стратегии антикризисного менеджмента</li>
        <li>Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение</li>
        <li>Правовые основы антикризисного управления</li>
        <li>Проектный менеджмент в антикризисном управлении</li>
        <li>Финансово-экономические инструменты антикризисного управления</li>
      </ul>
    </div>
  );
};

export default ProgramModule;
