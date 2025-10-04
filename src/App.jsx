import Layout from './components/layout/Layout';
import Navigation from './components/common/Navigation';
import Section from './components/sections/Section';
import ErrorBoundary from './components/common/ErrorBoundary';
import { cheatsheetData } from './data/cheatsheetData';
import './styles/globals.css';

const App = () => {
  return (
    <ErrorBoundary>
      <Layout sidebar={<Navigation />}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <div id="main-content" className="main-content">
          <div className="sections-grid" role="main" aria-label="React cheat sheet sections">
            {cheatsheetData.map(section => (
              <Section 
                key={section.id} 
                section={section}
              />
            ))}
          </div>
        </div>
      </Layout>
    </ErrorBoundary>
  );
};

export default App;