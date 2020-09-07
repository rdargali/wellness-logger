import React, { Component } from "react";
import { Button, Form, Input, Radio, TextArea } from "semantic-ui-react";
import axios from "axios";

class LogEntry extends Component {
  state = {
    title: "",
    value: "",
    about: "",
  };

  handleRatingChange = (e, { value }) => this.setState({ value });
  // handleRatingChange = (e, { value }) => this.setState({ rating: value });

  handleTitleChange = (e, { value }) => this.setState({ title: value });
  handleAboutChange = (e, { value }) => this.setState({ about: value });
  handleSubmit = () => {
    axios
      .post("http://localhost:5000/entry", {
        title: this.state.title,
        rating: this.state.value,
        description: this.state.about,

        user: "test user",
      })
      .then((res) => console.log(res.data));
  };

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Title"
            placeholder="Enter title"
            onChange={this.handleTitleChange}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Rating</label>
          <Form.Field
            control={Radio}
            label="1"
            value="1"
            checked={value === "1"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="2"
            value="2"
            checked={value === "2"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="3"
            value="3"
            checked={value === "3"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="4"
            value="4"
            checked={value === "4"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="5"
            value="5"
            checked={value === "5"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="6"
            value="6"
            checked={value === "6"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="7"
            value="7"
            checked={value === "7"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="8"
            value="8"
            checked={value === "8"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="9"
            value="9"
            checked={value === "9"}
            onChange={this.handleRatingChange}
          />
          <Form.Field
            control={Radio}
            label="10"
            value="10"
            checked={value === "10"}
            onChange={this.handleRatingChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="About"
          placeholder="Tell us more about your day"
          onChange={this.handleAboutChange}
        />

        <Form.Field control={Button} onClick={this.handleSubmit}>
          Log Entry
        </Form.Field>
      </Form>
    );
  }
}

export default LogEntry;
