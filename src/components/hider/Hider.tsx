import styles from "./hider.module.scss";
import plusIcon from "../../images/plusIcon.png";
import minusIcon from "../../images/minusIcon.png";
import { useRef, useState } from "react";

const Hider = () => {
  const [openModule, setOpenModule] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null);
  const [hider, setHider] = useState("0px");

  const toggleModuleList = () => {
    setOpenModule(!openModule);

    if (!openModule) {
      setHider(targetRef.current?.scrollHeight + "px");
    } else {
      setHider("0px");
    }
  };

  return (
    <>
      <button onClick={toggleModuleList} className={`${styles.moduleBtn} ${openModule ? styles.moduleBtnOpen : ""}`}>
        <img className={styles.icon} src={openModule ? minusIcon : plusIcon} alt="icon" />
        <span className={styles.numberModule}>1 модуль</span>
      </button>
      <div ref={targetRef} className={styles.list} style={{ maxHeight: hider }}>
        <ul className={styles.ul}>
          <li>Маркетинговые стратегии антикризисного менеджмента</li>
          <li>Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение</li>
          <li>Правовые основы антикризисного управления</li>
          <li>Проектный менеджмент в антикризисном управлении</li>
          <li>Финансово-экономические инструменты антикризисного управления</li>
        </ul>
      </div>
    </>
  );
};

export default Hider;
