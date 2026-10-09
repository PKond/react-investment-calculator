export default function Input({ onChangeInput, userInput }) {

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              name="initialInvestment"
              value={userInput.initialInvestment}
              onChange={onChangeInput}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              name="annualInvestment"
              value={userInput.annualInvestment}
              onChange={onChangeInput}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              name="expectedReturn"
              value={userInput.expectedReturn}
              onChange={onChangeInput}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              name="duration"
              value={userInput.duration}
              onChange={onChangeInput}
            />
          </p>
        </div>
      </section>
      
    </>
  );
}
