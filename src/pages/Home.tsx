import { useActivity } from '../activity'

export default function Home() {
  const { items } = useActivity()
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr 1.2fr', gap: 16, padding: 16 }}>
      {/* Column 1 - Profile */}
      <section style={{ border: '1px solid #e5e9ef', borderRadius: 12, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Profile</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#eef3ff' }} />
          <div>
            <div style={{ fontWeight: 600 }}>Your Name</div>
            <div style={{ color: '#667085', fontSize: 13 }}>Firm Name • Partner</div>
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <button>Upload Firm Logo</button>
          <button>Upload Photo</button>
          <button>Edit Details</button>
        </div>
        <p style={{ color: '#667085', fontSize: 13 }}>Updates reflect in Founders Dashboard → My Legal Counsel</p>
      </section>

      {/* Column 2 - LinkedIn-style Activity Feed */}
      <section style={{ border: '1px solid #e5e9ef', borderRadius: 12, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Activity</h3>
        {items.map((item) => (
          <div key={item.id} style={{ display: 'flex', gap: 12, padding: '12px 8px', borderBottom: '1px solid #f0f2f5' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#dbe7ff' }} />
            <div>
              <div style={{ fontWeight: 600 }}>{item.title}</div>
              {item.meta && <div style={{ color: '#667085' }}>{item.meta}</div>}
            </div>
          </div>
        ))}
      </section>

      {/* Column 3 - Metrics */}
      <section style={{ border: '1px solid #e5e9ef', borderRadius: 12, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Insights</h3>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 600 }}>Top Templates Used</div>
          <ul>
            <li>Mutual NDA</li>
            <li>Master Services Agreement</li>
            <li>Sales Contractor</li>
          </ul>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 600 }}>Top Query Topics</div>
          <ul>
            <li>Hiring contractors</li>
            <li>Data processing addendums</li>
            <li>Equity financings</li>
          </ul>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 600 }}>Active Clients</div>
          <ul>
            <li>ABC Corp — 12 activities</li>
            <li>XYZ Corp — 9 activities</li>
            <li>Acme Inc — 7 activities</li>
            <li>NorthStar — 6 activities</li>
            <li>Beta LLC — 5 activities</li>
          </ul>
        </div>
      </section>
    </div>
  )
}