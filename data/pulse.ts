export type PulseCategory = "event" | "announcement" | "account" | "product";

export interface PulseItem {
  id: string;
  category: PulseCategory;
  title: string;
  date: string;
  body: string;
  link?: { label: string; href: string };
  pinned?: boolean;
}

// Populate with account-specific events, announcements, and updates.
// pinned: true items appear at the top regardless of order.
export const PULSE: PulseItem[] = [
  {
    id: "placeholder-announcement",
    category: "announcement",
    title: "TODO: Announcement Title",
    date: "TODO: Date",
    body: "TODO: Body — what happened, why it matters, what's next.",
    pinned: true,
  },
  {
    id: "placeholder-event",
    category: "event",
    title: "TODO: Upcoming Event",
    date: "TODO: Date · Location",
    body: "TODO: Who should attend, what's covered, why it's relevant to this account.",
    link: { label: "Learn more", href: "#" },
  },
];

export const CATEGORY_LABELS: Record<PulseCategory, string> = {
  event:        "Upcoming Event",
  announcement: "Announcement",
  account:      "Account Update",
  product:      "Product News",
};

export const CATEGORY_COLORS: Record<PulseCategory, string> = {
  event:        "bg-purple-500/15 text-purple-300 border-purple-500/20",
  announcement: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  account:      "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  product:      "bg-[var(--brand-primary)]/15 text-[var(--brand-primary)] border-[var(--brand-primary)]/20",
};
