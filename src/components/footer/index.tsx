import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.practice}>
        <h3 className={styles.title}>Практические модули</h3>
        <p className={styles.practice__text}>
          Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
        </p>
      </div>
      <div className={styles.exam}>
        <h3 className={styles.title}>Итоговая аттестация</h3>
        <ul className={styles.exam__list}>
          <li className={styles.exam__list_item}>
            Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
          </li>
          <li className={styles.exam__list_item}>Защита итоговой аттестационной работы</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
