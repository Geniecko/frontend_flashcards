import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    whitePrimary: string;
    whiteSecondary: string;
    gray: string;
  }
}
