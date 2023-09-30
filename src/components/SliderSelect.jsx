import SliderComponent from './common/SliderComponent.jsx'

const SliderSelect = ({ data, setData }) => {
  // console.log(data)

  return (
    <>
      <SliderComponent
        label="Home Value"
        min={0}
        max={10000}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        // onChange={(e, value) => console.log(value)}
        onChange={(e, value) => setData({
          ...data, // Spread Operator
          homeValue: value,
          downPayment: (value * 0.2),
          loanAmount: (value * 0.8),
        })}
        unit='$'
        amount={data.homeValue}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value,
          loanAmount: (data.homeValue - value),
        })}
        unit='$'
        amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        step={100}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: value,
          downPayment: (data.homeValue - value),
        })}
        unit='$'
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        step={0.5}
        unit='%'
        amount={data.interestRate}
        defaultValue={data.interestRate}
        value={data.interestRate}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
      />
    </>
  )
}

export default SliderSelect