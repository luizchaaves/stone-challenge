import ArrowIcon from '../../assets/ArrowIcon';
import useConvert from '../../hooks/useConvert';
import { ButtonType } from '../../types/button-type';
import Button from '../Button';
import { Container, ConversionResult, Informations, Wrapper } from './styles';

interface ResultsPorps {
  setConvertedValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const formatDolar = (value: number) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const formatReal = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const Results = ({ setConvertedValue }: ResultsPorps) => {
  const {
    realWithRate,
    realWithoutRate,
    dolarWithRate,
    convertAmount,
    dollarValue,
    stateTax,
    iof,
  } = useConvert();

  return (
    <Wrapper>
      <Container>
        <Button
          styleBtn={ButtonType.SECONDARY}
          onClick={() => setConvertedValue((prev) => !prev)}
        >
          <ArrowIcon />
          Voltar
        </Button>

        <ConversionResult>
          <p>O resultado do cáulculo é</p>
          <span>{formatReal(realWithRate)}</span>
        </ConversionResult>

        <Informations>
          <p>
            Dólar s/ imposto: <span>{formatDolar(convertAmount)}</span>
          </p>
          <p>
            Dólar c/ imposto: <span>{formatDolar(dolarWithRate)}</span>
          </p>
          <p>
            Real s/ imposto: <span>{formatReal(realWithoutRate)}</span>
          </p>
        </Informations>

        <Informations>
          <p>
            IOF:{' '}
            <span>
              {formatDolar(iof)} = {formatReal(iof * dollarValue)}
            </span>
          </p>
          <p>
            Taxa do estado:{' '}
            <span>
              {formatDolar(stateTax)} = {formatReal(stateTax * dollarValue)}
            </span>
          </p>
          <p>
            Cotação do dólar: <span>$1.00 = {formatReal(dollarValue)}</span>
          </p>
        </Informations>
      </Container>
    </Wrapper>
  );
};

export default Results;
