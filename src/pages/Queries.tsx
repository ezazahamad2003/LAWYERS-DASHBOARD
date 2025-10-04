export default function Queries() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Legal Queries</h2>
      <p>Filter by client, topic, etc.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <input placeholder="Search topic" />
        <select>
          <option>All Clients</option>
          <option>ABC Corp</option>
          <option>XYZ Corp</option>
        </select>
      </div>
      <ul style={{ marginTop: 12 }}>
        <li>US Sales Agent considerations — open to view details</li>
        <li>Data retention policy — open to view details</li>
      </ul>
    </div>
  )
}