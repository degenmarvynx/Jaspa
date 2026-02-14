import React from 'react';

type IconProps = { w?: number; h?: number; className?: string };

export const DebitCardIcon: React.FC<IconProps> = ({ w = 74, h = 45, className }) => (
  <svg width={w} height={h} viewBox="0 0 74 45" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="0" y="0" width="74" height="45" rx="6" fill="#044ea4" />
    <rect x="8" y="10" width="58" height="6" fill="#012e6d" />
    <rect x="8" y="28" width="16" height="3" fill="#012e6d" />
    <rect x="32" y="28" width="20" height="3" fill="#012e6d" />
    <rect x="56" y="28" width="6" height="6" fill="#000000" />
  </svg>
);

export const MobileBankingIcon: React.FC<IconProps> = ({ w = 67, h = 70, className }) => (
  <svg width={w} height={h} viewBox="0 0 67 70" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="16" y="4" width="35" height="62" rx="6" stroke="#044ea4" strokeWidth="4" fill="none" />
    <rect x="24" y="30" width="19" height="6" fill="#044ea4" />
    <rect x="24" y="38" width="19" height="4" fill="#044ea4" />
    <rect x="24" y="46" width="19" height="4" fill="#044ea4" />
    <rect x="30" y="56" width="7" height="3" fill="#044ea4" />
    <rect x="19" y="16" width="25" height="10" rx="2" stroke="#044ea4" strokeWidth="3" fill="none" />
    <polyline points="23,21 28,25 36,18" fill="none" stroke="#044ea4" strokeWidth="3" />
  </svg>
);

export const FeaturePhoneIcon: React.FC<IconProps> = ({ w = 48, h = 75, className }) => (
  <svg width={w} height={h} viewBox="0 0 48 75" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="8" y="4" width="32" height="67" rx="6" fill="#044ea4" />
    <rect x="13" y="10" width="22" height="26" rx="2" fill="#000000" />
    <rect x="14" y="42" width="20" height="4" fill="#012e6d" />
    <rect x="14" y="48" width="20" height="4" fill="#012e6d" />
    <circle cx="24" cy="58" r="4" fill="#012e6d" />
  </svg>
);

export const TransferPhonesIcon: React.FC<IconProps> = ({ w = 76, h = 75, className }) => (
  <svg width={w} height={h} viewBox="0 0 76 75" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="6" width="24" height="63" rx="5" stroke="#044ea4" strokeWidth="4" fill="none" />
    <rect x="46" y="6" width="24" height="63" rx="5" stroke="#044ea4" strokeWidth="4" fill="none" />
    <polyline points="18,32 26,32 22,28" fill="none" stroke="#044ea4" strokeWidth="4" />
    <polyline points="58,44 50,44 54,48" fill="none" stroke="#044ea4" strokeWidth="4" />
    <circle cx="38" cy="36" r="9" stroke="#044ea4" strokeWidth="3" fill="none" />
    <text x="35" y="40" fontSize="10" fill="#044ea4">₦</text>
  </svg>
);

export const PosIcon: React.FC<IconProps> = ({ w = 76, h = 75, className }) => (
  <svg width={w} height={h} viewBox="0 0 76 75" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="18" y="6" width="40" height="63" rx="6" stroke="#044ea4" strokeWidth="4" fill="none" />
    <rect x="24" y="14" width="28" height="8" fill="#044ea4" />
    <rect x="24" y="26" width="28" height="16" rx="2" stroke="#044ea4" strokeWidth="3" fill="none" />
    <rect x="26" y="46" width="24" height="4" fill="#044ea4" />
    <rect x="26" y="54" width="10" height="4" fill="#044ea4" />
    <rect x="40" y="54" width="10" height="4" fill="#044ea4" />
  </svg>
);
