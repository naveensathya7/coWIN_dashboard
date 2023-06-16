// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const statusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}

class CowinDashboard extends Component {
  state = {formattedData: {}, renderStatus: statusConstants.initial}

  componentDidMount() {
    this.getApiDetails()
  }

  getApiDetails = async () => {
    this.setState({renderStatus: statusConstants.loading})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({formattedData, renderStatus: statusConstants.success})
    } else {
      this.setState({renderStatus: statusConstants.failure})
    }
  }

  renderFailure = () => (
    <div className="failure-bg">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failure-desc">Something went Wrong</h1>
    </div>
  )

  renderViews = () => {
    const {renderStatus} = this.state

    switch (renderStatus) {
      case statusConstants.loading:
        return this.renderLoader()
      case statusConstants.success:
        return this.renderPyCharts()
      case statusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  renderPyCharts = () => {
    const {formattedData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = formattedData
    return (
      <div>
        <VaccinationCoverage vaccinationDetails={last7DaysVaccination} />
        <VaccinationByGender vaccinationDetails={vaccinationByGender} />
        <VaccinationByAge vaccinationDetails={vaccinationByAge} />
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    return (
      <div className="cowin-bg">
        <div className="logo">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png "
            alt="website logo"
          />
          <h1 className="main-heading">co-WIN</h1>
        </div>
        <h1 className="failure-heading">CoWIN vaccination in India</h1>
        <div>{this.renderViews()}</div>
      </div>
    )
  }
}
export default CowinDashboard
