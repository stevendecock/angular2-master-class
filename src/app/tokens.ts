import { OpaqueToken } from '@angular/core';

export const API_ENDPOINT_TOKEN = new OpaqueToken('API_ENDPOINT');

export const CONFIG_PROVIDERS = [
  { provide: API_ENDPOINT_TOKEN, useValue: 'http://localhost:4201/api' }
];
