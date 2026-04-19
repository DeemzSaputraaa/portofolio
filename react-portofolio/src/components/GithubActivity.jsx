import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import '../styles/GithubActivity.css';

const GithubActivity = () => {
  const { t, language } = useLanguage();
  const { isDarkMode } = useTheme();

  const formatTooltip = (count, dateString) => {
    const date = new Date(dateString);
    const isID = language === 'ID';
    
    const monthFormatter = new Intl.DateTimeFormat(isID ? 'id-ID' : 'en-US', { month: 'long' });
    const month = monthFormatter.format(date);
    const day = date.getDate();

    if (isID) {
      const contribText = count === 0 ? 'Tidak ada kontribusi' : `${count} kontribusi`;
      return `${contribText} pada ${day} ${month}`;
    } else {
      const getOrdinalSuffix = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      };
      const contribText = count === 0 ? 'No contributions' : `${count} contributions`;
      return `${contribText} on ${month} ${day}${getOrdinalSuffix(day)}`;
    }
  };

  return (
    <section className="github-section" id="github">
      <div className="github-header">
        <p className="github-eyebrow">{t('github', 'eyebrow')}</p>
        <h2 className="github-title">
          {t('github', 'title')} <span className="github-title-highlight">{t('github', 'titleHighlight')}</span>
        </h2>
        <p className="github-desc">
          {t('github', 'desc')}
        </p>
      </div>

      <div className="github-calendar-container">
        <GitHubCalendar 
          key={isDarkMode ? 'dark' : 'light'}
          username="DeemzSaputraaa" 
          colorScheme={isDarkMode ? 'dark' : 'light'}
          blockSize={14}
          blockMargin={6}
          fontSize={14}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              'data-tooltip-id': 'github-tooltip',
              'data-tooltip-html': formatTooltip(activity.count, activity.date),
            })
          }
        />
        <Tooltip id="github-tooltip" />
      </div>
    </section>
  );
};

export default GithubActivity;
