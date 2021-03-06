import React, { Component } from 'react';

import {
  BaseTemplate, Card, Button, Select, FormTemplate,
} from '@myob/myob-widgets';
import protegeCards from '../data/juniorDeveloperCards.json';
import generalDeveloperCards from '../data/generalDeveloperCards.json';

export default class StartHere extends Component {
  render() {
    const { router } = this.props;
    return (
      <div className="start-here">
        <BaseTemplate>
          <Card>
            <h1>Hello!</h1>
            <br />
            <p>
              I am Alfred.
              {' '}
              <br />
              I'm here to help you identify areas of your skills that you can improve.
              <br />
              Then, we'll set some goals to help you grow these skills.
            </p>
            <p>First, please tell me. You are a...</p>
            <FormTemplate>
              <Select
                name="userType"
                label="hidden"
                hideLabel
                width="xl"
                onChange={(e) => { this.setState({ userType: e.target.value }); }}
              >
                <Select.Option value="placeholder" label="Select your role" hidden />
                <Select.Option value="PROTEGE" label="Protege" />
                <Select.Option value="GENERAL_DEVELOPER" label="Developer" />
                <Select.Option value="BUSINESS_ANALYST" label="Business Analyst" />
              </Select>
              <br />
              <Button type="primary" onClick={() => { router.navigate('about', { user: 'hello' }); }}>Let's go!</Button>
            </FormTemplate>
          </Card>
        </BaseTemplate>
      </div>
    );
  }
}
