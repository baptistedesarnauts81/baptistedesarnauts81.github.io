import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

import Map from "../../../../shared/components/Map";
import {
  dateReference,
  experiences,
  possibleCountries,
} from "../../../../shared/constants/career";
import moment from "moment";
import { Slider } from "@mui/material";
import classNames from "classnames";

export default function Career() {
  const [month, setMonth] = useState(0);
  const isPristine = useRef(true);

  useEffect(() => {
    if (month > 0 && isPristine?.current) {
      isPristine.current = false;
    }
  }, [month]);

  const getDate = (val) => {
    return moment(dateReference).add(val, "months").format("YYYY-MM");
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slider
          valueLabelDisplay='auto'
          step={1}
          max={moment().diff(dateReference, "months")}
          value={month}
          valueLabelFormat={getDate}
          onChange={(e) => setMonth(e.target.value)}
          marks={experiences.map((exp) => {
            return {
              value: exp.ts_beg.diff(dateReference, "months"),
              label: exp.title,
            };
          })}
        />
      </div>
      <div
        className={classNames(styles.mapContainer, {
          [styles.mapContainerShow]: !isPristine?.current,
        })}
      >
        <Map
          country={possibleCountries.canada}
          selectedDate={moment(dateReference).add(month, "months")}
        />
        <Map
          country={possibleCountries.france}
          selectedDate={moment(dateReference).add(month, "months")}
        />
      </div>
    </div>
  );
}
