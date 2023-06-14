import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/messages/random_greeting')
      .then(response => response.json())
      .then(data => setGreeting(data.greeting))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
