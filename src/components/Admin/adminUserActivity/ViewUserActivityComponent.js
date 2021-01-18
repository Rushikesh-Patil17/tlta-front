import React, { Component } from "react";
import ActivityService from "../../../services/AdminUserActivityService";

class ViewUserActivityComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userActivityId: this.props.match.params.userActivityId,
            activity: {},
        };
    }

    componentDidMount() {
        ActivityService.getUserActivityById(this.state.userActivityId).then(
            (res) => {
                this.state = res.data;
                console.log(this.state);
            }
        );
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View User Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>User Activity Id: </label>
                            <div>{this.state.userActivityId}</div>
                        </div>

                        <div className="row">
                            <label>User Activity Id: </label>
                            <div>{this.state.userActivityId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewUserActivityComponent;
