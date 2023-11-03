import React from 'react'
import LineChart from './header/LineChart'
import PropTypes from 'prop-types'
import '../scss/AppContent.scss'

const AppContent = (props) => {
  const MainWebVitalData = []
  const label = []
  const Performance = []
  const Accessibility = []
  const BestPractices = []
  const SEO = []
  const PWA = []
  const FirstContentfulPaint = []
  const LargestContentfulPaint = []
  const FirstMeaningfulPaint = []
  const TotalBlockingTime = []
  const SpeedIndex = []
  props.data.currentData.forEach((data) => {
    label.push(data.msite.time.split(' ')[0])
    data.msite.webVitalData?.Performance && Performance.push(data.msite.webVitalData?.Performance)
    data.msite.webVitalData?.Accessibility &&
      Accessibility.push(data.msite.webVitalData?.Accessibility)
    data.msite.webVitalData?.BestPractices &&
      BestPractices.push(data.msite.webVitalData?.BestPractices)
    data.msite.webVitalData?.SEO && SEO.push(data.msite.webVitalData?.SEO)
    data.msite.webVitalData?.PWA && PWA.push(data.msite.webVitalData?.PWA)
    data.msite.webVitalData?.FirstContentfulPaint &&
      FirstContentfulPaint.push(data.msite.webVitalData?.FirstContentfulPaint)
    data.msite.webVitalData?.LargestContentfulPaint &&
      LargestContentfulPaint.push(data.msite.webVitalData?.LargestContentfulPaint)
    data.msite.webVitalData?.FirstMeaningfulPaint &&
      FirstMeaningfulPaint.push(data.msite.webVitalData?.FirstMeaningfulPaint)
    data.msite.webVitalData?.TotalBlockingTime &&
      TotalBlockingTime.push(data.msite.webVitalData?.TotalBlockingTime)
    data.msite.webVitalData?.SpeedIndex && SpeedIndex.push(data.msite.webVitalData?.SpeedIndex)
  })
  MainWebVitalData.push({ key: 'label', value: label })
  MainWebVitalData.push({ key: 'Performance', value: Performance })
  MainWebVitalData.push({ key: 'Accessibility', value: Accessibility })
  MainWebVitalData.push({ key: 'Best Practices', value: BestPractices })
  MainWebVitalData.push({ key: 'SEO', value: SEO })
  MainWebVitalData.push({ key: 'PWA', value: PWA })

  const labelData = MainWebVitalData.find((item) => {
    if (item.key === 'label') {
      return item.value
    } else {
      return []
    }
  })

  const vitalData = MainWebVitalData.filter((item) => {
    return item.key === props.webvitalsArray[props.selectedTab].name
  })
  const chartData = {
    labels: labelData.value,
    datasets: [
      {
        label: vitalData[0]?.key,
        data: vitalData[0]?.value,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const PerformanceRelatedChartData = {
    labels: labelData.value,
    datasets: [
      {
        label: 'FirstContentfulPaint',
        data: FirstContentfulPaint,
        fill: false,
        borderColor: 'rgb(255,0,0)',
        tension: 0.1,
      },
      {
        label: 'LargestContentfulPaint',
        data: LargestContentfulPaint,
        fill: false,
        borderColor: 'rgb(0,255,0)',
        tension: 0.1,
      },
      {
        label: 'FirstMeaningfulPaint',
        data: FirstMeaningfulPaint,
        fill: false,
        borderColor: 'rgb(0,0,255)',
        tension: 0.1,
      },
      {
        label: 'TotalBlockingTime',
        data: TotalBlockingTime,
        fill: false,
        borderColor: 'rgb(255,255,0)',
        tension: 0.1,
      },
      {
        label: 'SpeedIndex',
        data: SpeedIndex,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }
  return (
    <>
      <div className="DateHeader">
        <span className="dateFrom">
          <label>From:</label>
          <input type="date" id="from" />
        </span>
        <span className="dateTo">
          <label>To:</label>
          <input type="date" id="to" />
        </span>
        <span className="dateFrom">
          {' '}
          <input type="submit" value="Submit"></input>
        </span>
      </div>
      <div className="Graph-table-container">
        <div
          className="App"
          style={{
            width: '900px',
            height: '470px',
            padding: '10px',
            border: '5px solid',
          }}
        >
          <LineChart data={chartData} />
        </div>

        <table className="tableWrapper">
          <tr>
            <th className="headingWrapper">Date</th>
            <th className="headingWrapper">Value</th>
          </tr>
          {props.data.currentData.map((data, id) => {
            return (
              <tr key={id}>
                {data.msite.time && data.msite.webVitalData?.Performance && (
                  <>
                    <td className="dataWrapper">{data.msite.time.split(' ')[0]}</td>
                    <td className="dataWrapper">{data.msite.webVitalData?.Performance}</td>
                  </>
                )}
              </tr>
            )
          })}
        </table>
      </div>
      {props.selectedTab === 0 && (
        <div
          className="App"
          style={{
            width: '900px',
            height: '470px',
            padding: '10px',
            margin: 'auto',
            border: '5px solid',
          }}
        >
          <LineChart data={PerformanceRelatedChartData} />
        </div>
      )}
    </>
  )
}

AppContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  webvitalsArray: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func,
}

export default React.memo(AppContent)
