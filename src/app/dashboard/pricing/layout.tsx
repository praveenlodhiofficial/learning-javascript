import React, { ReactNode } from 'react';

interface PricingLayoutProps {
  children: ReactNode;
}

const PricingLayout: React.FC<PricingLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default PricingLayout;