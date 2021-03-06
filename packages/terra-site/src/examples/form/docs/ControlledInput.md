# Controlled Input Example

```jsx
import React from 'react';
import Button from 'terra-button';
import Fieldset from 'terra-form/lib/Fieldset';
import Control from 'terra-form/lib/Control';
import TextField from 'terra-form/lib/TextField';
import TextareaField from 'terra-form/lib/TextareaField';
import NumberField from 'terra-form/lib/NumberField';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        jobTitle: '',
        first: '',
        middle: '',
        last: '',
        travelPercentage: 0,
      },
    };

    this.handleEmploymentUpdate = this.handleEmploymentUpdate.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTravelPercentageChange = this.handleTravelPercentageChange.bind(this);
    this.handleExperienceUpdate = this.handleExperienceUpdate.bind(this);
    this.handlePreferredLocation = this.handlePreferredLocation.bind(this);
    this.handleInterestedDivisions = this.handleInterestedDivisions.bind(this);
  }

  handleEmploymentUpdate(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.jobTitle = e.target.value;
    this.setState({ formData });
  }

  handleNameUpdate(e) {
    const formData = Object.assign({}, this.state.formData);
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  handleTravelPercentageChange(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.travelPercentage = e.target.value;
    this.setState({ formData });
  }

  handleExperienceUpdate(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.experience = e.target.value;
    this.setState({ formData });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({
      submittedData: Object.assign({}, this.state.formData),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField
          label="Current or Most Recent Employment Title"
          helpText="This is your most recent employment position"
          required
        />
        <Fieldset
          legend="Name"
          required
        >
          <TextField
            label="First"
            value={this.state.formData.first}
            onChange={this.handleNameUpdate}
            name="first"
            type="text"
            isInline
            required
          />
          <TextField
            label="Middle"
            value={this.state.formData.middle}
            onChange={this.handleNameUpdate}
            name="middle"
            type="text"
            isInline
          />
          <TextField
            label="Last"
            value={this.state.formData.last}
            onChange={this.handleNameUpdate}
            name="last"
            type="text"
            isInline
            required
          />
        </Fieldset>
         <Fieldset
          legend="Preferred Location"
        >
          <Control
            type="radio"
            value="north"
            labelText="North Campus"
            checked={this.state.formData.preferredLocation === "north"}
            onChange={this.handlePreferredLocation}
            name="preferred_location"
            isInline
          />
          <Control
            type="radio"
            value="south"
            labelText="South Campus"
            checked={this.state.formData.preferredLocation === "south"}
            onChange={this.handlePreferredLocation}
            name="preferred_location"
            isInline
          />
          <Control
            type="radio"
            value="east"
            labelText="East Campus"
            checked={this.state.formData.preferredLocation === "east"}
            onChange={this.handlePreferredLocation}
            name="preferred_location"
            isInline
          />
        </Fieldset>
        <Fieldset
          legend="What divisions are you most interested in?"
        >
          <Control
            type="checkbox"
            value="ux"
            labelText="User Experience Development"
            checked={this.state.formData.interestedDivisions.includes("ux")}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
          <Control
            type="checkbox"
            value="system_engineer"
            labelText="System Engineer"
            checked={this.state.formData.interestedDivisions.includes("system_engineer")}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
          <Control
            type="checkbox"
            value="software_engineer"
            labelText="Software Engineer"
            checked={this.state.formData.interestedDivisions.includes("software_engineer")}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
        </Fieldset>
        <Button text="Submit" type="submit" />
        {this.state.submittedData && <div><hr /><p>Form was submitted with {JSON.stringify(this.state.submittedData)}</p></div>}
      </form>
    );
  }
}

export default ControlledInput;
```
