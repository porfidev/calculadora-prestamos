import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';

type MoneyLoanContextType = {
  amount: number;
  monthInterest: number;
  timePeriod: number;
  setAmount: Dispatch<SetStateAction<number>>;
  setMonthInterest: Dispatch<SetStateAction<number>>;
  setTimePeriod: Dispatch<SetStateAction<number>>;
};

const initialMoneyLoanContext: MoneyLoanContextType = {
  amount: 0,
  monthInterest: 0,
  timePeriod: 0,
  setAmount: () => {},
  setMonthInterest: () => {},
  setTimePeriod: () => {}
};

const MoneyLoanContext = createContext<MoneyLoanContextType>(initialMoneyLoanContext);

type MoneyLoanProviderProps = {
  children: ReactNode;
};

const MoneyLoanProvider: FC<MoneyLoanProviderProps> = ({ children }) => {
  const [amount, setAmount] = useState<number>(0);
  const [monthInterest, setMonthInterest] = useState<number>(0);
  const [timePeriod, setTimePeriod] = useState<number>(0);

  return (
    <MoneyLoanContext.Provider
      value={{ amount, setAmount, monthInterest, setMonthInterest, timePeriod, setTimePeriod }}
    >
      {children}
    </MoneyLoanContext.Provider>
  );
};

export { MoneyLoanContext, MoneyLoanProvider };
