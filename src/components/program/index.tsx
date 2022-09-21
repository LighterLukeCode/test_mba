import ProgramModule from "../programModule";
import styles from "./program.module.scss";

const Program = () => {
  return (
    <>
      <h3 className={styles.program__title}>Антикризисное управление</h3>
      <div className={styles.program__content}>
        <ProgramModule />
        <ProgramModule />
      </div>
    </>
  );
};

export default Program;
