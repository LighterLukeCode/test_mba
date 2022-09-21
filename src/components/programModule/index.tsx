import styles from "./programModule.module.scss";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";

import Collapse from "../collapse";
import Disciplines from "../disciplines";

const ProgramModule = () => {
  return (
    <>
      <BrowserView>
        <div className={styles.module__content}>
          <h6 className={styles.moduleNumber}>
            <span className={styles.moduleNumber__inner}>1 модуль</span>
          </h6>
          <Disciplines />
        </div>
      </BrowserView>

      <MobileView>
        <Collapse />
      </MobileView>
    </>
  );
};

export default ProgramModule;
