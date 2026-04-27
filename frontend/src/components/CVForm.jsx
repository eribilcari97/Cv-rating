import { useState } from "react";

export default function CVForm({ onAnalyze }) {
  const [cvText, setCvText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(cvText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={cvText}
        onChange={(e) => setCvText(e.target.value)}
        placeholder="Paste your CV..."
      />
      <button type="submit">Analyze</button>
    </form>
  );
}