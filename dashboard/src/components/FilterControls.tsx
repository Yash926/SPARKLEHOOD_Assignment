interface Props {
    current: string;
    onChange: (value: string) => void;
  }
  
  const FilterControls = ({ current, onChange }: Props) => (
    <div className="filter-controls">
      {["All", "Low", "Medium", "High"].map((level) => (
        <button
          key={level}
          className={current === level ? "active" : ""}
          onClick={() => onChange(level)}
        >
          {level}
        </button>
      ))}
    </div>
  );
  
  export default FilterControls;
  