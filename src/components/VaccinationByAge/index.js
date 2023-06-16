// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationDetails} = props
  console.log(vaccinationDetails)
  return (
    <div className="pie-bg">
      <h1 className="vac-by-age-heading">Vaccination by Age</h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationDetails}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="90%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill=" #a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{padding: 10}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
