// src/components/ErrorMessage.tsx

import React from 'react';
import { getErrorMessage } from '../../utils/errorUtils';

type ErrorMessageProps = {
  error: unknown;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <div className="error">Error: {getErrorMessage(error)}</div>
);
