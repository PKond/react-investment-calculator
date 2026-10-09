import { calculateInvestmentResults, formatter } from "../util/investment";

export default function TableResults({ userInput }) {
  const results = calculateInvestmentResults(userInput);

  const initialInvestment = userInput.initialInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;
            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(row.valueEndOfYear - totalInterest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
