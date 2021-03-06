// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Label from 'grommet/components/Label';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

Label.displayName = 'Label';

export default class LabelDoc extends Component {

  render () {
    return (
      <DocsArticle title='Label'>

        <section>
          <p>A simple text label. This could be used to annotate
            a <Anchor path='/docs/value'>Value</Anchor> to indicate
            what the value refers to. Or, it can annotate
            a <Anchor path='/docs/card'>Card</Anchor> to indicate
            a category.</p>
          <Label>Sample Label</Label>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>labelFor    {"{string}"}</code></dt>
            <dd>ID of the form element that the label is for.  Optional.</dd>
            <dt><code>truncate    true|false</code></dt>
            <dd>Restrict the text to a single line and truncate with
              ellipsis if it is too long to all fit.
              Defaults to <code>false</code>.</dd>
            <dt><code>uppercase   true|false</code></dt>
            <dd>Convert the label to uppercase.
              Defaults to <code>false</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={`import Label from 'grommet/components/Label';`}>
            <Label>
              {'{contents}'}
            </Label>
          </Code>
        </section>

      </DocsArticle>
    );
  }
};
