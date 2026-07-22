import { useLang } from "../i18n/LanguageProvider";

export default function Strip() {
  const { t } = useLang();
  const items = [...t.strip, ...t.strip];
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
