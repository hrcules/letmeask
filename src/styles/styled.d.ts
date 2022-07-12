import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    titleTheme: string;

    colors: {
      primary: string;
      secudary: string;
      highlighted: string;
      answered: string;

      shadow: string;

      textPrimary: string;
      textSecundary: string;
    };
  }
}
