import { useState } from 'react'
import Modal from '../components/Modal'
import { useActivity } from '../activity'

type DocItem = { id: string; title: string }

const OPEN_DOCS: DocItem[] = [
  { id: 'msa-xyz', title: 'MSA — XYZ Corp' },
  { id: 'nda-acme', title: 'NDA — Acme Inc' },
]
const CLOSED_DOCS: DocItem[] = [
  { id: 'safe-abc', title: 'SAFE — ABC Fund' },
  { id: 'dpa-north', title: 'DPA — NorthStar' },
]

export default function Docs() {
  const [selected, setSelected] = useState<DocItem | null>(null)
  const { items } = useActivity()

  const filtered = selected ? items.filter(a => {
    const t = selected.title.toLowerCase()
    const title = a.title.toLowerCase()
    return title.includes('msa') && t.includes('msa')
      || title.includes('nda') && t.includes('nda')
      || title.includes('safe') && t.includes('safe')
      || title.includes('dpa') && t.includes('dpa')
  }) : []

  return (
    <div style={{ padding: 16 }}>
      <h2>Negotiated Documents</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <section style={{ border: '1px solid #e5e9ef', borderRadius: 12, padding: 16 }}>
          <h3>Open Documents</h3>
          <ul>
            {OPEN_DOCS.map(d => (
              <li key={d.id}>
                <button style={{ background: 'transparent', border: 'none', padding: 0, color: '#1a4dd6', cursor: 'pointer' }} onClick={() => setSelected(d)}>{d.title}</button>
              </li>
            ))}
          </ul>
        </section>
        <section style={{ border: '1px solid #e5e9ef', borderRadius: 12, padding: 16 }}>
          <h3>Closed Documents</h3>
          <ul>
            {CLOSED_DOCS.map(d => (
              <li key={d.id}>
                <button style={{ background: 'transparent', border: 'none', padding: 0, color: '#1a4dd6', cursor: 'pointer' }} onClick={() => setSelected(d)}>{d.title}</button>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <h3 style={{ marginTop: 0 }}>{selected.title} — Activity</h3>
            {filtered.length === 0 && <div style={{ color: '#667085' }}>No related activity yet.</div>}
            {filtered.map((item) => (
              <div key={item.id} style={{ display: 'flex', gap: 12, padding: '12px 8px', borderBottom: '1px solid #f0f2f5' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#dbe7ff' }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  {item.meta && <div style={{ color: '#667085' }}>{item.meta}</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}