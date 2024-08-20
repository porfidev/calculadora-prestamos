import { useContext, useMemo } from 'react';
import { MoneyLoanContext } from '@contexts/MoneyLoanContext';

interface AmortizationScheduleEntry {
  month: number;
  payment: number;
  principalPayment: number;
  interestPayment: number;
  outstandingBalance: number;
  paymentDate: string;
}

const useAmortizationData = () => {
  const { amount, monthInterest, timePeriod } = useContext(MoneyLoanContext);

  const calculateAmortizationSchedule = (
    principal: number,
    annualInterestRate: number,
    loanTermMonths: number,
    startDate: Date
  ): AmortizationScheduleEntry[] => {
    const monthlyInterestRate = annualInterestRate / 12 / 100; // Convertir la tasa anual a una tasa mensual en decimal
    const monthlyPayment =
      (principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths))) /
      (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);

    let outstandingBalance = principal;
    const amortizationSchedule: AmortizationScheduleEntry[] = [];

    for (let month = 1; month <= loanTermMonths; month++) {
      const interestPayment = outstandingBalance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      outstandingBalance -= principalPayment;

      // Calcular la fecha de pago para el mes actual
      const paymentDate = new Date(startDate);
      paymentDate.setMonth(startDate.getMonth() + month - 1);

      amortizationSchedule.push({
        month,
        payment: monthlyPayment,
        principalPayment,
        interestPayment,
        outstandingBalance: Math.max(outstandingBalance, 0),
        paymentDate: paymentDate.toISOString().split('T')[0] // Evita valores negativos
      });
    }

    return amortizationSchedule;
  };

  return {
    amortizationData: calculateAmortizationSchedule(amount, monthInterest, timePeriod, new Date())
  };
};

export { useAmortizationData };
