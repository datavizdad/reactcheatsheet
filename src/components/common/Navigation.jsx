import { navigationSections } from '../../data/cheatsheetData';
import './Navigation.css';

const Navigation = () => {
  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of sticky header
      const elementPosition = element.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  return (
    <nav className="navigation">
      <h3 className="navigation-title">Quick Navigation</h3>
      <ul className="navigation-list">
        {navigationSections.map(section => (
          <li key={section.id} className="navigation-item">
            <button
              className="navigation-link"
              onClick={() => handleSectionClick(section.id)}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;