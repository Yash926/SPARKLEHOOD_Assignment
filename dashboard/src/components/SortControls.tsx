interface Props {
    current: "newest" | "oldest";
    onChange: (value: "newest" | "oldest") => void;
  }
  
  const SortControls = ({ current, onChange }: Props) => (
    <div className="sort-controls">
      <select value={current} onChange={(e) => onChange(e.target.value as any)}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
  
  export default SortControls;
  