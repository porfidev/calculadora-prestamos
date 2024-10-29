import { ReactElement, useContext } from 'react';
import './MoneyLoanForm.styles.scss';
import dateFormatter from '@utils/dateFormatter';
import { MoneyLoanContext } from '@contexts/MoneyLoanContext';

const MoneyLoanForm = (): ReactElement => {
  const { amount, setAmount, monthInterest, setMonthInterest, timePeriod, setTimePeriod } =
    useContext(MoneyLoanContext);
  return (
    <div className="moneyloanform-wrapper">
      <form>
        <div>
          <fieldset>
            <legend>Crédito</legend>
            <label>Número de Crédito</label>
            <input disabled />

            <label>Fecha de elaboración</label>
            <input value={dateFormatter(new Date())} disabled/>
          </fieldset>
          <fieldset>
            <legend>Datos del solicitante</legend>

            <label>Nombre</label>
            <input disabled/>

            <label>Teléfono</label>
            <input disabled/>
          </fieldset>
        </div>

        <fieldset>
          <legend>Simulador</legend>
          <label>Monto Prestamo</label>
          <input value={amount} onChange={(e) => setAmount(Number(e.target.value) || 0)} />

          <label>Tasa de Interes (Anual)</label>
          <input
            value={`${monthInterest}`}
            onChange={(e) => setMonthInterest(Number(e.target.value) || 0)}
          />

          <label>Plazo</label>
          <select value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))}>
            <option value="0" disabled>Seleccione</option>
            <option value="3">3 meses</option>
            <option value="4">4 meses</option>
            <option value="5">5 meses</option>
            <option value="6">6 meses</option>
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default MoneyLoanForm;
