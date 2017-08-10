import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

class Notification extends Component {
    constructor(props) {
        super(props);

        this._notificationSystem = null;
    }

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    addNotification = (level, message) => {
        this._notificationSystem.addNotification({
            message: message,
            level: level
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.submitted === this.props.submitted) {
            return;
        }

        if (nextProps.success === true) {
            let message = 'Your message has been successfully sent. We will contact you very soon!';
            this.addNotification('success', message);
        }

        if (nextProps.error === true) {
            let message = 'error';
            this.addNotification('Failed to send your message. Please try later or contact administrator by other way.', message);
        }
    };

    render() {
        return (
            <div>
                <NotificationSystem ref="notificationSystem"/>
            </div>
        );
    };
}

export default Notification;