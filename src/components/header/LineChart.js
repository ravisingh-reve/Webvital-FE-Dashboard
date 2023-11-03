/* eslint-disable prettier/prettier */
import React from 'react'
import { Line } from "react-chartjs-2"
import {Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js/auto'
import PropTypes from 'prop-types'

ChartJs.register(
    LineElement, CategoryScale, LinearScale, PointElement
)

const LineChart = (props) => {

  return <Line data={props.data}></Line>
}

LineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired
  }

export default React.memo(LineChart)
