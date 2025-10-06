import { useState } from 'react';
import { cheatsheetData, navigationSections } from './data/cheatsheetData';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import { useEffect, useRef } from 'react';

// Simple CodeBlock component
const CodeBlock = ({ code, language = 'jsx' }) => {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="code-block">
      <button className="copy-btn" onClick={copyToClipboard}>
        {copied ? '✓' : '📋'}
      </button>
      <pre className={`language-${language}`}>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

// Simple Navigation component
const Navigation = ({ onSectionClick }) => (
  <nav className="nav">
    <h3>Quick Navigation</h3>
    <ul>
      {navigationSections.map(section => (
        <li key={section.id}>
          <button onClick={() => onSectionClick(section.id)}>
            {section.title}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

// Tabbed CodeBlock component for ColdFusion syntax comparison
const TabbedCodeBlock = ({ scriptCode, tagCode, templateCode, language = 'javascript' }) => {
  const [activeTab, setActiveTab] = useState(1); // Default to tag syntax (index 1)

  const examples = [
    { title: 'CFScript', code: scriptCode, language: language },
    { title: 'Tag Syntax', code: tagCode, language: 'html' },
    ...(templateCode ? [{ title: 'Tag Template Method', code: templateCode, language: 'html' }] : [])
  ];

  return (
    <div className="tabbed-code-block">
      <div className="code-tabs">
        {examples.map((example, index) => (
          <button
            key={index}
            className={`code-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {example.title || `Example ${index + 1}`}
          </button>
        ))}
      </div>
      <CodeBlock
        code={examples[activeTab].code}
        language={examples[activeTab].language}
      />
    </div>
  );
};

// Simple Section component
const Section = ({ section }) => (
  <div className="section" id={section.id}>
    <h2>{section.title}</h2>
    {section.description && <p className="description">{section.description}</p>}

    {section.subsections.map(subsection => (
      <div key={subsection.id} className="subsection">
        <h3>{subsection.title}</h3>
        {subsection.description && <p className="sub-description">{subsection.description}</p>}

        {/* Special handling for ColdFusion backend - show tabs */}
        {section.id === 'coldfusion-backend' ? (
          subsection.codeExamples && subsection.codeExamples.map((example, index) => (
            example.scriptCode && example.tagCode ? (
              <TabbedCodeBlock 
                key={index}
                scriptCode={example.scriptCode} 
                tagCode={example.tagCode}
                templateCode={example.templateCode}
                language="javascript"
              />
            ) : (
              <CodeBlock key={index} code={example.code} language={example.language} />
            )
          ))
        ) : (
          /* Regular code examples for all other sections */
          subsection.codeExamples && subsection.codeExamples.map((example, index) => (
            <CodeBlock key={index} code={example.code} language={example.language} />
          ))
        )}
      </div>
    ))}
  </div>
);

// Main App component
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false); // Close mobile menu
    }
  };

  return (
    <div className="app">
      <header className="header">
        <button
          className="menu-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
        <h1>React Cheat Sheet</h1>
      </header>

      <div className="container">
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <Navigation onSectionClick={scrollToSection} />
        </aside>

        <main className="main">
          {cheatsheetData.map(section => (
            <Section key={section.id} section={section} />
          ))}
        </main>
      </div>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default App;