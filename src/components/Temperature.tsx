import React from 'react';

interface TemperatureProps {
  celsius: string;
  fahrenheit: string;
  defaultUnit?: 'celsius' | 'fahrenheit' | 'auto';
}

// Countries/regions that primarily use Fahrenheit
// US = United States, LR = Liberia, MM = Myanmar, BS = Bahamas, 
// BZ = Belize, KY = Cayman Islands, PW = Palau
const FAHRENHEIT_COUNTRIES = ['US', 'LR', 'MM', 'BS', 'BZ', 'KY', 'PW'];

const detectPreferredUnit = (): 'celsius' | 'fahrenheit' => {
  try {
    // Check if we're in a browser environment
    if (typeof navigator === 'undefined') {
      return 'celsius'; // Default for SSR
    }
    
    // Try to get country from locale
    const locale = navigator.language || navigator.languages?.[0] || 'en-US';
    
    // Use Intl.Locale if available (modern browsers)
    if (typeof Intl !== 'undefined' && Intl.Locale) {
      try {
        const region = new Intl.Locale(locale).region;
        if (region && FAHRENHEIT_COUNTRIES.includes(region)) {
          return 'fahrenheit';
        }
      } catch {
        // Fallback if Intl.Locale fails
      }
    }
    
    /*// Fallback: check locale string directly
    if (locale.includes('-US') || locale.includes('_US')) {
      return 'fahrenheit';
    }*/
    
    // Additional check using timezone as backup
    if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes('America/New_York') || 
            timezone.includes('America/Chicago') || 
            timezone.includes('America/Denver') || 
            timezone.includes('America/Los_Angeles') ||
            timezone.includes('America/Phoenix') ||
            timezone.includes('America/Anchorage') ||
            timezone.includes('Pacific/Honolulu')) {
          return 'fahrenheit';
        }
      } catch {
        // Fallback if timezone detection fails
      }
    }
    
    return 'celsius';
  } catch {
    // Fallback to celsius if all detection fails
    return 'celsius';
  }
};

export const Temperature: React.FC<TemperatureProps> = ({ 
  celsius, 
  fahrenheit, 
  defaultUnit = 'auto' 
}) => {
  const [showAlternate, setShowAlternate] = React.useState(false);
  
  // Determine the preferred unit
  const preferredUnit = defaultUnit === 'auto' ? detectPreferredUnit() : defaultUnit;
  
  const primaryTemp = preferredUnit === 'celsius' ? celsius : fahrenheit;
  const alternateTemp = preferredUnit === 'celsius' ? fahrenheit : celsius;

  return (
    <span 
      className="relative inline-block cursor-help transition-colors duration-200 hover:bg-accent/20 px-1 rounded border-b border-dashed border-muted-foreground/50 hover:border-accent"
      onMouseEnter={() => setShowAlternate(true)}
      onMouseLeave={() => setShowAlternate(false)}
      title={alternateTemp}
    >
      <span className="inline-grid">
        <span
          className={`col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-200 ${showAlternate ? 'opacity-0' : 'opacity-100'}`}
        >
          {primaryTemp}
        </span>
        <span
          className={`col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-200 ${showAlternate ? 'opacity-100' : 'opacity-0'}`}
        >
          {alternateTemp}
        </span>
      </span>
    </span>
  );
};

export default Temperature;