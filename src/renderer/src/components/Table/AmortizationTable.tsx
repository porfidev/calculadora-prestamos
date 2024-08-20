import { ReactElement, useContext } from 'react';
import './AmortizationTable.styles.scss';
import { MoneyLoanContext } from '@contexts/MoneyLoanContext';
import { useAmortizationData } from '@hooks/useAmortizationData';

const AmortizationTable = (): ReactElement => {
  const { timePeriod } = useContext(MoneyLoanContext);
  const { amortizationData } = useAmortizationData();

  return (
    <div className="table-wrapper">
      <h1>Tabla de amortización {timePeriod}</h1>
      <table>
        <thead>
          <tr>
            <th>Número de Pagos</th>
            <th>Fecha de Pago Mensual</th>
            <th>Pago a Capital</th>
            <th>Interés Ordinario</th>
            <th>Pago Total Mensual</th>
            <th>Saldo Insoluto del Periodo</th>
          </tr>
        </thead>
        <tbody>
          {amortizationData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.month}</td>
                <td>{data.paymentDate}</td>
                <td>$ {data.principalPayment.toFixed(2)}</td>
                <td>$ {data.interestPayment.toFixed(2)}</td>
                <td>$ {data.payment.toFixed(2)}</td>
                <td>$ {data.outstandingBalance.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AmortizationTable;
