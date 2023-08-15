import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Container, DateNow } from './styles';

const Date = () => {
  const [date, setDate] = useState<string>();
  const [hour, setHour] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      setDate(moment().format('LL'));
      setHour(moment().format('LT'));
    }, 1000);
  }, []);

  return (
    <Container>
      {date && hour && (
        <>
          <DateNow>
            <span>{date}</span>|<span>{hour}</span>
          </DateNow>
          <p>Dados de câmbio disponibilizados pela Morningstar.</p>
        </>
      )}
    </Container>
  );
};

export default Date;
