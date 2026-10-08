import { useSyncExternalStore } from "react";
import type { GaleriKategori } from "./images";

export type ConsultationBrief = {
  occasion?: GaleriKategori;
  date?: string;
  inspirationId?: number | null;
  base?: string;
  filling?: string;
  finishing?: string;
  packageName?: string;
};
const emptyBrief: ConsultationBrief = {};
let brief: ConsultationBrief = emptyBrief;
const eventName = "chere:brief";

export function updateBrief(patch: Partial<ConsultationBrief>) {
  brief = { ...brief, ...patch };
  window.dispatchEvent(new Event(eventName));
}
function subscribe(listener: () => void) {
  window.addEventListener(eventName, listener);
  return () => window.removeEventListener(eventName, listener);
}
export function useBrief() {
  return useSyncExternalStore(
    subscribe,
    () => brief,
    () => emptyBrief,
  );
}
export function localDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
