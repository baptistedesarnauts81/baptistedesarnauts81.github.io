import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  Modal,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useCallback, useMemo, useState } from "react";
import { getYearsMonthDiff } from "../../helpers/date";
import CalendarIcon from "../icons/CalendarIcon";
import LocationIcon from "../icons/LocationIcon";
import styles from "./styles.module.scss";

export default function CarreerCard({
  location,
  role,
  company,
  stack,
  dateBegin,
  dateEnd,
  details,
  image,
}) {
  const [openModal, setOpenModal] = useState(false);

  const duration = useMemo(
    () => getYearsMonthDiff(dateEnd, dateBegin),
    [dateEnd, dateBegin, getYearsMonthDiff]
  );

  const cardInfo = useCallback(() => {
    return (
      <div>
        <Typography variant="h5">{`${role} at ${company}`}</Typography>
        <div className={styles.location}>
          <LocationIcon size={18} color="black" className={styles.icon} />
          <Typography variant="subtitle1">{location}</Typography>
        </div>
        <div className={styles.duration}>
          <CalendarIcon color="black" size={20} className={styles.icon} />
          <Typography variant="subtitle1">
            {dateBegin?.format("YYYY-MM")}-
            {dateEnd === moment() ? "Now" : dateEnd?.format("YYYY-MM")} (
            {duration?.years
              ? `${duration?.years} year${
                  duration?.years > 1 ? "s" : ` ${duration?.months} months`
                }`
              : ` ${duration?.months} months`}
            )
          </Typography>
        </div>

        <div className={styles.skills}>
          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}>Stack : </span>
            {stack?.join(" - ")}
          </Typography>
        </div>
      </div>
    );
  }, [role, company, location, dateBegin, dateEnd, stack]);

  return (
    <>
      <Card className={styles.cardContainer}>
        <CardMedia component="img" height="140" image={image && image} />
        <CardContent>{cardInfo()}</CardContent>
        <div className={styles.separator} />
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setOpenModal(true)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={styles.modalCard}>
            {cardInfo()}
            {details && (
              <div>
                <ul>
                  {details?.map((elmt, index) => {
                    return (
                      <li key={index}>
                        <Typography variant="body1">{elmt}</Typography>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
}
