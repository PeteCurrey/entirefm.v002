const { renderToBuffer } = require('@react-pdf/renderer');
const React = require('react');
const { Document, Page, Text } = require('@react-pdf/renderer');

async function run() {
  try {
    const el = React.createElement(Document, null, React.createElement(Page, null, React.createElement(Text, null, "Hello")));
    const buf = await renderToBuffer(el);
    console.log("Success, buffer size:", buf.length);
  } catch(e) {
    console.error("Failed:", e);
  }
}
run();
