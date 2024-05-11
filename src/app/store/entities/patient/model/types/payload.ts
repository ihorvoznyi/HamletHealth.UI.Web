import type { PayloadAction } from '@reduxjs/toolkit';
import type { Patient } from './model';

export type SetCurrentPatientPayload = PayloadAction<Patient>