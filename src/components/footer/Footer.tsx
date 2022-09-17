import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.practice}>
        <h6 className={styles.h6}>Практические модули</h6>
        <p className={styles.p}>
          Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
        </p>
      </div>
      <div className={styles.exam}>
        <h6 className={styles.h6}>Итоговая аттестация</h6>
        <ul className={styles.ul}>
          <li>
            Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
          </li>
          <li>Защита итоговой аттестационной работы</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
