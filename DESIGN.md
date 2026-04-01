# Design System — 글로벌 CS 운영 함께 단계 올리기

**Product:** InBody Global CS Operations Platform
**Type:** Internal B2B tool — 13 subsidiaries + HQ admin
**Style:** Clean B2B SaaS (Linear/Notion influence), InBody brand colors
**Last updated:** 2026-04-01

---

## 1. Brand Philosophy

This is an internal ops tool for CS managers in Vietnam, Turkey, Japan, and 10 other subsidiaries. They're not developers. They open this once a week, scan a 93-item checklist, respond to HQ feedback, and close the laptop.

The design has one job: reduce cognitive load so the user sees what to do next — immediately.

**Principles:**
- **Signal over noise.** Show the most important thing first. Hide complexity behind progressive disclosure (Notion-row pattern already in use).
- **Role clarity.** Admin and user views are clearly different. The interface should make role identity feel natural, not confusing.
- **Status at a glance.** Green/amber/red left-borders on rows tell the whole story before reading a single word.
- **Global-first.** Typography, spacing, and color must work at any locale. No locale-specific icons or idioms in the UI chrome.

---

## 2. Color Palette

### Brand Colors (CSS custom properties)

```css
:root {
  --red:  #971B2F;  /* InBody Brand Red — primary accent */
  --tA:   #101820;  /* InBody Brand Black — secondary, admin, code */
  --tB:   #971B2F;  /* Track B accent (alias of --red) */

  --bg:   #f0f2f7;  /* Page background */
  --line: #e2e8f0;  /* Borders, dividers */
  --ok:   #22c55e;  /* Success / confirmed */
  --no:   #ef4444;  /* Error / rejected */
}
```

### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| Brand Red | `#971B2F` | Primary CTA, nav active, HQ badges, accent |
| Brand Black | `#101820` | Header bg, admin badges, .btn.blue/.btn.purple |
| Page bg | `#f0f2f7` | Body background |
| Surface | `#ffffff` | Cards, table rows |
| Surface Alt | `#f8fafc` | Subtle surfaces, detail panels |
| Surface Muted | `#f1f5f9` | Tag backgrounds, alternate rows |
| Border | `#e2e8f0` | All borders and dividers |
| Text Primary | `#101820` | High-emphasis text |
| Text Strong | `#1e293b` | Section headers, item names |
| Text Body | `#374151` | Body copy, detail text |
| Text Secondary | `#64748b` | Labels, helper text |
| Text Muted | `#94a3b8` | Placeholder, nav inactive, org sub-text |

### Status Colors

| Status | Border | Background | Text |
|--------|--------|------------|------|
| Confirmed | `#22c55e` | `#f0fdf4` | `#065f46` |
| Pending (HQ review) | `#f59e0b` | `#fffbeb` | `#92400e` |
| Rejected | `#971B2F` | `#fff8f8` | — |
| Not started | transparent | `#ffffff` | `#94a3b8` |

### Importance Badge Colors

| Level | Background | Text | Meaning |
|-------|-----------|------|---------|
| H (상) | `#fee2e2` | `#991b1b` | High priority |
| M (중) | `#fef3c7` | `#92400e` | Medium priority |
| L (하) | `#f1f5f9` | `#475569` | Low priority |
| R (참고) | `#f1f5f9` | `#64748b` | Reference only |

### Who Tag Colors

| Tag | Background | Text |
|-----|-----------|------|
| 본사 (HQ) | `#fde8ec` | `#971B2F` |
| 현지 (Local) | `#f1f5f9` | `#374151` |
| 공통 (Both) | `#fef3c7` | `#92400e` |

### Do Not Use

- Any purple/indigo: `#6366f1`, `#8b5cf6`, `#7c3aed`, `#5b21b6`, `#e0e7ff`, `#3730a3` — all purged
- Hardcoded `#101820` in CSS rules — use `var(--tA)` instead (6 rules still pending P2)
- `#555` for ghost button text — use `#374151`

---

## 3. Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

System font stack. Renders Inter on most modern Windows/Mac. No web font load. Fast globally.

### Type Scale

| Name | Size | Weight | Usage |
|------|------|--------|-------|
| Display | 40px | 800 | Stat percentages (rg-pct) |
| H1 | 24px | 800 | Dashboard stat values (gs-v) |
| H2 | 22px | 800 | Auth card title |
| H3 | 28px | 800 | Track percentage in results |
| H4 | 22px | 800 | Who result pct |
| Body Large | 15px | 800 | Card names (org-name) |
| Body | 14px | 400–600 | Base font size |
| Body Small | 13px | 700–800 | Item names, auth inputs |
| Label | 12px | 700 | Nav, tabs, detail text |
| Caption | 11px | 600–800 | Comments, status, badges |
| Micro | 10px | 700–800 | Stat labels (UPPERCASE), badge text |
| Nano | 9px | 600–700 | Meta info, timestamps |

### Font Weight Convention

- 800: titles, stat values, org names, all badges
- 700: labels, nav, filter buttons, section headers
- 600: body text, comments
- 400: plain text only (rarely used)

---

## 4. Spacing System

Not on a strict 8px grid yet — values range from 2–36px. **P2 goal: normalize to 4px base.**

### Current values in use

```
2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 22, 24, 36
```

### Recommended normalization (4px base)

| Token | Value | Current usage |
|-------|-------|---------------|
| space-1 | 4px | Icon gaps, nano spacing |
| space-2 | 8px | Badge padding, button gaps |
| space-3 | 12px | Inner padding small |
| space-4 | 16px | Card inner padding |
| space-5 | 20px | Page padding, section gaps |
| space-6 | 24px | Dash section margin |
| space-8 | 32px | Auth top margin sections |

---

## 5. Border Radius Scale

Too many values currently. Normalize to these 6:

| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 6px | Small tags, buttons, badges |
| radius-md | 8px | Inputs, small cards |
| radius-lg | 12px | Filters, inquiry items |
| radius-xl | 14px | Notion table, org cards internal |
| radius-2xl | 18px | Org cards, main cards |
| radius-full | 99px | Progress bars, pills |

**Do not add new values outside this set.**

---

## 6. Elevation (Shadows)

| Level | CSS | Usage |
|-------|-----|-------|
| 0 | none | Default elements |
| 1 | `0 1px 4px rgba(0,0,0,.04)` | Notion table |
| 2 | `0 4px 24px rgba(0,0,0,.07)` | Auth card |
| 3 | `0 2px 8px rgba(0,0,0,.18)` | Header (dark bg context) |
| 4 | `0 6px 24px rgba(0,0,0,.08)` | Org card hover |
| Overlay | `0 4px 16px rgba(0,0,0,.1)` | Mention dropdown |
| Modal | `rgba(0,0,0,.45)` backdrop | Modal overlay |

---

## 7. Component Library

### Buttons

```css
/* Primary — red CTA */
.btn.red { background: var(--red); color: #fff }

/* Secondary — dark */
.btn.blue { background: var(--tA); color: #fff }

/* Ghost — outlined */
.btn.ghost { background: #fff; border: 1px solid var(--line); color: #374151 }
/* FIX PENDING: color was #555, should be #374151 */

/* Sizes */
.btn      { padding: 8px 16px; border-radius: 18px; font-size: 12px; font-weight: 700 }
.btn.sm   { padding: 5px 12px; font-size: 11px }
```

**Semantic naming issue (P2):** `.btn.orange` renders red, `.btn.purple` renders black. Rename to `.btn.primary` / `.btn.secondary`.

### Navigation

Dark header `#101820`. Nav buttons: muted `#94a3b8` → white on hover, red bg when active.

```css
.nav-btn        { color: #94a3b8; background: transparent }
.nav-btn:hover  { background: rgba(255,255,255,.08); color: #fff }
.nav-btn.on     { background: var(--red); color: #fff }
```

User avatar: red-tinted circle `rgba(151,27,47,.35)` with `#fca5a5` text.

### Cards

```css
/* Base card */
background: #fff; border: 1px solid var(--line); border-radius: 14–18px; padding: 14–18px

/* Org card — has top gradient bar */
.org-card::before { background: linear-gradient(90deg, var(--tA), var(--tB)); height: 4px }

/* Stats card */
.gs { border-radius: 14px; padding: 14px 16px }
```

### Notion Table (Checklist)

The primary data view. Key pattern: every row is a grid, detail panel expands below the row.

```css
/* Table container */
.notion-table { border: 1px solid var(--line); border-radius: 14px; overflow: hidden }

/* Header row */
.notion-thead { background: #f8fafc; border-bottom: 1.5px solid var(--line) }
.notion-th    { font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase }

/* Data row */
.notion-row            { border-left: 3px solid transparent }
.notion-row.confirmed  { background: #f0fdf4; border-left-color: #22c55e }
.notion-row.pending    { background: #fffbeb; border-left-color: #f59e0b }
.notion-row.rejected   { background: #fff8f8; border-left-color: var(--red) }

/* Detail panel */
.notion-detail      { display: none; padding: 16px 20px; background: #fafafa }
.notion-detail.open { display: block }
```

**Column order (User view):** 항목명 | 중요도 | 섹션 | 응답 | 담당
**Column order (Admin view):** 항목명 | 중요도 | 섹션 | 응답 | HQ검토 | 담당

**Column widths:**
```css
/* Admin */  minmax(0,1fr) 52px 130px 72px 80px 68px
/* User */   minmax(0,1fr) 52px 130px 80px 68px
```

### Detail Panel (Why / How / Done)

3-column grid inside `.notion-detail`:

```css
display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px
```

Left-border colors by content type:
- Why: `#ef4444` (red)
- How: `#101820` (black)
- Done criteria: `#22c55e` (green)

Auto-opens (class `open` on init) when item has no response yet — the "reference card" pattern.

### Filter Buttons

```css
.f-btn      { padding: 7px 12px; border-radius: 10px; font-size: 10px; font-weight: 700 }
.f-btn.on   { box-shadow: 0 2px 6px rgba(0,0,0,.12) }
.f-btn:not(.on):hover { background: #f1f5f9; border-color: #cbd5e1 }
```

Status filter active colors: todo=`#64748b`, pending=`#f59e0b`, confirmed=`#22c55e`, rejected=`#101820`

### Importance Badges

```css
.imp-badge { font-size: 9px; font-weight: 800; padding: 2px 7px; border-radius: 6px }
```

### Inputs

```css
.fi      { border: 1.5px solid var(--line); border-radius: 12px; padding: 11px 14px; font-size: 13px }
.fi:focus { border-color: var(--ok); box-shadow: 0 0 0 3px rgba(34,197,94,.1) }
```

Focus ring: green `#22c55e` (not red — intentional, prevents confusion with error states).

### Modal

```css
.mov       { position: fixed; inset: 0; background: rgba(0,0,0,.45); z-index: 200 }
.modal     { background: #fff; border-radius: 20px; padding: 22px; max-width: 520px }
```

---

## 8. Motion

All transitions: `0.13s–0.2s`. No easing specified — defaults to ease.

**Standard:** `transition: .15s` (buttons, rows, cards)
**Fast:** `transition: .13s` (filter buttons, tabs)
**Slow:** `transition: .2s` (org cards)

Keep all under 200ms. No keyframe animations. No loading spinners (app is fast enough at pilot scale).

---

## 9. Icons & Emoji

Emoji used sparingly for section identity (🌱 logo, 🌏 auth). No icon library dependency.

**Current emoji in use:**
- 🌱 Logo
- 🌏 Auth screen
- 🏢 Org select
- 🔍 Search prefix (CSS content)
- 👁 Preview toggle button

Do not add new emoji without reason. Prefer text labels for new UI elements.

---

## 10. Page Layout

```css
/* Container */
max-width: 1200px; margin: 0 auto; padding: 20px 14px;

/* Header */
.hi { display: flex; align-items: center; justify-content: space-between }
```

Single-column on mobile. Grid layouts (`auto-fit, minmax`) for cards and stats.

---

## 11. Pending Design Debt (Prioritized)

### P1 — Fix before pilot

| Issue | Fix | Location |
|-------|-----|----------|
| renderUserMgmt Notion-DB refactor | Replace inline-style table with `.notion-table` pattern | renderUserMgmt() |
| Progress summary bar at top of checklist | Sticky bar: "확정률 X% · 미완료 상 항목 N개" | #page-checklist |

### P2 — Fix soon

| Issue | Fix | Location |
|-------|-----|----------|
| 6 hardcoded `#101820` in CSS | Replace with `var(--tA)` | Lines 23, 24, 103, 112, 147, 157 |
| `.btn.orange` / `.btn.purple` semantic names | Rename to `.btn.primary` / `.btn.secondary` | Line 24 |
| Ghost button `#555` | Change to `#374151` | Line 22 |
| Dead `.user-mgmt-table` CSS | Remove entirely | Lines 253–256 |

### P3 — Post-pilot

| Issue | Fix |
|-------|-----|
| Normalize spacing to 4px base | Audit all padding/margin values |
| Section collapse/expand toggle | Checklist page — long scroll |
| Normalize border-radius to 6 values | Remove in-between values |
| Rename `.btn.blue` → `.btn.secondary` | Semantic cleanup |

---

## 12. Design Decisions & Rationale

**Why system font stack?** Single HTML file served globally. No font CDN dependency, no flash of unstyled text, fast in Vietnam on 4G.

**Why InBody Black for header?** Strong brand identity, clear visual hierarchy. White text and muted nav reads easily. Matches InBody's physical product design language.

**Why green focus ring on inputs?** Red is already used for errors (`.no`) and brand (`.red`). Green focus avoids false-alarm visual association with error state.

**Why no loading spinners?** `Promise.all()` on Firestore reads completes in ~150ms at pilot scale. Spinners add complexity for no perceived benefit until user count exceeds ~20 concurrent.

**Why left-border status on Notion rows?** Scan pattern: user's eye moves left-to-right. A 3px colored border is the fastest possible status signal — visible before reading any cell content. Learned from Linear's issue list.

**Why auto-expand detail for unanswered items?** New users (Vietnam, Turkey) need the Why/How/Done context immediately. Requiring a click creates a discovery gap. Answered items collapse to reduce noise.
