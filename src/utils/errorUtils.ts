
export type AppError = {
  status?: number | string;
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

  const err = error as AppError;

  // 1. Якщо є спеціальне повідомлення для статусу
  if (err.status && errorStatusMessages[err.status]) {
    return errorStatusMessages[err.status];
  }

  // 2. Якщо є повідомлення з бекенду
  if (err.data?.message) {
    return err.data.message;
  }

  // 3. Якщо є error.message
  if (typeof err.message === 'string') {
    return err.message;
  }

  // 4. Якщо є невідомий статус
  if (typeof err.status === 'number') {
    return `Запит завершився з кодом ${err.status}`;
  }
  if (typeof err.status === 'string') {
    return `Помилка: ${err.status}`;
  }

  // 5. Якщо нічого не підійшло
  return 'Несподівана помилка';
}
