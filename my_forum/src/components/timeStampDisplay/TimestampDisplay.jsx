import React, { useEffect, useState } from 'react';
import moment from 'moment';

const TimestampDisplay = ({ createdAt }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const updateTimeAgo = () => {
      const now = moment();
      const created = moment(createdAt);
      const diffMinutes = now.diff(created, 'minutes');
      setTimeAgo(`${diffMinutes} min`);
    };

    updateTimeAgo();

    // Update the timestamp every minute
    const interval = setInterval(updateTimeAgo, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [createdAt]);

  return <span>{timeAgo}</span>;
};

export default TimestampDisplay;
