import React, { Component } from 'react';

import PageWrapper from '../../containers/PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';

class PageHome extends Component {
  render() {
    return (
      <PageWrapper>
        <ContentBox title="Exertime Administration Portal">
          <p>From this portal you can configure various functions of the Exertime clients such as:</p>
          <ul>
            <li>Create new or edit existing organisations</li>
            <li>Create new or edit existing departments</li>
            <li>Edit calorie goals and Exertime runtime variables per department</li>
            <li>View user activity</li>
            <li>Update Exertime user weights</li>
            <li>Manage which exercises department have access too or disable exercises for all departments.</li>
            <li>Adjust coefficients per exercises</li>
          </ul>
        </ContentBox>
      </PageWrapper>
    );
  }
}

export default PageHome;
