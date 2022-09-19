import styles from "./programModule.module.scss";
import { BrowserView, MobileView } from "react-device-detect";
import plusIcon from "../../images/plusIcon.png";
import minusIcon from "../../images/minusIcon.png";
import { useState } from "react";

const ProgramModule = () => {
  const [openModule, setOpenModule] = useState(false);
  return (
    <div className={styles.div}>
      <BrowserView>
        <h6 className={styles.h6}>
          <span className={styles.span}>1 модуль</span>
        </h6>
      </BrowserView>
      <MobileView>
        {openModule ? (
          <button className={styles.moduleBtn}>
            <img className={styles.minusIcon} src={minusIcon} alt="minusIcon" />
            <span className={styles.numberModule}>1 модуль</span>
          </button>
        ) : (
          <button className={styles.moduleBtn}>
            <img className={styles.plusIcon} src={plusIcon} alt="plusIcon" />
            <span className={styles.numberModule}>1 модуль</span>
          </button>
        )}
        {
          <button className={styles.moduleBtn}>
            <img className={styles.plusIcon} src={openModule ? minusIcon : plusIcon} alt="plusIcon" />
            <span className={styles.numberModule}>1 модуль</span>
          </button>
        }
      </MobileView>
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
