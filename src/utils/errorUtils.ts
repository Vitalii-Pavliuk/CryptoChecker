export type AppError = {
  status?: number | string;
  originalStatus?: number | string;
  error?: string;
  data?: { message?: string };
  message?: string;
};

const errorStatusMessages: Record<number | string, string> = {
  429: 'Забагато запитів! Спробуйте пізніше',
  PARSING_ERROR: 'Забагато запитів! Спробуйте пізніше',
  FETCH_ERROR: 'Не вдалося виконати запит',
};

export function getErrorMessage(error: unknown): string {
  if (!error || typeof error !== 'object') return 'Невідома помилка';

  const err = error as any;

  if (err.status === 429 || err.originalStatus === 429) {
    return 'Забагато запитів! Спробуйте пізніше';
  }
  if (err.status === 'FETCH_ERROR') {
    return 'Не вдалося виконати запит. Можливо, забагато запитів або проблема з мережею.';
  }
  if (err.error === 'PARSING_ERROR') {
    return 'Забагато запитів! Спробуйте пізніше';
  }
  if (err.status && errorStatusMessages[err.status]) {
    return errorStatusMessages[err.status];
  }
  if (err.error && errorStatusMessages[err.error]) {
    return errorStatusMessages[err.error];
  }
  if (err.data?.message) {
    return err.data.message;
  }
  if (typeof err.message === 'string') {
    return err.message;
  }
  if (typeof err.originalStatus === 'number') {
    return `Запит завершився з кодом ${err.originalStatus}`;
  }
  if (typeof err.status === 'number') {
    return `Запит завершився з кодом ${err.status}`;
  }
  if (typeof err.originalStatus === 'string') {
    return `Помилка: ${err.originalStatus}`;
  }
  if (typeof err.status === 'string') {
    return `Помилка: ${err.status}`;
  }
  if (typeof err.error === 'string') {
    return err.error;
  }
  return 'Несподівана помилка';
}
