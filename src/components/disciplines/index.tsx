import { SpespecializedSubjects } from "../../interfaces/Program";
import styles from "./disciplines.module.scss";

interface Props {
  disciplines: SpespecializedSubjects[];
}

const Disciplines = ({ disciplines }: Props) => {
  return (
    <ul className={styles.disciplines__list}>
      {disciplines.map(discipline => (
        <li key={discipline.id} className={styles.discipline}>
          {discipline.string}
        </li>
      ))}
    </ul>
  );
};

export default Disciplines;
