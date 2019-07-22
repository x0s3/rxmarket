import { RootState } from 'typesafe-actions';
import { Themes } from '../reducers/appStyle.reducer';

export const getCurrentTheme = (state: RootState): Themes => state.appStyle.theme;
