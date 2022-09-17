import ProgramModule from "../programModule/programModule";
import styles from "./program.module.scss";

const Program = () => {
  return (
    <>
      <h3 className={styles.h3}>Антикризисное управление</h3>
      <div className={styles.div}>
        <ProgramModule />
        <ProgramModule />
      </div>
    </>
  );
};

export default Program;
