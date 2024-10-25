"use client"

import React, { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        {/* Add sidebar navigation here */}
        <ul>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/dashboard/settings">Settings</a></li>
          {/* Add more links as needed */}
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          {/* Add header content here, like a user profile icon or logout button */}
          <h1>Dashboard</h1>
        </header>
        <section className="content">
          {children}
        </section>
      </main>
      <style jsx>{`
        .dashboard-layout {
          display: flex;
          height: 100vh;
        }
        .sidebar {
          width: 250px;
          background-color: #333;
          color: white;
          padding: 20px;
        }
        .main-content {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }
        .header {
          padding: 10px 0;
          border-bottom: 1px solid #ddd;
        }
        .content {
          padding: 20px 0;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
