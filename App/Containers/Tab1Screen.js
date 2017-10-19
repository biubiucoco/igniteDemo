import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/Tab1ScreenStyle'
import search from '../Redux/SearchRedux'
import { bindActionCreators } from 'redux'
class Tab1Screen extends Component {

  render () {
    this.props.search(['11231'])
    this.props.cancelSearch()
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>Tab1Screen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.SearchRedux
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ search: search.search, cancelSearch: search.cancelSearch }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab1Screen)
