export function generateColorScale() {
  // Primary color from logo: #37b6ff (Azure/Sky Blue)
  // This generates a complete color scale for Tailwind CSS
  
  const colors = {
    50: '210 100% 97%',   // Very light azure
    100: '210 100% 94%',  // Light azure
    200: '210 98% 86%',   // Soft azure
    300: '210 95% 74%',   // Medium light azure
    400: '210 92% 62%',   // Light primary
    500: '210 100% 61%',  // Primary (#37b6ff equivalent in HSL)
    600: '210 100% 52%',  // Medium azure
    700: '210 100% 42%',  // Dark azure
    800: '210 100% 34%',  // Darker azure
    900: '210 100% 27%',  // Very dark azure
    950: '210 100% 16%',  // Ultra dark azure
  };
  
  return colors;
}

// Brand colors extracted from logo
export const brandColors = {
  primary: '#37b6ff',    // Azure/Sky Blue from logo
  secondary: '#535557',  // Dark gray from logo
  primaryHSL: '201 100% 61%',
  secondaryHSL: '210 2% 34%',
};

// Generate CSS variables for the color scale
export function generateCSSVariables() {
  const scale = generateColorScale();
  const variables: Record<string, string> = {
    '--primary': scale[500],
    '--primary-foreground': '0 0% 100%', // White text on primary
  };
  
  // Add all scale values
  Object.entries(scale).forEach(([key, value]) => {
    variables[`--primary-${key}`] = value;
  });
  
  // Add other theme colors
  variables['--background'] = '0 0% 100%';
  variables['--foreground'] = '210 2% 10%';
  variables['--card'] = '0 0% 100%';
  variables['--card-foreground'] = '210 2% 10%';
  variables['--popover'] = '0 0% 100%';
  variables['--popover-foreground'] = '210 2% 10%';
  variables['--secondary'] = '210 2% 96%';
  variables['--secondary-foreground'] = '210 2% 10%';
  variables['--muted'] = '210 2% 96%';
  variables['--muted-foreground'] = '210 2% 45%';
  variables['--accent'] = '210 2% 96%';
  variables['--accent-foreground'] = '210 2% 10%';
  variables['--destructive'] = '0 84% 60%';
  variables['--destructive-foreground'] = '0 0% 98%';
  variables['--border'] = '210 2% 90%';
  variables['--input'] = '210 2% 90%';
  variables['--ring'] = scale[500];
  variables['--radius'] = '0.75rem';
  
  return variables;
}

// Dark mode variables
export function generateDarkCSSVariables() {
  const scale = generateColorScale();
  const variables: Record<string, string> = {
    '--primary': scale[500],
    '--primary-foreground': '0 0% 100%',
  };
  
  // Add all scale values
  Object.entries(scale).forEach(([key, value]) => {
    variables[`--primary-${key}`] = value;
  });
  
  // Dark theme colors
  variables['--background'] = '210 10% 5%';
  variables['--foreground'] = '0 0% 98%';
  variables['--card'] = '210 10% 8%';
  variables['--card-foreground'] = '0 0% 98%';
  variables['--popover'] = '210 10% 5%';
  variables['--popover-foreground'] = '0 0% 98%';
  variables['--secondary'] = '210 10% 15%';
  variables['--secondary-foreground'] = '0 0% 98%';
  variables['--muted'] = '210 10% 15%';
  variables['--muted-foreground'] = '210 5% 65%';
  variables['--accent'] = '210 10% 15%';
  variables['--accent-foreground'] = '0 0% 98%';
  variables['--destructive'] = '0 62% 30%';
  variables['--destructive-foreground'] = '0 0% 98%';
  variables['--border'] = '210 10% 15%';
  variables['--input'] = '210 10% 15%';
  variables['--ring'] = scale[500];
  
  return variables;
}