export default function Templates() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Template Library</h2>
      <p>Updating a template syncs all applicable versions in Founder Dashboard.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button>Add New Template</button>
        <button>Share Template</button>
      </div>
      <ul style={{ marginTop: 12 }}>
        <li>Mutual NDA v1.3</li>
        <li>Master Services Agreement v2.0</li>
        <li>SAFE (Standard) v1.1</li>
      </ul>
    </div>
  )
}