import React from 'react'
import { View, Dimensions} from 'react-native'
import {LineChart} from 'react-native-chart-kit';
import styles from './Chart.style'

const Chart = ({sparkline7d}) => {

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ['7-DAYS PERIOD'],
          datasets: [
            {
              data: sparkline7d,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16} 
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#181b3e',
          backgroundGradientFrom: '#181b3e',
          backgroundGradientTo: '#181b3e',
          decimalPlaces: 2,
          color: (opacity = 255) => `rgba(217, 210, 210, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          borderRadius: 5,
        }}
      />
    </View>
  )
}

export default Chart
