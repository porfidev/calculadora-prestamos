import MoneyLoanForm from '@components/MoneyLoanForm/MoneyLoanForm';
import { ReactElement } from 'react';
import { MoneyLoanProvider } from '@contexts/MoneyLoanContext';
import AmortizationTable from '@components/Table/AmortizationTable';

function App(): ReactElement {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  const handleAPICall = () => console.log(window.api.generateDocument());
  return (
    <>
      <MoneyLoanProvider>
        <MoneyLoanForm />
        <AmortizationTable />
        <button onClick={handleAPICall}>Generar Documento</button>
      </MoneyLoanProvider>
    </>
  );
}

export default App;
