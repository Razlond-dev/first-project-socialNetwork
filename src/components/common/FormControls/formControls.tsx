import React from 'react';
import styles from './formControls.module.css';


type formControlType = (params: string) => React.ReactNode

export const formControl: formControlType = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={hasError ? styles.error : ''}>
      <Element {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
