import React, { useRef } from "react";
import styles from "./styles.module.scss";

import Timeline from "@mui/lab/Timeline";
import { experiences } from "../../../../shared/constants/career";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Card, CardContent, Typography } from "@mui/material";
import LocationIcon from "../../../../shared/components/icons/LocationIcon";
import classNames from "classnames";
import useIntersectObserver from "../../../../shared/hooks/useIntersectObserver";

export default function Education() {
  const containerRef = useRef();

  const show = useIntersectObserver({ ref: containerRef, reset: true });
  return (
    <div
      ref={containerRef}
      className={classNames(styles.timelineContainer, styles.hidden, {
        [styles.show]: show,
      })}
    >
      <Timeline position="alternate">
        {experiences.map((exp, index) => {
          if (exp.type === "education") {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="text.secondary">
                  {exp.ts_beg.format("YYYY-MM")} -{" "}
                  {exp.ts_end.format("YYYY-MM")}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={styles.timelineContent}>
                  <Card variant="outlined" className={styles.card}>
                    <CardContent>
                      <Typography variant="h6">
                        {exp.title} at {exp.school}
                      </Typography>
                      <div className={styles.location}>
                        <LocationIcon
                          size={18}
                          color="black"
                          className={styles.icon}
                        />
                        <Typography variant="subtitle1">
                          {exp.city.title}
                        </Typography>
                      </div>
                      <Typography variant="body2" color="text.secondary">
                        {exp?.details}
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            );
          }
        })}
      </Timeline>
    </div>
  );
}
