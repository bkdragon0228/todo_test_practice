import React from 'react';
import { useState } from 'react';
import { Value } from 'react-time-picker/dist/cjs/shared/types';

import TimePicker from 'react-time-picker';

import styles from './timePicker.module.scss';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

interface Props {
  label: string;
  value: Value;
  onChange: React.Dispatch<React.SetStateAction<Value>>;
}

const TimePickerContainer: React.FC<Props> = ({ label, onChange, value }) => {
  return (
    <div className={styles.container}>
      <span>{label}</span>
      <TimePicker
        className={styles.time_picker}
        onChange={onChange}
        value={value}
        format="HH:mm"
        clearIcon={null}
        disableClock
        required
      />
    </div>
  );
};

export default TimePickerContainer;
