import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
  margin: ${({ theme }) => theme.space[0]};
  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: ${({ theme }) => theme.fontSizes.main};

  color: ${({ theme }) => theme.colors.darkText};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
