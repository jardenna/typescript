//This file is used for chicking types

import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from './../state/reducers/index';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;