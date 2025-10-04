import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Activity = { id: string; title: string; meta?: string }

type ActivityCtx = {
  items: Activity[]
  add: (a: Activity) => void
}

const Ctx = createContext<ActivityCtx | null>(null)

export function ActivityProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Activity[]>([
    { id: 'seed-1', title: 'Initial Draft — Mutual NDA generated' },
    { id: 'seed-2', title: 'Executed Document — SAFE with ABC Fund' },
    { id: 'seed-3', title: 'First Turn — Master Services Agreement with XYZ Corp.', meta: '60% change to Indemnity' },
    { id: 'seed-4', title: 'Negotiation — NDA with Acme Inc', meta: 'Pending markup from client' }
  ])
  const value = useMemo<ActivityCtx>(() => ({
    items,
    add: (a) => setItems(prev => [{ ...a, id: `${Date.now()}` }, ...prev])
  }), [items])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useActivity() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useActivity must be used within ActivityProvider')
  return v
}