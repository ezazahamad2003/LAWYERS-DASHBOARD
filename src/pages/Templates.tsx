import { useMemo, useState } from 'react'
import { useActivity } from '../activity'
import Modal from '../components/Modal'

type Template = {
  id: string
  name: string
  version: number
  sharedWith: string[]
}

export default function Templates() {
  const { add } = useActivity()
  const [templates, setTemplates] = useState<Template[]>([{
    id: 'nda', name: 'Mutual NDA', version: 3, sharedWith: ['ABC Corp']
  }, { id: 'msa', name: 'Master Services Agreement', version: 2, sharedWith: ['XYZ Corp'] }, { id: 'safe', name: 'SAFE (Standard)', version: 1, sharedWith: [] }])

  const [addOpen, setAddOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState<null | Template>(null)
  const [editOpen, setEditOpen] = useState<null | Template>(null)

  const sorted = useMemo(() => templates.slice().sort((a,b)=>a.name.localeCompare(b.name)), [templates])

  function addTemplate(name: string) {
    setTemplates(prev => [...prev, { id: name.toLowerCase().replace(/\s+/g,'-'), name, version: 1, sharedWith: [] }])
    add({ id: 'add', title: `Template added — ${name}`, meta: 'Appears in Founder Dashboard' })
  }
  function bumpVersion(t: Template) {
    setTemplates(prev => prev.map(p => p.id === t.id ? { ...p, version: p.version + 1 } : p))
    add({ id: 'bump', title: `Version bumped — ${t.name} v${t.version + 1}` })
  }
  function shareTemplate(t: Template, client: string) {
    setTemplates(prev => prev.map(p => p.id === t.id ? { ...p, sharedWith: Array.from(new Set([...p.sharedWith, client])) } : p))
    add({ id: 'share', title: `Shared — ${t.name} with ${client}`, meta: 'Visible in Founder Dashboard' })
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Template Library</h2>
      <p>Updating a template here automatically updates applicable templates in the Founder Dashboard with version history.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setAddOpen(true)}>Add New Template</button>
        <button onClick={() => setShareOpen(sorted[0])}>Share Template</button>
      </div>

      <div style={{ marginTop: 16 }}>
        {sorted.map(t => (
          <div key={t.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e5e9ef', borderRadius: 10, padding: 12, marginBottom: 8 }}>
            <div>
              <div style={{ fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontSize: 13, color: '#667085' }}>v{t.version} • Shared with: {t.sharedWith.length ? t.sharedWith.join(', ') : '—'}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setEditOpen(t)}>Edit / Bump Version</button>
              <button onClick={() => setShareOpen(t)}>Share</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add modal */}
      <Modal open={addOpen} onClose={() => setAddOpen(false)}>
        <AddTemplateForm onAdd={(name) => { addTemplate(name); setAddOpen(false) }} />
      </Modal>

      {/* Edit modal */}
      <Modal open={!!editOpen} onClose={() => setEditOpen(null)}>
        {editOpen && (
          <div>
            <h3 style={{ marginTop: 0 }}>Edit {editOpen.name}</h3>
            <p>Current version: v{editOpen.version}</p>
            <textarea style={{ width: '100%', minHeight: 120 }} placeholder={`Update ${editOpen.name}...`} />
            <div style={{ marginTop: 8 }}>
              <button onClick={() => { bumpVersion(editOpen); setEditOpen(null) }}>Save and bump version</button>
            </div>
          </div>
        )}
      </Modal>

      {/* Share modal */}
      <Modal open={!!shareOpen} onClose={() => setShareOpen(null)}>
        {shareOpen && (
          <ShareTemplateForm template={shareOpen} onShare={(client) => { shareTemplate(shareOpen, client); setShareOpen(null) }} />
        )}
      </Modal>
    </div>
  )
}

function AddTemplateForm({ onAdd }: { onAdd: (name: string) => void }) {
  const [name, setName] = useState('')
  return (
    <div>
      <h3 style={{ marginTop: 0 }}>Add New Template</h3>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Template name (e.g., Mutual NDA)" style={{ width: '100%' }} />
      <div style={{ marginTop: 8 }}>
        <button disabled={!name.trim()} onClick={()=>onAdd(name.trim())}>Add</button>
      </div>
    </div>
  )
}

function ShareTemplateForm({ template, onShare }: { template: Template; onShare: (client: string) => void }) {
  const [client, setClient] = useState('')
  return (
    <div>
      <h3 style={{ marginTop: 0 }}>Share {template.name}</h3>
      <input value={client} onChange={e=>setClient(e.target.value)} placeholder="Client name (e.g., ABC Corp)" style={{ width: '100%' }} />
      <div style={{ marginTop: 8 }}>
        <button disabled={!client.trim()} onClick={()=>onShare(client.trim())}>Share</button>
      </div>
    </div>
  )
}