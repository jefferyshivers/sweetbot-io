/**
 * The MIT License
 *
 * Copyright 2018 Jeffery Shivers.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import React, { Component } from "react";
import defaultprops from "./defaultprops.js";
import "./Sweetbot.scss";

export default class Sweetbot extends Component {
  state = {
    meta: {},
    message: "",
    messages: []
  };

  customprops = Object.assign({}, defaultprops, this.props.customprops);

  componentDidMount() {
    // ...
    console.log("mounted...");
  }

  render() {
    const styles = {};

    for (let style in this.customprops.styles) {
      styles[`--${style}`] = this.customprops.styles[style];
    }

    return (
      <div
        className="Sweetbot"
        style={styles}
        name={`${this.customprops.name} chatbot`}
      />
    );
  }
}
