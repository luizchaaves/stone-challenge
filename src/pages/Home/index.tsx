import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import Header from '../../components/Header';
import Form from '../../components/Form';
import Results from '../../components/Results';

const Home = () => {
  const [convertedValue, setConvertedValue] = useState(false);

  return (
    <PageLayout>
      <Header />
      {convertedValue ? (
        <Results setConvertedValue={setConvertedValue} />
      ) : (
        <Form setConvertedValue={setConvertedValue} />
      )}
    </PageLayout>
  );
};

export default Home;
