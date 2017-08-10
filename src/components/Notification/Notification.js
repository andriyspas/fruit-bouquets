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

        console.log(nextProps);

        if (nextProps.success === true) {
            let message = 'success';
            this.addNotification('success', message);
        }

        if (nextProps.error === true) {
            let message = 'error';
            this.addNotification('error', message);
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