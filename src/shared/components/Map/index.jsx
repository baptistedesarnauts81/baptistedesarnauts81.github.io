import React, { useCallback, useMemo, useRef } from "react";
import * as d3 from "d3";
import useMap from "../../hooks/useMap";
import styles from "./styles.module.scss";

import countries from "../../resources/countries2.json";
import { experiences, possibleCountries } from "../../constants/career";

export default function Map({ country, selectedDate }) {
  const mapRef = useRef();

  const [pathGenerator, projection, mapDimension, height] = useMap({
    mapRef,
    country: country,
  });

  const drawCountries = useCallback(() => {
    return (
      pathGenerator &&
      countries.map((shape) => {
        if (
          Object.values(possibleCountries).includes(
            shape?.properties?.name_long
          )
        ) {
          return (
            <path
              key={shape.properties.subunit}
              d={pathGenerator(shape)}
              fill='#9980FA'
              stroke='#fff'
            >
              <title>{shape.properties.name}</title>
            </path>
          );
        }
      })
    );
  }, [pathGenerator, countries]);

  const map = useMemo(() => drawCountries(), [drawCountries]);

  return (
    <div ref={mapRef} className={styles.mapContainer}>
      {pathGenerator && height && (
        <svg width={mapDimension.width} height={height}>
          <g>
            <path
              d={pathGenerator(d3.geoGraticule10())}
              fill='none'
              stroke='#fff'
            />
            {map}
            {experiences.map((exp) => {
              if (exp.country === country && selectedDate > exp.ts_beg) {
                return (
                  <circle
                    key={`marker-${exp.title}`}
                    cx={projection(exp.city.coord)[0]}
                    cy={projection(exp.city.coord)[1]}
                    r={5}
                    fill='#E91E63'
                    stroke='#FFFFFF'
                    //   onClick={() => handleMarkerClick(i)}
                    //   onMouseEnter={() => setIsRotate(false)}
                  />
                );
              }
            })}
          </g>
        </svg>
      )}
    </div>
  );
}
