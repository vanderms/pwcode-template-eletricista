import selectors from './map.module.scss';
import { useRef } from "react";
import { useEffect } from "react";


export const LocationMap: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const isActive = useRef<boolean>(false);
    
  useEffect(() => {
    const L = typeof document !== 'undefined' ? (window as any).L : null;

    if (L && !isActive.current) {
      const location: number[] = [-23.5391953, -46.6322987];

      const map = L.map(container.current as any, {
        zoomControl: false,
      }).setView(location, 15);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            'pk.eyJ1IjoidmFuZGVybXMiLCJhIjoiY2wwbjRxc3kwMWN2MTNrbjVqdmZta2RjNiJ9.IKMvizZ9vPC-NHT1bRDXCA',
        }
      ).addTo(map);

      L.marker(location).addTo(map);
      isActive.current = true;
    }
  }, []);

  return (
    <div className={selectors["container"]}>
      <div className={selectors["map"]} ref={container}  />
    </div>
  )
}