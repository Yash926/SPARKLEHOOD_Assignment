// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import { Incident } from "./types/incident";
import IncidentCard from "./components/IncidentCard";
import FilterControls from "./components/FilterControls";
import SortControls from "./components/SortControls";
import ReportForm from "./components/ReportForm";
import "./App.css";
import logo from "./assets/logo.png";
const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const addIncident = (newIncident: Omit<Incident, "id">) => {
    const newId = incidents.length + 1;
    setIncidents([
      {
        ...newIncident,
        id: newId,
      },
      ...incidents,
    ]);
  };

  const filtered = incidents.filter(
    (incident) =>
      severityFilter === "All" || incident.severity === severityFilter
  );

  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="app-container">
      <div className="header">
      <img src={logo} alt="Dashboard Logo" className="logo" />
      <h1>AI Safety Incident Dashboard</h1>
    </div>
      <div className="controls">
        <FilterControls
          current={severityFilter}
          onChange={setSeverityFilter}
        />
        <SortControls current={sortOrder} onChange={setSortOrder} />
      </div>
      <ReportForm onSubmit={addIncident} />
      <div className="incident-list">
        {sorted.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
}

export default App;

