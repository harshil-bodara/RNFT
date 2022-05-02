import React, {Fragment} from 'react'

import Header from '../layout/header'
import Footer from '../layout/footer'
import Landing from '../layout/landing'
import AuthContainer from '../auth/index'
import MainMenu from '../layout/mainmenu'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../../assets/css/layout.css'
import '../../assets/css/card.css'

const Home = ({showSigninModal}) => {
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

            <Fragment>
                <AuthContainer />
            </Fragment>

            <Fragment>
                <MainMenu />
            </Fragment>
            
        </Fragment>
    )
}

Home.propTypes = {
    showSigninModal: PropTypes.bool,
}

const mapStateToProps = state => ({
    showSigninModal: state.auth.showSigninModal,
})

export default connect(mapStateToProps)(Home)