import React, {Component} from 'react';
import {Header, Navigation, Home, Contact, Reviews, Sales, Products, AboutUs} from './components/index';

import Scroll from 'react-scroll'
import {IntlProvider} from 'react-intl';
import {addLocaleData} from 'react-intl';
import uk from 'react-intl/locale-data/uk';
import pl from 'react-intl/locale-data/pl';

addLocaleData(uk);
addLocaleData(pl);

let messagesUa = require('./locale/locale_ua.json');
let messagesEn = require('./locale/locale_en.json');
let messagesPl = require('./locale/locale_pl.json');
let localeUa = 'uk';
let localeEn = 'en';
let localePl = 'pl';

let Element = Scroll.Element;

class App extends Component {
    constructor() {
        super();

        this.state = {
            locale: localeUa,
            messages: messagesUa
        };
    };

    handleLanguageChange = (lang) => {
        switch (lang) {
            case 'ua':
                this.setState({messages: messagesUa, locale: localeUa});
                break;
            case 'en':
                this.setState({messages: messagesEn, locale: localeEn});
                break;
            case 'pl':
                this.setState({messages: messagesPl, locale: localePl});
                break;
        }
    };

    render() {
        return (
            <IntlProvider
                locale={ this.state.locale }
                messages={ this.state.messages }
            >
                <div>
                    <Header onLanguageChange={ this.handleLanguageChange }/>

                    <Navigation/>

                    <Element name="section_home">
                        <Home/>
                    </Element>

                    <Element name="section_products">
                        <Products/>
                    </Element>

                    <Element name="section_about-us">
                        <AboutUs/>
                    </Element>

                    <Element name="section_testimonials">
                        <Reviews/>
                    </Element>

                    <Element name="section_sales">
                        <Sales/>
                    </Element>

                    <Element name="section_contact">
                        <Contact/>
                    </Element>

                </div>
            </IntlProvider>
        )
    };
}

export default App;
