import styles from "./collapse.module.scss";
import plusIcon from "../../images/plusIcon.png";
import minusIcon from "../../images/minusIcon.png";
import { useRef, useState } from "react";
import Disciplines from "../disciplines";

// : PropsWithChildren
const Collapse = ({ disciplines, numberModule }) => {
  const [openModule, setOpenModule] = useState(false);

  const targetRef = useRef(null);
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
        <span className={styles.numberModule}>{numberModule} модуль</span>
      </button>
      <div ref={targetRef} className={styles.list__content} style={{ maxHeight: hider }}>
        <Disciplines disciplines={disciplines} />
      </div>
    </>
  );
};

export default Collapse;
