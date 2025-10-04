import { useState } from 'react';
import './Layout.css';

const Layout = ({ children, sidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout">
      <div className="layout-header">
        <button 
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
        <h1 className="layout-title">React Cheat Sheet</h1>
      </div>
      
      <div className="layout-content">
        <aside className={`layout-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-content">
            {sidebar}
          </div>
          {sidebarOpen && (
            <div 
              className="sidebar-overlay"
              onClick={toggleSidebar}
              aria-hidden="true"
            />
          )}
        </aside>
        
        <main className="layout-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;