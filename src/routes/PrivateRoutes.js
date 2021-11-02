import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from  '../resources/slugs';
import LoadingComponent from '../components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.overviewTwo} render={() => <div>Open Tenders</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>Under Review</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>Financed</div>} />
                <Route exact path={SLUGS.tickets} render={() => <div>Closed</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>Flagged - Under review</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>Fllagged - Under investigation</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>Flagged - Activity banned</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>Approved Companies</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>Agents</div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
