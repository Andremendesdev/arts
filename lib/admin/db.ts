import { createClient } from "@/lib/supabase/client"
import { translateDbError } from "./errors"
import type { AdminSettings, EarningCategory, EarningEntry } from "./types"

type EarningRow = {
  id: string
  amount: number
  category: string
  note: string | null
  created_at: string
}

type SettingsRow = {
  monthly_goal: number
}

const DEFAULT_SETTINGS: AdminSettings = { monthlyGoal: 8000 }

function mapRow(row: EarningRow): EarningEntry {
  return {
    id: row.id,
    amount: Number(row.amount),
    category: row.category as EarningCategory,
    note: row.note ?? undefined,
    createdAt: row.created_at,
  }
}

function throwDb(error: unknown): never {
  throw new Error(translateDbError(error as Parameters<typeof translateDbError>[0]))
}

export async function fetchEntries(): Promise<EarningEntry[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("earnings")
    .select("id, amount, category, note, created_at")
    .order("created_at", { ascending: false })

  if (error) throwDb(error)
  return (data as EarningRow[]).map(mapRow)
}

export async function insertEntry(
  amount: number,
  category: EarningCategory,
  note?: string
): Promise<EarningEntry> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("earnings")
    .insert({ amount, category, note: note ?? null })
    .select("id, amount, category, note, created_at")
    .single()

  if (error) throwDb(error)
  return mapRow(data as EarningRow)
}

export async function deleteEntry(id: string): Promise<void> {
  const supabase = createClient()
  const { error } = await supabase.from("earnings").delete().eq("id", id)
  if (error) throwDb(error)
}

export async function fetchSettings(): Promise<AdminSettings> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("admin_settings")
    .select("monthly_goal")
    .eq("id", 1)
    .maybeSingle()

  if (error) throwDb(error)
  if (!data) return DEFAULT_SETTINGS

  return { monthlyGoal: Number((data as SettingsRow).monthly_goal) }
}

export async function updateSettings(
  settings: AdminSettings
): Promise<AdminSettings> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("admin_settings")
    .upsert({ id: 1, monthly_goal: settings.monthlyGoal })
    .select("monthly_goal")
    .single()

  if (error) throwDb(error)
  return { monthlyGoal: Number((data as SettingsRow).monthly_goal) }
}

export async function importEntries(entries: EarningEntry[]): Promise<void> {
  if (entries.length === 0) return

  const supabase = createClient()
  const rows = entries.map((entry) => ({
    id: entry.id,
    amount: entry.amount,
    category: entry.category,
    note: entry.note ?? null,
    created_at: entry.createdAt,
  }))

  const { error } = await supabase.from("earnings").insert(rows)
  if (error) throwDb(error)
}
