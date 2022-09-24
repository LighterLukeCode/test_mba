import styles from "./programModule.module.scss";
import { BrowserView, MobileView } from "react-device-detect";

import Collapse from "../collapse";
import Disciplines from "../disciplines";
import { SpespecializedSubjects } from "../../interfaces/Program";

interface Props {
  disciplines: SpespecializedSubjects[];
  numberModule: number;
}

const ProgramModule = ({ disciplines, numberModule }: Props) => {
  return (
    <>
      <BrowserView className={styles.module__content}>
        <h6 className={styles.moduleNumber}>
          <span className={styles.moduleNumber__inner}>{numberModule} модуль</span>
        </h6>
        <Disciplines disciplines={disciplines} />
      </BrowserView>

      <MobileView>
        <Collapse disciplines={disciplines} numberModule={numberModule} />
      </MobileView>
    </>
  );
};

export default ProgramModule;
