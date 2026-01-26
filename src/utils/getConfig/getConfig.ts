export function getConfig(key: string) {
    return import.meta.env[key] || "";
}