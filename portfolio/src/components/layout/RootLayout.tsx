import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Add Header/Nav here later */}
      <main>{children}</main>
      {/* Add Footer here later */}
    </div>
  );
}