import React, { useRef } from "react";
import moment from "moment";
import styles from "./styles.module.scss";
import globalStyles from "../../../../shared/styles/global.module.scss";
import BaptisteImage from "./resources/pp.png";
import LocationIcon from "../../../../shared/components/icons/LocationIcon";
import BirthdayIcon from "../../../../shared/components/icons/BirthdayIcon";
import { Typography } from "@mui/material";
import useIntersectObserver from "../../../../shared/hooks/useIntersectObserver";
import classNames from "classnames";

export default function AboutMe() {
  const bioRef = useRef();

  const show = useIntersectObserver({ ref: bioRef, reset: true });

  return (
    <section className={styles.container}>
      <div className={styles.profilePicture}>
        <img src={BaptisteImage} className={styles.pp} />
      </div>
      <div
        ref={bioRef}
        className={classNames(styles.bioContainer1, globalStyles.hidden, {
          [globalStyles.show]: show,
        })}
      >
        <div className={styles.bioContainer2}>
          <div className={styles.bio}>
            <Typography variant="h5"> About me</Typography>
            <div>
              <Typography variant="body2">
                Proven work experiences in Machine Learning and Front-End
                development. Computer science major at École Centrale de Lyon,
                one of the leading engineering French university. Looking for a
                software developer position starting as soon as possible in
                Montréal.
              </Typography>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.locationIcon}>
              <LocationIcon size={24} color="#000" />
              <span className={styles.description}>Montreal</span>
            </div>
            <div className={styles.bdIcon}>
              <BirthdayIcon size={24} color="#000" className={styles.icon} />
              <div className={styles.description}>
                {moment().diff("1997-02-14", "years")} years old
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
