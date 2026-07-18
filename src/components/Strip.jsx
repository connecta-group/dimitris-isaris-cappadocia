const STRIP = [
  "Göreme Open Air Museum",
  "Paşabağ Monks Valley",
  "Devrent Imagination Valley",
  "Avanos pottery",
  "Sunrise balloons",
  "Private acoustic night",
  "Rose Valley at golden hour",
];

export default function Strip() {
  const items = [...STRIP, ...STRIP];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip__track">
        {items.map((s, i) => (
          <span className="strip__item" key={`${s}-${i}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
