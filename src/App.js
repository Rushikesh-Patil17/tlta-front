import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashBoard from './components/AdminDashBoard';
import ModeratorDashBoard from './components/ModeratorDashBoard';

import NotFound from './components/NotFound';
import AdminManageUser from "./components/AdminManageUser";
import ModeratorManageUser from "./components/ModeratorManageUser";
import AdminManageActivity from "./components/AdminManageActivities";
import ModeratorManageActivities from "./components/ModeratorManageActivities";
import AdminManageAssessments from './components/AdminManageAssessments';
import ModeratorManageAssessments from './components/ModeratorManageAssessments';
import AdminReviewCertificates from './components/AdminReviewCertificates';
import FooterComponent from './components/FooterComponent';
import ListAssessment from './components/Admin/adminAssessmentComponents/ListAssessmentComponent';
import AddAssessment from './components/Admin/adminAssessmentComponents/CreateAssessmentComponent';
import UpdateAssessment from './components/Admin/adminAssessmentComponents/UpdateAssessmentComponent';
import ViewAssessment from './components/Admin/adminAssessmentComponents/ViewAssessmentComponent';
import ListUsers from './components/Admin/adminUserComponent/ListUserComponent';
import AddUser from './components/Admin/adminUserComponent/CreateUserComponent';
import UpdateUser from './components/Admin/adminUserComponent/UpdateUserComponent';
import ViewUser from './components/Admin/adminUserComponent/ViewUserComponent';

import ListActivities from './components/Admin/adminActivityComponent/ViewActivityComponent';
import AddActivity from './components/Admin/adminActivityComponent/CreateActivityComponent';
import UpdateActivity from './components/Admin/adminActivityComponent/UpdateActivityComponent';
import ViewActivity from './components/Admin/adminActivityComponent/ViewActivityComponent';import ListUserActivities from './components/Admin/adminUserActivity/ListUserActivityComponent';
import UpdateUserActivity from './components/Admin/adminUserActivity/UpdateUserActivityComponent';
import ViewUserActivities from './components/Admin/adminUserActivity/ViewUserActivityComponent';


import Login from './Login';
import Logout from './Logout';

const AppRouter = () => (
    <BrowserRouter>
       <Header />
        <div className='container'>
            <Switch>
                <Route path="/" component={AdminDashBoard} exact={true} />
                <Route path="/moderator" component={ModeratorDashBoard} exact={true} />
                <Route path="/login" component={Login} exact={true} />
                <Route path="/logout" component={Logout} exact={true} />

                <Route path="/adminManageUsers" component={AdminManageUser} />
                <Route path="/adminActivities" component={AdminManageActivity} />
                <Route path="/adminAssessments" component={AdminManageAssessments} />
                <Route path="/usersActivities" component={AdminReviewCertificates} />

                <Route path="/assessments" component={ListAssessment} />
                <Route path="/add-assessment" component={AddAssessment} />
                <Route path = "/update-assessment/:id" component= {UpdateAssessment}></Route>
                <Route path = "/view-assessment/:id" component= {ViewAssessment}></Route>             

                <Route path="/users" component={ListUsers} />
                <Route path="/add-user" component={AddUser} />
                <Route path = "/update-user/:id" component= {UpdateUser}></Route>
                <Route path = "/view-user/:id" component= {ViewUser}></Route>             

                <Route path="/activities" component={ListActivities} />
                <Route path="/add-activity" component={AddActivity} />
                <Route path = "/update-activity/:id" component= {UpdateActivity}></Route>
                <Route path = "/view-activity/:id" component= {ViewActivity}></Route>  

                <Route path="/moderatorManageUsers" component={ModeratorManageUser} />
                <Route path="/moderatorManageActivities" component={ModeratorManageActivities} />
                <Route path="/moderatorManageAssessments" component={ModeratorManageAssessments} />

                <Route path="/view-user-activity/:userActivityId" component={ViewUserActivities} />
                <Route path="/userActivity" component={ListUserActivities} />
                <Route path = "/update-user-activity/:userActivityId" component= {UpdateUserActivity}></Route>
                {/* <Route path="/add-activity" component={AddActivity} />
                
                <Route path = "/view-activity/:id" component= {ViewActivity}></Route>  
                     */}
                <Route component={NotFound} />
            </Switch>
        </div>
        <FooterComponent />
    </BrowserRouter>
);

export default AppRouter;