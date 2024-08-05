# Bongard
Bongard Flexibility Task

![alt text](http://cogflex.com.au/users/kit/demo/ID/Bongard-main/screenshot.png)


## Parameters

In addition to the parameters available in all plugins, this plugin accepts the following parameters. Parameters with a default value of undefined must be specified


| Parameter     | Type          | Default Value | Description
| ------------- | ------------- |------------- | ------------- |
| type          | string  | undefined        | Defines the trial type. Should be set to 'bongard-key'|
| stimulus| string | undefined | The stimulus that needs to be categorised | 
| choices | array | jsPsych.ALL_KEYS | Keys that can be used as inputs |
| prompt | string | null | The question prompt displayed above stimulus |
| set | string | undefined | Folder directory for the png files |
| movelist | array | undefined | An array of 12 moves in the format of start_finish e.g. 'x1_y4' would see an item move from the square x1 to y4 |
|on_finish | function| undefined | A function to be run after the trial. Will score the trial for feedback |


## Timeline Variables

Timeline variables are used to iterate across stimuli. The following timeline variables are included.

| Variable     |  Description | Example
| ------------- | ------------- |------------- |
| Setlist | Folder for pngs inputed to the set parameter | "Set1" |
| feedback | A message displayed as feedback. Set to " " if no message is to be displayed | "The correct answer is x because xyz" |
|correct_response:| The correct response |  "arrowright" |
| stimulus | The png wthat is to be categorised | "prompt_1" |
| movelist | An array of moves |["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"] |


## Example

Note, the setlist is used to set starting positions so you transition from Set1 to Set2 on the 5th "trial" not the 4th

A working demonstration can be viewed at http://cogflex.com.au/users/kit/demo/ID/Bongard-main/exp-demo.html
```javascript
/ Trial Parameters
var bongard_trial = {
      type: 'bongard-key',
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['ArrowLeft', 'ArrowRight'],
      prompt: "<p>Does the object below belong on the left or right? Press the left or right arrows to indicate.</p>",
      set: jsPsych.timelineVariable('Setlist'),
      movelist: jsPsych.timelineVariable('movelist'),
      on_finish: function(data){
        if(data.response == jsPsych.timelineVariable('correct_response')){
          data.correct = true;
        } else {
          data.correct = false;
        }

      }
  };



// Stimuli list
//remove feedback trials to turn them off
  var test_block = {
    timeline: [bongard_trial, feedback],
    timeline_variables: [
  { Setlist: "Set1", feedback: "The correct answer is x because xyz", correct_response: "arrowleft", stimulus: "prompt_1", movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set1", feedback:"", correct_response: "arrowright", stimulus: "prompt_2", movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set1", feedback: "The correct answer is x because xyz", correct_response: "arrowleft", stimulus: "prompt_3", movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set1", feedback: "The correct answer is x because xyz", correct_response: "arrowright", stimulus: "prompt_1", movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_y3", "x5_y1", "x6_y4", "y1_x5", "y2_y2", "y3_x4", "y4_x6", "y5_y5", "y6_y6"]},
  { Setlist: "Set2", feedback: "The correct answer is x because xyz", correct_response: "arrowleft", stimulus: "prompt_2", movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set2", feedback: "The correct answer is x because xyz", correct_response: "arrowright", stimulus: "prompt_3", movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  ]

  }
```
