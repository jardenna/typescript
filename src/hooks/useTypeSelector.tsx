//This file is used for checking types

import { TypedUseSelectorHook, useSelector as _useSelector } from 'react-redux';

import { RootState } from './../state';

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;