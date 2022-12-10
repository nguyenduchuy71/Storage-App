import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { MAX_QUOTA } from '../config/util'

ChartJS.register(ArcElement, Tooltip, Legend)

function Chart ({ usedQuota }) {
  const data = {
    labels: ['Remain', 'Used'],
    datasets: [
      {
        label: 'The used quota',
        data: [MAX_QUOTA - usedQuota, usedQuota],
        backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4
      }
    ]
  }
  return <Doughnut data={data} />
}

export default Chart
