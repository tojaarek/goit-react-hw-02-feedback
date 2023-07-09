# Acceptance criteria

Use this React project template as a starting point for your application
(https://github.com/goitacademy/react-homework-template/blob/main/README.en.md)

- Create a repository goit-react-hw-02-feedback.
- When submitting homework, there are two links: to the source files and the
  working pages of each assignment on `GitHub Pages'.
- There are no errors or warnings in the console when you run the code for the
  assignment.
- There is a separate file for each component in the src/components folder.
- The propTypes are described for the components.
- Everything that a component expects in the form of props is passed to it when
  it is called.
- JS code is clean and clear, using Prettier.
- Styling is done by CSS modules or Styled Components.

# Feedback Widget

Like most companies, Expresso Cafe collects reviews from its customers. Your
task is to create an application to collect statistics. There are only three
options for feedback: good, neutral, and bad.

## Step 1

The app should display the number of reviews collected for each category. The
app should not save review statistics between different sessions (page refresh).
The state of the application must be of the following form, no new properties
must not be added.

```
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
```

## Step 2

Expand the app's functionality so that the interface displays more statistics
about the collected feedback. Add a display of the total number of collected
reviews from all categories and the percentage of positive reviews. To do this,
create helper methods countTotalFeedback() and countPositiveFeedbackPercentage()
methods that calculate these values based on state data (computable data).

## Step 3

Perform a refactoring of the application. The state of the application must
remain in the <App> root component.

- Put the statistics display in a separate component
  `<Statistics good={} neutral={} bad={} total={} positivePercentage={}`
- Put the button box into a component
  `<FeedbackOptions options={} onLeaveFeedback={}`
- Create a component `<Section title="">` that renders a section with title and
  (children). Wrap each of the `<Statistics>` and `<FeedbackOptions>` in the
  created section component.

## Step 4

Extend the functionality of the application so that the statistics block is
rendered only after after at least one feedback has been collected. The message
about absence of statistics put in the component
`<Notification message="There is no feedback">`
