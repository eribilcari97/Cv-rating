export default function Result({ result }) {
  return (
    <div>
      <h2>Score: {result.score}</h2>

      <h3>Strengths</h3>
      {result.strengths.map((s, i) => (
        <p key={i}>• {s}</p>
      ))}

      <h3>Weaknesses</h3>
      {result.weaknesses.map((w, i) => (
        <p key={i}>• {w}</p>
      ))}

      <h3>Suggestions</h3>
      {result.suggestions.map((s, i) => (
        <p key={i}>• {s}</p>
      ))}
    </div>
  );
}