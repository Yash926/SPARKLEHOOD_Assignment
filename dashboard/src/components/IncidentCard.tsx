import React, { useState } from "react";

interface Incident {
  id: number;
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
  reported_at: string;
}

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const severityClass = `severity-${incident.severity.toLowerCase()}`;

  return (
    <div className={`card ${severityClass}`}>
      <div className="card-header">
        <h3>{incident.title}</h3>
        <div className={`severity ${severityClass}`}>
          Severity: {incident.severity}
        </div>
        <p>Reported on: {new Date(incident.reported_at).toLocaleString()}</p>
      </div>
      <button onClick={toggleDescription}>
        {isExpanded ? "Hide Details" : "View Details"}
      </button>
      {isExpanded && <p className="description">{incident.description}</p>}
    </div>
  );
};

export default IncidentCard;
