import React, { Component } from 'react'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'

import { Button, TextInput } from '../../shared/components'
import { saveRideOffer } from '../../../services/firebase'
import styles from './styles/RideOfferScreenStyles'

export const INITIAL_STATE = {
  origin: '',
  destination: '',
  days: '',
  hours: ''
}

export class RideOfferScreen extends Component {
  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
  }

  render () {
    return (
      <View style={styles.flexible}>
        <View style={styles.container}>
          <RkText style={styles.title}>
            Ride Offer
          </RkText>
          <View style={styles.inputTextsContainer}>
            <TextInput label='ORIGIN' onChangeText={(origin) => this.setState({origin})} />
            <TextInput label='DESTINATION' onChangeText={(destination) => this.setState({destination})} />
            <TextInput label='DAYS' onChangeText={(days) => this.setState({days})} />
            <TextInput label='HOUR' onChangeText={(hours) => this.setState({hours})} />
          </View>
          <Button text='Offer Ride' onPress={() => saveRideOffer(this.state)} />
        </View>
      </View>
    )
  }
}

export default RideOfferScreen
