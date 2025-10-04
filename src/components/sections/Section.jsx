import CodeBlock from '../common/CodeBlock';
import './Section.css';

const Section = ({ section }) => {
  return (
    <div className="section" id={section.id}>
      <div className="section-header">
        <h2 className="section-title">
          {section.title}
        </h2>
        {section.description && (
          <p className="section-description">
            {section.description}
          </p>
        )}
      </div>

      <div className="section-content">
        {section.subsections.map(subsection => (
          <div key={subsection.id} className="subsection">
            <h3 className="subsection-title">
              {subsection.title}
            </h3>
            
            {subsection.description && (
              <div className="subsection-description">
                {subsection.description}
              </div>
            )}

            {subsection.codeExamples && subsection.codeExamples.map((example, index) => (
              <CodeBlock
                key={index}
                code={example.code}
                language={example.language}
                title={example.title}
              />
            ))}

            {subsection.tips && subsection.tips.length > 0 && (
              <div className="subsection-tips">
                <div className="tip-box">
                  <strong>💡 Tip:</strong>
                  <ul className="tip-list">
                    {subsection.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {subsection.warnings && subsection.warnings.length > 0 && (
              <div className="subsection-warnings">
                <div className="warning-box">
                  <strong>⚠️ Warning:</strong>
                  <ul className="warning-list">
                    {subsection.warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;