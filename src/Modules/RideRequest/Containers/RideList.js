
import React, { Component } from 'react'
import { ListView, StyleSheet } from 'react-native'
import { fetchAllRides } from '../../../Redux/Actions'
import { connect } from 'react-redux'

import { Ride } from '../Components/Ride'

export class RideList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
    this.state = {
      dataSource: ds.cloneWithRows(this.props.rides)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.rides.length !== this.props.rides.length) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
      this.setState({
        dataSource: ds.cloneWithRows(nextProps.rides)
      })
    }
  }

  componentDidMount () {
    this.props.fetchRides()
  }

  render () {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(ride) => <Ride ride={ride} />}
        enableEmptySections
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})

const mapStateToProps = (state) => {
  return {
    rides: state.rideOffer.rides
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRides: () => dispatch(fetchAllRides())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RideList)