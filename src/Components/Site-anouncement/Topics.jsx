import React, { useState } from 'react';
import topicsData from './topicsData';
import TopicItems from './TopicItems';
import './style.scss';

const Topics = () => {
  const [showOlderTopics, setShowOlderTopics] = useState(false);

  const handleOlderTopicsClick = () => {
    setShowOlderTopics(!showOlderTopics);
  };

  const olderTopics = topicsData.filter(topic => topic.isOlder);
  const recentTopics = topicsData.filter(topic => !topic.isOlder);

  return (
    <div>

      {recentTopics.map(topic => (
        <TopicItems key={topic.id} topic={topic} />
      ))}
      <div className='btntopic'>  <a className='atext' onClick={handleOlderTopicsClick}>
        {showOlderTopics ? 'Hide Older Topics' : 'Show Older Topics'}
      </a></div>

      {showOlderTopics && (
        <div>
          {olderTopics.map(topic => (
            <TopicItems key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Topics;