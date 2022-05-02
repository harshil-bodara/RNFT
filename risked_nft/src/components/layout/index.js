import React, {Fragment} from 'react'

import Header from './header'
import Footer from './footer'
import Landing from './landing'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../../assets/css/layout.css'
import '../../assets/css/card.css'

const Layout = ({showSigninModal}) => {
    return (
        <Fragment>

            <Fragment>
                <Header />
            </Fragment>

            <Fragment>
                <Landing />
            </Fragment>

            <Fragment>
                <Footer />
            </Fragment>

        </Fragment>
    )
}

Layout.propTypes = {
    showSigninModal: PropTypes.bool
}

const mapStateToProps = state => ({
    showSigninModal: state.auth.showSigninModal
})

export default connect(mapStateToProps)(Layout)