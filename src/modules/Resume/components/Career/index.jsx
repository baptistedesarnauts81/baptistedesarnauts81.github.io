import React, { useRef } from "react";
import CarreerCard from "../../../../shared/components/CarreerCard";
import { experiences } from "../../../../shared/constants/career";
import styles from "./styles.module.scss";
import globalStyles from "../../../../shared/styles/global.module.scss";
import classNames from "classnames";
import useIntersectObserver from "../../../../shared/hooks/useIntersectObserver";
import { Typography } from "@mui/material";

export default function Career() {
  const careerCardRef = useRef();

  const show = useIntersectObserver({ ref: careerCardRef, reset: true });

  return (
    <section className={styles.fullHeight}>
      <div className={styles.title}>
        {/* <Typography variant="h4">EXPERIENCES</Typography> */}
      </div>
      <div ref={careerCardRef} className={styles.container}>
        {experiences.map((exp, index) => {
          if (exp.type === "job") {
            return (
              <div
                className={classNames(styles.card, globalStyles.hidden, {
                  [globalStyles.show]: show,
                })}
                style={{ transitionDelay: `${index * 100}ms` }}
                key={index}
              >
                <CarreerCard
                  role={exp.title}
                  location={exp.city.title}
                  company={exp.company}
                  stack={exp.stack}
                  dateBegin={exp.ts_beg}
                  dateEnd={exp.ts_end}
                  details={exp.details}
                  image={exp.city.imgUrl}
                />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
