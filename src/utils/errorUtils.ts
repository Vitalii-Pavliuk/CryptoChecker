import i18n from '../i18n';

export type AppError = {
  status?: number | string;
  originalStatus?: number | string;
  error?: string;
  data?: { message?: string };
  message?: string;
};

const errorStatusMessages: Record<number | string, string> = {
  429: i18n.t('errors.tooManyRequests'),
  PARSING_ERROR: i18n.t('errors.tooManyRequests'),
  FETCH_ERROR: i18n.t('errors.fetchError'),
};

export function getErrorMessage(error: unknown): string {
  if (!error || typeof error !== 'object') return i18n.t('errors.unknown');

  const err = error as AppError;

  if (err.status === 429 || err.originalStatus === 429) {
    return i18n.t('errors.tooManyRequests');
  }
  if (err.status === 'FETCH_ERROR') {
    return i18n.t('errors.fetchErrorWithDetails');
  }
  if (err.error === 'PARSING_ERROR') {
    return i18n.t('errors.tooManyRequests');
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
    return i18n.t('errors.requestFailedWithCode', { code: err.originalStatus });
  }
  if (typeof err.status === 'number') {
    return i18n.t('errors.requestFailedWithCode', { code: err.status });
  }
  if (typeof err.originalStatus === 'string') {
    return i18n.t('errors.errorWithStatus', { status: err.originalStatus });
  }
  if (typeof err.status === 'string') {
    return i18n.t('errors.errorWithStatus', { status: err.status });
  }
  if (typeof err.error === 'string') {
    return err.error;
  }
  return i18n.t('errors.unexpected');
}
