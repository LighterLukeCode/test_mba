import ProgramModule from "../programModule";
import styles from "./program.module.scss";
import { Program as ProgramType } from "../../interfaces/Program";

interface Props {
  program: ProgramType;
}

const Program = ({ program }: Props) => {
  return (
    <>
      <h3 className={styles.program__title}>{program.title}</h3>
      <div className={styles.program__content}>
        <ProgramModule disciplines={program.specializedSubjects.slice(0, 5)} numberModule={1} />
        <ProgramModule disciplines={program.specializedSubjects.slice(5, 10)} numberModule={2} />
      </div>
    </>
  );
};

export default Program;
