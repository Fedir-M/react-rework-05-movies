import { useState } from 'react';
import Button from 'components/Button/Button';

import s from './ExpandableText.module.css';

const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={s.expandableText}>
      <p className={isExpanded ? s.fullText : s.clampedText}>{text}</p>
      {text.length > 35 && (
        <Button
          onClick={toggleExpand}
          label={isExpanded ? 'Show less' : 'more...'}
          className={s.toggleButton}
        >
          {isExpanded ? 'Show less' : 'more...'}
        </Button>
      )}
    </div>
  );
};

export default ExpandableText;
