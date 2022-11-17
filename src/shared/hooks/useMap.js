import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { countryPosition } from "../constants/career";

const MAP = "geoMercator";

export default function useMap({ mapRef, country }) {
  const [mapDimension, setMapDimension] = useState({
    width: 0.4 * window.innerWidth,
    height: window.innerHeight,
  });
  const pathGenerator = useRef();
  const projection = useRef();
  const height = useRef();

  useEffect(() => {
    if (mapRef?.current) {
      const sphere = { type: "Sphere" };

      const projectionFunction = d3[MAP];
      projection.current = projectionFunction()
        .fitWidth(mapDimension.width, sphere)
        .center(countryPosition[country].position)
        .scale(countryPosition[country].scale)
        .translate([mapDimension.width / 2, mapDimension.height / 3]);

      pathGenerator.current = d3.geoPath(projection.current);
      const [[x0, y0], [x1, y1]] = pathGenerator.current.bounds(sphere);

      height.current = y1;

      //Observer
      const ro = new ResizeObserver(() => {
        setMapDimension({
          width: 0.4 * window.innerWidth,
          height: window.innerHeight,
        });
      });
      ro.observe(mapRef.current);
      return () => {
        ro.unobserve(mapRef.current);
      };
    }
  }, [mapDimension.width, mapRef]);

  return [
    pathGenerator.current,
    projection.current,
    mapDimension,
    height.current,
  ];
}
