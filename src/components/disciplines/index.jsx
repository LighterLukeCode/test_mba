import styles from "./disciplines.module.scss";

const Disciplines = ({ disciplines }) => {
  return (
    <ul className={styles.disciplines__list}>
      {disciplines.map(discipline => (
        <li key={discipline._id} className={styles.discipline}>
          {discipline.string}
        </li>
      ))}
    </ul>
  );
};

export default Disciplines;
