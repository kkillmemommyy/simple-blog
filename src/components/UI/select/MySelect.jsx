export const MySelect = ({ options, defaultOption, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>
        {defaultOption}
      </option>
      {options.map((o) => (
        <option value={o.value} key={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
};
