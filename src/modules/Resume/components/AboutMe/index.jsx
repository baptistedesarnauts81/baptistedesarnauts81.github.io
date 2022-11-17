import React from "react";
import moment from "moment";
import styles from "./styles.module.scss";
import BaptisteImage from "./resources/pp.jpeg";
import LocationIcon from "../../../../shared/components/icons/LocationIcon";
import BirthdayIcon from "../../../../shared/components/icons/BirthdayIcon";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div>
        <img src={BaptisteImage} className={styles.profilePicture} />
      </div>
      <div className={styles.bioContainer}>
        <div className={styles.bio}>
          <p>About Me</p>
          <div>
            <p>
              Proven work experiences in Machine Learning and Front-End
              development. Computer science major at École Centrale de Lyon, one
              of the leading engineering French university. Looking for a
              software developer position starting as soon as possible in
              Montréal.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.locationIcon}>
            <LocationIcon size={24} color='#fff' />
            <span className={styles.description}>Montreal</span>
          </div>
          <div className={styles.bdIcon}>
            <BirthdayIcon size={24} color='#fff' />
            <span className={styles.description}>
              {moment().diff("1997-02-14", "years")} years old
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
