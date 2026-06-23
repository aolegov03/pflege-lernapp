export function todayISO() {
  return new Date().toISOString();
}

export function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function formatDateTime(value) {
  if (!value) return 'noch nicht';
  return new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value));
}

export function formatDate(value) {
  if (!value) return 'noch nicht';
  return new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'medium'
  }).format(new Date(value));
}

export function isDue(value) {
  if (!value) return true;
  return new Date(value).getTime() <= Date.now();
}

export function fileDateStamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
