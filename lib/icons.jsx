/* ─── Simple, premium line icons — theme-matched, inherit currentColor ─── */

const PATHS = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.2 11.4a1 1 0 0 0 1 .8h8.4a1 1 0 0 0 1-.78L20.5 8H6" />
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17.5" cy="20" r="1.3" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="6" cy="17" r="2.5" />
      <path d="M8.2 8.5 20 18M8.2 15.5 20 6" />
    </>
  ),
  cross: (
    <>
      <path d="M4 13.5v-3h5v-5h6v5h5v3h-5v5H9v-5H4z" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.7-4.7" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18V7M3 12h18a0 0 0 0 1 0 0v6M3 12v0a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3M21 18v-6" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 1.5 5 5 5 9l-2.5 2.5h-5L7 12c0-4 2-7.5 5-9zM12 11.5v.01" />
      <path d="M9.5 14.5 7 17M14.5 14.5 17 17M10 18c0 1.5-1 3-1 3M14 18c0 1.5 1 3 1 3" />
    </>
  ),
};

export function Icon({ name, size = 24, strokeWidth = 1.5, style = {}, ...rest }) {
  const p = PATHS[name];
  if (!p) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={style}
      {...rest}
    >
      {p}
    </svg>
  );
}
