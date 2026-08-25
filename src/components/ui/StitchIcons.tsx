import React from 'react';

export const SeedSproutIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = '#8a5a36' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22V14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 14C12 9.5 7.5 7 7.5 7C7.5 7 7 11.5 12 14Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.15"/>
    <path d="M12 11C12 7.5 16.5 5 16.5 5C16.5 5 17 9.5 12 11Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.15"/>
    <ellipse cx="12" cy="18" rx="8" ry="4" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" strokeOpacity="0.4"/>
  </svg>
);

export const WoodenMillIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = '#8a5a36' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="16" height="10" rx="2" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.15"/>
    <line x1="8" y1="10" x2="8" y2="20" stroke={color} strokeWidth="1.5"/>
    <line x1="16" y1="10" x2="16" y2="20" stroke={color} strokeWidth="1.5"/>
    <path d="M12 10V3" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M8 4H16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const LocationPinStitchIcon: React.FC<{ size?: number; color?: string }> = ({ size = 22, color = '#7a5230' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2"/>
    <path d="M12 2C7.58172 2 4 5.58172 4 10C4 15.5 12 22 12 22C12 22 20 15.5 20 10C20 5.58172 16.4183 2 12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CalendarStitchIcon: React.FC<{ size?: number; color?: string }> = ({ size = 22, color = '#7a5230' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="3" stroke={color} strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2"/>
    <circle cx="8" cy="14" r="1" fill={color}/>
    <circle cx="12" cy="14" r="1" fill={color}/>
    <circle cx="16" cy="14" r="1" fill={color}/>
    <circle cx="8" cy="17" r="1" fill={color}/>
    <circle cx="12" cy="17" r="1" fill={color}/>
  </svg>
);

export const FarmerStitchIcon: React.FC<{ size?: number; color?: string }> = ({ size = 22, color = '#7a5230' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Straw Hat */}
    <path d="M3 10C3 10 7 8 12 8C17 8 21 10 21 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 9C7 9 8 5 12 5C16 5 17 9 17 9" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    {/* Head & Face */}
    <path d="M8.5 11C8.5 11 8.5 15 12 15C15.5 15 15.5 11 15.5 11" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    {/* Shoulders & Overalls */}
    <path d="M5 21C5 18 8 17 12 17C16 17 19 18 19 21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="9.5" y1="17" x2="9.5" y2="21" stroke={color} strokeWidth="1.5"/>
    <line x1="14.5" y1="17" x2="14.5" y2="21" stroke={color} strokeWidth="1.5"/>
  </svg>
);

export const PdfDocumentStitchIcon: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = '#ffffff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="14 2 14 8 20 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="8" y1="13" x2="16" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="17" x2="13" y2="17" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ShieldLaurelStitchIcon: React.FC<{ size?: number; color?: string }> = ({ size = 48, color = '#204b33' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield */}
    <path d="M24 6L38 12V24C38 33 24 40 24 40C24 40 10 33 10 24V12L24 6Z" fill={color} stroke="#1b3f2b" strokeWidth="2"/>
    {/* Inner Leaf */}
    <path d="M24 14C24 14 29 18 29 25C29 30 24 33 24 33C24 33 19 30 19 25C19 18 24 14 24 14Z" fill="#ffffff" fillOpacity="0.9"/>
    <path d="M24 16V30" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Left Laurel */}
    <path d="M6 20C5 24 6 29 9 33C12 36 15 38 18 39" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 22C6 21 8 22 9 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 28C7 27 9 29 10 31" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Right Laurel */}
    <path d="M42 20C43 24 42 29 39 33C36 36 33 38 30 39" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 22C42 21 40 22 39 24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M43 28C41 27 39 29 38 31" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
