import type { EventData } from "./types.js";

export async function fetchEvents(): Promise<EventData[]> {
  const res = await fetch("events.json");
  if (!res.ok) {
    throw new Error(`Failed to load events.json: ${res.status} ${res.statusText}`);
  }
  const data: unknown = await res.json();
  // simple runtime check
  if (!Array.isArray(data)) throw new Error("events.json is not an array");
  return data as EventData[];
}
