export async function fetchEvents() {
    const res = await fetch("events.json");
    if (!res.ok) {
        throw new Error(`Failed to load events.json: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    // simple runtime check
    if (!Array.isArray(data))
        throw new Error("events.json is not an array");
    return data;
}
