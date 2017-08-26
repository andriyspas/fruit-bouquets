import React, { Component } from 'react';
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';
import Scroll from 'react-scroll';
import { Navbar, NavDropdown, MenuItem } from  'react-bootstrap';

let Link = Scroll.Link;

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            minimized: false,
        };
    };

    handleScroll = (event) => {
        const scrollTop = event.srcElement.body.scrollTop;

        this.setState({
            minimized: (scrollTop > 100) || false,
        });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    };

    handleSelect = (eventKey) => {
        this.props.onLanguageChange(eventKey);
    };

    render() {
        const navbarClassName = this.state.minimized ? "navbar-minimized" : null;

        return (
            <Navbar className={ navbarClassName } fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link
                            to="section_home"
                            spy={ true }
                            smooth={ true }
                            duration={ 500 }
                            onSetActive={ this.handleSetActive }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.797 191.797" width="512" height="512">
                                <path d="M46.258 191.797c-2.183 0-4.227-1.92-5.714-3.315-.527-.495-1.025-.963-1.45-1.292-.54-.423-2.326.18-3.76.666-1.223.414-2.487.843-3.803 1.03-4.867.706-6.626-4.115-8.338-8.766l-.067-.183c-.532-1.446-.887-1.52-3.432-1.506-1.473.02-3.3.03-5.377-.562-5.192-1.483-4.007-6.02-3.438-8.2.212-.814.477-1.826.384-2.255-.122-.558-.6-.922-1.83-1.746-1.263-.847-2.992-2.005-4.464-4.146-1.28-1.86-1.48-4.023-.58-6.25.983-2.422 3.06-4.33 5.7-5.24l19.33-6.648c1.925-3.293 10.89-19.062 13.265-31.03 2.254-11.368 2.506-21.67 2.527-24.722-7.114-5.654-13.72-13.842-11.756-22.355 1.628-7.054 4.557-10.25 7.39-13.34 1.963-2.145 3.993-4.36 5.752-8.08 1.392-2.94 1.335-5.7 1.276-8.62-.086-4.21-.184-8.98 5.033-13.153 4.855-3.887 9.276-1.7 13.175.23 3.553 1.757 6.618 3.275 10.47 1.39 2.804-1.374 3.605-3.65 4.53-6.285 1.167-3.313 2.617-7.435 8.81-8.187 3.83-.467 6.56.166 8.467 1.12.427-2.528 1.623-4.858 3.474-6.708 4.41-4.41 11.328-4.814 16.2-1.218 4.87-3.598 11.79-3.19 16.197 1.218 2.353 2.353 3.648 5.48 3.648 8.807 0 2.696-.853 5.263-2.43 7.39 1.132 1.528 1.89 3.28 2.23 5.145 2.07.912 6.44 3.09 8.678 6.072 1.96 2.613 2.877 6.224 3.275 8.395 4.953.35 8.877 4.49 8.877 9.53v6.39l4.518-4.518c3.724-3.726 9.787-3.727 13.513 0 3.726 3.726 3.726 9.787 0 13.513l-4.518 4.518h6.39c5.268 0 9.554 4.286 9.554 9.555s-4.286 9.556-9.555 9.556h-6.39l4.52 4.518c3.725 3.726 3.725 9.786 0 13.512-1.333 1.333-2.99 2.224-4.792 2.6.712 1.96 1.385 4.596.943 6.802-.834 4.17-6.143 8.618-11.472 7.885-3.556-.48-8.05 1.718-9.413 3.867-1.954 3.082-6.546 6.738-7.16 7.22-.998.895-11.522 10-21.833 6.255-2.294-.834-4.19-1.957-5.847-3.172-4.514 1.117-24.39 6.055-35.456 9.106-10.54 2.907-26.56 12.005-30.922 14.545l2.5 18.742c.563 4.23-1.12 8.454-4.393 11.03-.815.63-1.634.89-2.434.89zm-7.707-8.748c1.054 0 2.073.26 3 .982.57.443 1.135.973 1.732 1.533.765.72 2.357 2.213 2.954 2.225 2.15-1.735 3.262-4.555 2.884-7.388l-2.436-18.265c-2.298-.18-6.195-1.243-11.078-5.516-4.193-3.668-5.864-6.767-6.5-8.9l-17.717 6.094c-1.547.53-2.747 1.61-3.294 2.96-.505 1.247-.175 1.982.17 2.482 1.036 1.51 2.234 2.312 3.393 3.087 1.422.953 3.035 2.034 3.51 4.22.298 1.364-.067 2.763-.42 4.115-.768 2.935-.492 3.014.666 3.345 1.518.434 2.9.42 4.24.41 2.535-.028 5.685-.052 7.223 4.12l.066.185c1.608 4.367 2.54 6.39 4.02 6.188.948-.136 2.034-.504 3.086-.86 1.445-.488 3.004-1.017 4.5-1.017zm-5.816-37.41c.063.773.626 3.7 5.508 7.973 5.098 4.46 8.6 4.6 9.513 4.54 2.825-1.673 20.708-12.117 32.69-15.423 9.512-2.624 25.478-6.628 32.718-8.43-.084-.075-.168-.15-.25-.226-3.403-3.074-5.864-5.294-10.517-4.66-4.7.642-9.717 1.324-14.62.166-2.318.607-13.616 3.71-21.427 8.475-8.782 5.36-17.378 13.454-17.464 13.535-.803.758-2.067.724-2.827-.08-.76-.802-.725-2.066.078-2.826.362-.343 8.98-8.46 18.127-14.043 5.654-3.45 12.792-6.018 17.604-7.52-2.644-1.66-5.194-4.13-7.58-7.742-2.31-3.5-4.26-6.977-5.98-10.045-2.043-3.644-3.868-6.9-5.872-9.525-.728 5.068-2.436 13.85-6.3 23.332-5.8 14.237-8.403 17.317-8.682 17.622-.744.814-2.01.874-2.825.128-.806-.736-.87-1.982-.15-2.8.145-.175 2.537-3.16 7.954-16.46 4.736-11.625 6.107-22.352 6.43-25.578-.958-.765-1.985-1.4-3.107-1.89-1.86-.812-4.17-2.064-6.598-3.668-.152 4.72-.69 13.252-2.552 22.638-2.587 13.043-12.14 29.58-13.874 32.51zm85.947-11.88c1.58 1.233 3.34 2.346 5.498 3.13 8.324 3.03 17.736-5.417 17.83-5.503.038-.035.08-.07.12-.102 1.28-.994 4.905-4.056 6.297-6.25 2.377-3.75 8.487-6.36 13.335-5.69 3.218.443 6.58-2.578 7.007-4.706.345-1.726-.673-4.535-1.38-6.118-1.636-.42-3.137-1.272-4.363-2.5l-4.518-4.517v6.39c0 5.27-4.286 9.555-9.555 9.555s-9.555-4.286-9.555-9.555v-6.39l-4.518 4.518c-1.805 1.805-4.204 2.8-6.756 2.8-2.552 0-4.95-.994-6.756-2.8-3.26-3.26-3.667-8.308-1.223-12.014-4.913 2.412-10.557 5.343-14.133 7.708-7.493 4.956-17.42 13.003-17.52 13.084-.858.696-2.117.565-2.814-.292-.696-.857-.565-2.117.292-2.813.412-.335 10.18-8.252 17.835-13.314 5.146-3.403 14.053-7.77 19.61-10.39h-3.918c-5.27 0-9.555-4.286-9.555-9.555s4.286-9.555 9.555-9.555h6.39l-4.52-4.518c-3.725-3.726-3.725-9.787 0-13.513s9.79-3.726 13.514 0l4.518 4.518v-6.39c0-4.112 2.614-7.628 6.268-8.97-.34-1.796-1.07-4.635-2.51-6.555-1.203-1.604-3.535-3.055-5.467-4.044-.438 2.5-1.63 4.798-3.46 6.628-4.408 4.408-11.327 4.813-16.197 1.218-.634.468-1.302.867-1.994 1.2.31 3.183.785 10.553-.735 16.137-.29 1.065-1.39 1.696-2.456 1.404-1.065-.29-1.694-1.39-1.404-2.455 1.234-4.535.95-10.72.678-13.95-3.664.437-7.482-.75-10.287-3.554-4.407-4.408-4.814-11.326-1.218-16.198-.936-1.262-1.615-2.678-2.015-4.184-.404-.663-2.343-3.164-8.224-2.457-3.728.452-4.4 2.368-5.52 5.542-1.01 2.877-2.27 6.456-6.543 8.55-5.616 2.755-10.27.452-14.004-1.397-3.966-1.96-6.16-2.88-8.903-.69-3.675 2.94-3.615 5.88-3.532 9.948.064 3.104.136 6.62-1.66 10.414-2.016 4.264-4.354 6.816-6.418 9.07-2.71 2.956-5.05 5.51-6.44 11.537-2.283 9.895 12.14 20.892 20 24.32 1.837.8 3.443 1.88 4.897 3.186l.07.064c3.73 3.38 6.456 8.24 9.478 13.63 1.77 3.157 3.6 6.42 5.83 9.797 3.27 4.952 6.747 7.36 10.463 8.392.1.02.198.046.293.08 4.176 1.074 8.652.466 13.47-.19 6.51-.882 10.18 2.438 13.74 5.653.97.877 1.953 1.766 3.018 2.602.025.018.047.036.07.054zm22.716-39.083c.258 0 .518.05.766.152.747.31 1.234 1.038 1.234 1.847v11.218c0 3.063 2.492 5.555 5.556 5.555 3.063 0 5.555-2.492 5.555-5.555V96.677c0-.81.487-1.538 1.234-1.848.75-.31 1.608-.14 2.18.433l7.933 7.932c.854.854 1.936 1.396 3.108 1.567.043.005.086.01.128.018 1.682.21 3.406-.37 4.62-1.585 2.167-2.166 2.167-5.69 0-7.855l-7.932-7.932c-.572-.57-.743-1.432-.434-2.18.31-.747 1.04-1.234 1.848-1.234h11.218c3.063 0 5.555-2.492 5.555-5.556 0-3.063-2.492-5.555-5.555-5.555H167.19c-.81 0-1.538-.487-1.848-1.234-.31-.75-.14-1.61.434-2.18l7.933-7.933c2.165-2.166 2.165-5.69 0-7.856-2.166-2.165-5.69-2.166-7.857 0l-7.932 7.934c-.57.572-1.43.743-2.18.434-.746-.31-1.233-1.04-1.233-1.848V48.982c0-3.063-2.492-5.555-5.555-5.555-.208 0-.413.012-.615.034-.077.018-.155.03-.236.037l-.062.005c-2.63.438-4.642 2.73-4.642 5.48V60.2c0 .81-.487 1.538-1.234 1.848-.75.31-1.607.14-2.18-.434l-7.932-7.933c-2.167-2.166-5.69-2.165-7.856 0-1.05 1.05-1.627 2.445-1.627 3.93 0 1.483.578 2.88 1.627 3.928l7.933 7.932c.572.57.743 1.432.434 2.18-.31.747-1.038 1.234-1.847 1.234h-11.218c-3.063 0-5.555 2.492-5.555 5.555s2.492 5.554 5.555 5.554h11.218c.81 0 1.538.487 1.848 1.234.31.748.14 1.607-.433 2.18l-1.516 1.516-.063.065-6.353 6.35c-1.05 1.05-1.627 2.445-1.627 3.93s.578 2.878 1.627 3.927c1.05 1.05 2.445 1.628 3.93 1.628s2.877-.578 3.927-1.628l7.933-7.932c.38-.385.892-.588 1.413-.588zM118.03 32.625c.51 0 1.022.195 1.413.586 3.297 3.296 8.66 3.296 11.956 0 1.596-1.596 2.476-3.72 2.476-5.978 0-.18-.006-.358-.017-.537-.018-.1-.025-.203-.026-.307-.19-1.94-1.038-3.738-2.435-5.135-.376-.375-.587-.884-.587-1.414s.21-1.04.586-1.415c1.596-1.597 2.476-3.72 2.476-5.978s-.88-4.382-2.477-5.98c-3.297-3.295-8.66-3.293-11.957 0-.78.782-2.047.782-2.828 0-3.297-3.294-8.66-3.294-11.956 0-1.598 1.598-2.478 3.722-2.478 5.98 0 .632.07 1.254.203 1.856.05.138.086.278.105.418.385 1.388 1.122 2.658 2.168 3.704.375.375.586.884.586 1.414s-.21 1.04-.586 1.414c-3.296 3.297-3.296 8.66 0 11.957 2.287 2.285 5.57 2.982 8.466 2.1.087-.036.177-.065.27-.088 1.178-.404 2.283-1.075 3.22-2.013.392-.39.904-.585 1.415-.585zM77.18 95.31c-3.943 0-7.544-1.928-9.734-5.12-3.807.71-7.715-.475-10.503-3.264-2.79-2.788-3.972-6.696-3.263-10.503-3.193-2.19-5.12-5.79-5.12-9.733 0-3.943 1.927-7.544 5.12-9.734-.71-3.807.474-7.715 3.263-10.503 2.788-2.79 6.697-3.974 10.503-3.264 2.19-3.193 5.79-5.12 9.734-5.12s7.544 1.927 9.734 5.12c3.807-.712 7.715.474 10.503 3.263 2.788 2.788 3.972 6.696 3.263 10.503 3.193 2.19 5.12 5.79 5.12 9.734 0 3.942-1.927 7.543-5.12 9.733.71 3.807-.475 7.715-3.263 10.503-2.787 2.79-6.695 3.974-10.503 3.264-2.19 3.192-5.79 5.12-9.734 5.12zm-8.778-9.428c.738 0 1.44.41 1.787 1.103 1.34 2.667 4.018 4.324 6.99 4.324s5.65-1.658 6.99-4.325c.445-.888 1.473-1.317 2.417-1 2.837.937 5.9.215 8.002-1.887s2.822-5.167 1.885-8c-.313-.943.113-1.97 1-2.417 2.668-1.34 4.325-4.02 4.325-6.99s-1.657-5.65-4.324-6.99c-.887-.446-1.313-1.475-1-2.417.937-2.834.215-5.9-1.887-8.002-2.104-2.102-5.167-2.824-8.003-1.885-.942.314-1.97-.113-2.416-1-1.34-2.668-4.018-4.325-6.99-4.325s-5.65 1.657-6.99 4.324c-.446.887-1.476 1.314-2.417 1-2.84-.937-5.9-.215-8.002 1.887s-2.823 5.168-1.884 8.002c.313.94-.113 1.97-1 2.416-2.67 1.34-4.326 4.02-4.326 6.992s1.657 5.65 4.326 6.99c.887.446 1.313 1.476 1 2.417-.94 2.834-.217 5.9 1.885 8 2.104 2.104 5.17 2.828 8.003 1.887.208-.07.42-.102.63-.102zm80.548 4.115c-3.087 0-5.99-1.202-8.173-3.386s-3.386-5.085-3.386-8.173 1.203-5.99 3.387-8.173c4.507-4.508 11.84-4.507 16.347 0 2.184 2.183 3.386 5.085 3.386 8.173s-1.202 5.99-3.386 8.174-5.086 3.387-8.174 3.387zm0-19.114c-1.936 0-3.87.736-5.345 2.21-1.428 1.428-2.214 3.326-2.214 5.345 0 2.02.787 3.918 2.215 5.346s3.326 2.214 5.345 2.214c2.02 0 3.918-.786 5.346-2.214s2.214-3.326 2.214-5.346-.786-3.917-2.214-5.345c-1.474-1.473-3.41-2.21-5.346-2.21zm-71.77 7.365c-3.088 0-5.99-1.202-8.173-3.386-4.507-4.507-4.507-11.84 0-16.347 2.183-2.184 5.085-3.386 8.173-3.386s5.99 1.2 8.174 3.385c4.506 4.507 4.506 11.84 0 16.347-2.184 2.184-5.086 3.386-8.174 3.386zm0-19.118c-2.02 0-3.917.786-5.345 2.214-2.947 2.947-2.947 7.743 0 10.69 1.428 1.428 3.326 2.214 5.345 2.214 2.02 0 3.918-.786 5.346-2.214 2.946-2.947 2.946-7.743 0-10.69-1.428-1.428-3.327-2.214-5.346-2.214zm40.85-30.868c-2.25 0-4.365-.876-5.956-2.467s-2.467-3.705-2.467-5.955.876-4.363 2.467-5.954 3.705-2.467 5.955-2.467 4.363.875 5.954 2.466c3.283 3.283 3.283 8.626 0 11.91-1.59 1.59-3.705 2.466-5.955 2.466zm0-12.84c-1.134 0-2.266.43-3.128 1.292-1.724 1.724-1.724 4.53 0 6.253 1.725 1.725 4.53 1.725 6.254 0 .835-.835 1.295-1.945 1.295-3.127 0-1.18-.46-2.29-1.294-3.126-.862-.862-1.994-1.293-3.127-1.293z" fill="#FFF"/>
                            </svg>

                            <div>bouquets of fruits</div>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <ul className="nav navbar-nav navbar-right">
                        <li role="presentation">
                            <Link
                                to="section_home"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Home
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="section_products"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Products
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="section_about-us"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                About Us
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="section_testimonials"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Reviews
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="section_sales"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Sales
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="section_contact"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Contact
                            </Link>
                        </li>

                        <li role="presentation">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473.806 473.806" width="20" height="20">
                                    <g fill="#FFF">
                                        <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zM256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zM473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"/>
                                    </g>
                                </svg>
                                <div>+88 888 888 88 88</div>
                            </a>
                        </li>

                        <NavDropdown eventKey={1} title={ <FormattedMessage id="language"/> } id="dropdown" onSelect={ this.handleSelect }>
                            <MenuItem eventKey='en'>ENG</MenuItem>
                            <MenuItem eventKey='pl'>POL</MenuItem>
                            <MenuItem eventKey='ua'>UKR</MenuItem>
                        </NavDropdown>
                    </ul>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

Header.propTypes = {
    onLanguageChange: PropTypes.func.isRequired,
};

export default Header;