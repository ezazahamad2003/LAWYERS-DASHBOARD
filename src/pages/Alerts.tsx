export default function Alerts() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Client Alerts</h2>
      <p>Create posts shared to clients via My Legal Counsel.</p>
      <textarea style={{ width: '100%', minHeight: 120 }} placeholder="Write an alert..." />
      <div style={{ marginTop: 8 }}>
        <button>Publish</button>
      </div>
      <p style={{ marginTop: 12 }}>
        Example: <a target="_blank" rel="noreferrer" href="https://stikeman.com/en-ca/kh/canadian-technology-ip-law/left-on-the-sidelines-the-[…]-patent-appeal-board-rules-that-artificial-intelligence-cannot">Stikeman article</a>
      </p>
    </div>
  )
}