// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationDetails} = props
  console.log(vaccinationDetails)
  return (
    <div className="half-pie-bg">
      <h1 className="vac-by-gender-heading">Vaccination by gender</h1>
      <ResponsiveContainer width={1000} height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="70%"
            data={vaccinationDetails}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
