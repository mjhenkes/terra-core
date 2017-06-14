/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-alert/docs/README.md';
import { version } from 'terra-alert/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import AlertSrc from '!raw-loader!terra-alert/src/Alert';

// Example Files
import AlertExample from './AlertExample';
import ErrorExample from './ErrorExample';
import WarningExample from './WarningExample';
import GapCheckingExample from './GapCheckingExample';
import AdvisoryExample from './AdvisoryExample';
import InfoExample from './InfoExample';
import SuccessExample from './SuccessExample';
import OutsideRecordsExample from './OutsideRecordsExample';
import CustomExample from './CustomExample';
import LongTextExample from './LongTextExample';
import ActionExample from './ActionExample';
import DismissibleExample from './DismissibleExample';
import ActionAndDismissibleExample from './ActionAndDismissibleExample';
import BuildYourOwnAlertExample from './BuildYourOwnAlertExample';

const AlertExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={AlertSrc} />
    <h2>Alert Examples</h2>
    <br /><hr /><br />
    <AlertExample />
    <br /><hr /><br />
    <ErrorExample />
    <br /><hr /><br />
    <WarningExample />
    <br /><hr /><br />
    <AdvisoryExample />
    <br /><hr /><br />
    <InfoExample />
    <br /><hr /><br />
    <SuccessExample />
    <br /><hr /><br />
    <GapCheckingExample />
    <br /><hr /><br />
    <OutsideRecordsExample />
    <br /><hr /><br />
    <CustomExample />
    <br /><hr /><br />
    <LongTextExample />
    <br /><hr /><br />
    <ActionExample />
    <br /><hr /><br />
    <DismissibleExample />
    <br /><hr /><br />
    <ActionAndDismissibleExample />
    <br /><hr /><br />
    <BuildYourOwnAlertExample />
    <br /><hr /><br />
  </div>
);

export default AlertExamples;
