import { useState } from "react";
import { Incident, Severity } from "../types/incident";

interface Props {
  onSubmit: (incident: Omit<Incident, "id">) => void;
}

const ReportForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [severity, setSeverity] = useState<Severity>("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc) return alert("All fields are required!");

    onSubmit({
      title,
      description: desc,
      severity,
      reported_at: new Date().toISOString(),
    });

    setTitle("");
    setDesc("");
    setSeverity("Low");
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <h2>Report New Incident</h2>
      <input
        type="text"
        placeholder="Incident Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <select value={severity} onChange={(e) => setSeverity(e.target.value as Severity)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReportForm;
