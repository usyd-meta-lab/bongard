// Bongard Task

//apply(expand.grid("assets/Set",1:6,c("", "b","c"),"/", c("x", "y"), 1:6, ".png"), 1, paste, collapse="")
  // List of images to be preloaded
  var images = ['assets/Instructions/Picture 1.png','assets/Instructions/Picture 2.png','assets/Instructions/Picture 3.png','assets/Instructions/Picture 4.png','assets/Instructions/Picture 5.png','assets/Instructions/Picture 6.png','assets/Instructions/Picture 7.png',
  'assets/Instructions/shuffle.gif','assets/Instructions/shuffle2.gif','assets/Instructions/Picture 1.png','assets/Instructions/Picture 8.png','assets/Instructions/Picture 9.png','assets/Instructions/Picture 10.png','assets/Instructions/Picture 11.png',"assets/Set1/x1.png", "assets/Set2/x1.png", "assets/Set3/x1.png", "assets/Set4/x1.png", "assets/Set5/x1.png", "assets/Set6/x1.png", "assets/Set1b/x1.png", "assets/Set2b/x1.png", "assets/Set3b/x1.png", "assets/Set4b/x1.png", "assets/Set5b/x1.png", "assets/Set6b/x1.png", "assets/Set1c/x1.png", "assets/Set2c/x1.png", "assets/Set3c/x1.png", "assets/Set4c/x1.png", "assets/Set5c/x1.png", "assets/Set6c/x1.png", "assets/Set1/y1.png", "assets/Set2/y1.png", "assets/Set3/y1.png", "assets/Set4/y1.png", "assets/Set5/y1.png", "assets/Set6/y1.png", "assets/Set1b/y1.png", "assets/Set2b/y1.png", "assets/Set3b/y1.png", "assets/Set4b/y1.png", "assets/Set5b/y1.png", "assets/Set6b/y1.png", "assets/Set1c/y1.png", "assets/Set2c/y1.png", "assets/Set3c/y1.png", "assets/Set4c/y1.png", "assets/Set5c/y1.png", "assets/Set6c/y1.png", "assets/Set1/x2.png", "assets/Set2/x2.png", "assets/Set3/x2.png", "assets/Set4/x2.png", "assets/Set5/x2.png", "assets/Set6/x2.png", "assets/Set1b/x2.png", "assets/Set2b/x2.png", "assets/Set3b/x2.png", "assets/Set4b/x2.png", "assets/Set5b/x2.png", "assets/Set6b/x2.png", "assets/Set1c/x2.png", "assets/Set2c/x2.png", "assets/Set3c/x2.png", "assets/Set4c/x2.png", "assets/Set5c/x2.png", "assets/Set6c/x2.png", "assets/Set1/y2.png", "assets/Set2/y2.png", "assets/Set3/y2.png", "assets/Set4/y2.png", "assets/Set5/y2.png", "assets/Set6/y2.png", "assets/Set1b/y2.png", "assets/Set2b/y2.png", "assets/Set3b/y2.png", "assets/Set4b/y2.png", "assets/Set5b/y2.png", "assets/Set6b/y2.png", "assets/Set1c/y2.png", "assets/Set2c/y2.png", "assets/Set3c/y2.png", "assets/Set4c/y2.png", "assets/Set5c/y2.png", "assets/Set6c/y2.png", "assets/Set1/x3.png", "assets/Set2/x3.png", "assets/Set3/x3.png", "assets/Set4/x3.png", "assets/Set5/x3.png", "assets/Set6/x3.png", "assets/Set1b/x3.png", "assets/Set2b/x3.png", "assets/Set3b/x3.png", "assets/Set4b/x3.png", "assets/Set5b/x3.png", "assets/Set6b/x3.png", "assets/Set1c/x3.png", "assets/Set2c/x3.png", "assets/Set3c/x3.png", "assets/Set4c/x3.png", "assets/Set5c/x3.png", "assets/Set6c/x3.png", "assets/Set1/y3.png", "assets/Set2/y3.png", "assets/Set3/y3.png", "assets/Set4/y3.png", "assets/Set5/y3.png", "assets/Set6/y3.png", "assets/Set1b/y3.png", "assets/Set2b/y3.png", "assets/Set3b/y3.png", "assets/Set4b/y3.png", "assets/Set5b/y3.png", "assets/Set6b/y3.png", "assets/Set1c/y3.png", "assets/Set2c/y3.png", "assets/Set3c/y3.png", "assets/Set4c/y3.png", "assets/Set5c/y3.png", "assets/Set6c/y3.png", "assets/Set1/x4.png", "assets/Set2/x4.png", "assets/Set3/x4.png", "assets/Set4/x4.png", "assets/Set5/x4.png", "assets/Set6/x4.png", "assets/Set1b/x4.png", "assets/Set2b/x4.png", "assets/Set3b/x4.png", "assets/Set4b/x4.png", "assets/Set5b/x4.png", "assets/Set6b/x4.png", "assets/Set1c/x4.png", "assets/Set2c/x4.png", "assets/Set3c/x4.png", "assets/Set4c/x4.png", "assets/Set5c/x4.png", "assets/Set6c/x4.png", "assets/Set1/y4.png", "assets/Set2/y4.png", "assets/Set3/y4.png", "assets/Set4/y4.png", "assets/Set5/y4.png", "assets/Set6/y4.png", "assets/Set1b/y4.png", "assets/Set2b/y4.png", "assets/Set3b/y4.png", "assets/Set4b/y4.png", "assets/Set5b/y4.png", "assets/Set6b/y4.png", "assets/Set1c/y4.png", "assets/Set2c/y4.png", "assets/Set3c/y4.png", "assets/Set4c/y4.png", "assets/Set5c/y4.png", "assets/Set6c/y4.png", "assets/Set1/x5.png", "assets/Set2/x5.png", "assets/Set3/x5.png", "assets/Set4/x5.png", "assets/Set5/x5.png", "assets/Set6/x5.png", "assets/Set1b/x5.png", "assets/Set2b/x5.png", "assets/Set3b/x5.png", "assets/Set4b/x5.png", "assets/Set5b/x5.png", "assets/Set6b/x5.png", "assets/Set1c/x5.png", "assets/Set2c/x5.png", "assets/Set3c/x5.png", "assets/Set4c/x5.png", "assets/Set5c/x5.png", "assets/Set6c/x5.png", "assets/Set1/y5.png", "assets/Set2/y5.png", "assets/Set3/y5.png", "assets/Set4/y5.png", "assets/Set5/y5.png", "assets/Set6/y5.png", "assets/Set1b/y5.png", "assets/Set2b/y5.png", "assets/Set3b/y5.png", "assets/Set4b/y5.png", "assets/Set5b/y5.png", "assets/Set6b/y5.png", "assets/Set1c/y5.png", "assets/Set2c/y5.png", "assets/Set3c/y5.png", "assets/Set4c/y5.png", "assets/Set5c/y5.png", "assets/Set6c/y5.png", "assets/Set1/x6.png", "assets/Set2/x6.png", "assets/Set3/x6.png", "assets/Set4/x6.png", "assets/Set5/x6.png", "assets/Set6/x6.png", "assets/Set1b/x6.png", "assets/Set2b/x6.png", "assets/Set3b/x6.png", "assets/Set4b/x6.png", "assets/Set5b/x6.png", "assets/Set6b/x6.png", "assets/Set1c/x6.png", "assets/Set2c/x6.png", "assets/Set3c/x6.png", "assets/Set4c/x6.png", "assets/Set5c/x6.png", "assets/Set6c/x6.png", "assets/Set1/y6.png", "assets/Set2/y6.png", "assets/Set3/y6.png", "assets/Set4/y6.png", "assets/Set5/y6.png", "assets/Set6/y6.png", "assets/Set1b/y6.png", "assets/Set2b/y6.png", "assets/Set3b/y6.png", "assets/Set4b/y6.png", "assets/Set5b/y6.png", "assets/Set6b/y6.png", "assets/Set1c/y6.png", "assets/Set2c/y6.png", "assets/Set3c/y6.png", "assets/Set4c/y6.png", "assets/Set5c/y6.png", "assets/Set6c/y6.png", "assets/Set1/prompt_1.png", "assets/Set2/prompt_1.png", "assets/Set3/prompt_1.png", "assets/Set4/prompt_1.png", "assets/Set5/prompt_1.png", "assets/Set6/prompt_1.png", "assets/Set1b/prompt_1.png", "assets/Set2b/prompt_1.png", "assets/Set3b/prompt_1.png", "assets/Set4b/prompt_1.png", "assets/Set5b/prompt_1.png", "assets/Set6b/prompt_1.png", "assets/Set1c/prompt_1.png", "assets/Set2c/prompt_1.png", "assets/Set3c/prompt_1.png", "assets/Set4c/prompt_1.png", "assets/Set5c/prompt_1.png", "assets/Set6c/prompt_1.png", "assets/Set1/prompt_2.png", "assets/Set2/prompt_2.png", "assets/Set3/prompt_2.png", "assets/Set4/prompt_2.png", "assets/Set5/prompt_2.png", "assets/Set6/prompt_2.png", "assets/Set1b/prompt_2.png", "assets/Set2b/prompt_2.png", "assets/Set3b/prompt_2.png", "assets/Set4b/prompt_2.png", "assets/Set5b/prompt_2.png", "assets/Set6b/prompt_2.png", "assets/Set1c/prompt_2.png", "assets/Set2c/prompt_2.png", "assets/Set3c/prompt_2.png", "assets/Set4c/prompt_2.png", "assets/Set5c/prompt_2.png", "assets/Set6c/prompt_2.png", "assets/Set1/prompt_3.png", "assets/Set2/prompt_3.png", "assets/Set3/prompt_3.png", "assets/Set4/prompt_3.png", "assets/Set5/prompt_3.png", "assets/Set6/prompt_3.png", "assets/Set1b/prompt_3.png", "assets/Set2b/prompt_3.png", "assets/Set3b/prompt_3.png", "assets/Set4b/prompt_3.png", "assets/Set5b/prompt_3.png", "assets/Set6b/prompt_3.png", "assets/Set1c/prompt_3.png", "assets/Set2c/prompt_3.png", "assets/Set3c/prompt_3.png", "assets/Set4c/prompt_3.png", "assets/Set5c/prompt_3.png", "assets/Set6c/prompt_3.png"];
    var preload = {
        type: 'preload',
        images: images
    }

    // Fullscreen
      var full = {
      type: 'fullscreen',
        fullscreen_mode: true
      }

      var instructions = {
          type: 'instructions',
          pages: [
          '<h1>Pattern Detector</h1>' + '<br>'+' In the following you will be shown two sets of six images each. The the images in each set have something in common that distinguishes them from the other set.' +
    '<br>' +
    '<img src="assets/Instructions/Picture 1.png"></img>',
    'Your task is to identify the rule that separates one set from the other. For each of the three images shown below you then need to decide whether they belong to the RIGHT set or the LEFT set.' + '<br>'+ '<img src="assets/Instructions/Picture 1.png"></img>',
    'Here is an example.<br><br><br><br><br>' + '<img width = "297px" height= "300px"; src="assets/Instructions/Picture 3.png"></img>',
    'Here is an example.<br>One could say that all the images in <b>set L</b> contain one and only <b>one solid blue shape.</b> The images in <b>set R</b> have <b>either none or more</b> than one solid shape.<br><br><br><br>' + '<img width = "300px"height= "300px"; src="assets/Instructions/Picture 3.png"></img>',
    'Here is an example.<br>One could say that all the images in <b>set L</b> contain one and only <b>one solid blue shape.</b> The images in <b>set R</b> have <b>either none or more</b> than one solid shape.<br>Therefore, the <b>first image</b> belongs to <b>set L</b>, the same is true for the <b>second image.</b><br><br><br>' + '<img width = "350px"height= "300px"; src="assets/Instructions/Picture 4.png"></img>',
    'Here is an example.<br>One could say that all the images in <b>set L</b> contain one and only <b>one solid blue shape.</b> The images in <b>set R</b> have <b>either none or more</b> than one solid shape.<br>Therefore, the <b>first image</b> belongs to <b>set L</b>, the same is true for the <b>second image.</b><br><b>The third image</b> belongs to set <b>R.</b><br><br>' + '<img width = "350px"height= "300px"; src="assets/Instructions/Picture 5.png"></img>',
    'This is another example.<br>Press continue and you will see that the images are reshuffled.<br>' + '<img height= "300px"; src="assets/Instructions/Picture 3.png"></img>',
    'This is another example.<br>Press continue and you will see that the images are reshuffled.<br>This makes the <b>old rule obsolete</b>. Can you see what the <b>new rule</b> is?<br>' + '<img  style = "padding-left:100px" height= "300px"; src="assets/Instructions/shuffle.gif"></img>',
    'This is another example.<br>Press continue and you will see that the images are reshuffled.<br>This makes the <b>old rule obsolete</b>. Can you see what the <b>new rule</b> is?<br>One could say that all the images in <b>set L</b> contain <b>one triangle</b>. That is <b>not</b> the case for <b>set R.</b><br>' + '<img  height= "300px"; src="assets/Instructions/Picture 6.png"></img>',
    'This is another example.<br>Press continue and you will see that the images are reshuffled.<br>This makes the <b>old rule obsolete</b>. Can you see what the <b>new rule</b> is?<br>One could say that all the images in <b>set L</b> contain <b>one triangle</b>. That is <b>not</b> the case for <b>set R.</b><br>Therefore, the <b>first two images</b> belong to <b>set R</b>. Only the third image belongs to <b>set L.</b><br>' + '<img  height= "300px"; src="assets/Instructions/Picture 9.png"></img>',
    'Once you have pressed continue again the images are reshuffled for a second time.<br>' + '<img  height= "300px"; src="assets/Instructions/Picture 6.png"></img>',
    'Once you have pressed continue again the images are reshuffled for a second time.<br>What is the <b>new rule</b> now?<br>' + '<img  style = "padding-left:100px" height= "300px"; src="assets/Instructions/shuffle2.gif"></img>',
    'In <b>set L</b> on the bottom of each image there is a circle. That is <b>not</b> the case for <b>set R.</b><br>' + '<img  height= "300px"; src="assets/Instructions/Picture 10.png"></img>',
    'In <b>set L</b> on the bottom of each image there is a circle. That is <b>not</b> the case for <b>set R.</b><br>Therefore, the <b>first and the third image</b> belong to <b>set R</b>. Only the second image belongs to <b>set L.</b><br>' + '<img  height= "300px"; src="assets/Instructions/Picture 11.png"></img>',
    '<h1>Before you start...</h1>The puzzles presented in the following will use shapes, numbers, or letters.<br>The task will always be the same: <b>Find the rule</b> that separates the sets and <b>sort the images</b> on the right side of the screen to either of the sets according to the rule.<br>To do that, <b>simply drag an drop</b> each of the three images onto either the left or the right set.<br>Sometimes you need to think somewhat &#34;outside the box&#34;. <br>Press continue to start the Pattern Detector Task',
    'Remeber to drag the items to the correct set. <b>If you change your mind</b>, you can drag them to a different set before you hit the submit button.'


          ],
          show_clickable_nav: true,
          button_label_next: 'Continue'
      }


// Feedback Parameters (probably don't need to edit)
  var feedback = {
      type: 'bongard-drag',
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['Next'],
      feedback: true, //lets it know this is a feedback version
      prompt: function(){
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if(last_trial_correct){
          return ("<p>Correct!</p>"+ jsPsych.timelineVariable('feedback'));
        } else {
          return ("<p>Wrong</p>" + jsPsych.timelineVariable('feedback'))
        }
      },
      set: jsPsych.timelineVariable('feedback_set'),
      movelist: jsPsych.timelineVariable('movelist'),
  };


//Confidence Rating
var CR_trial = {
    type: 'html-slider-response',
    labels: ['Not Confident', 'Confident'],
    set: jsPsych.timelineVariable('Setlist'),
    prompt: "How confident are you that you will solve this item?",
    movelist: jsPsych.timelineVariable('movelist'),
    require_movement: true
};



// Bongard Trial
var bongard_drag = {
  type: 'bongard-drag',
  stimulus: jsPsych.timelineVariable('stimulus'),
  set: jsPsych.timelineVariable('feedback_set'),
  choices: ['Submit'],
  feedback: false,
  CRs: true,
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


  var bongard_drag_block = {
    timeline: [CR_trial,bongard_drag, feedback],
    timeline_variables: [
  { Setlist: "Set1", feedback_set: "Set1", feedback: "", correct_response: "L,R,R", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set1", feedback_set: "Set1b", feedback: "", correct_response: "L,R,R", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_y2", "x2_y3", "x3_x3", "x4_y5", "x5_y4", "x6_x6", "y1_y1", "y2_x1", "y3_x2", "y4_x5", "y5_x4", "y6_y6"]},
  { Setlist: "Set1b", feedback_set: "Set1c", feedback: "", correct_response: "L,R,R", stimulus:["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_x2", "x3_y2", "x4_x4", "x5_y6", "x6_y4", "y1_y1", "y2_x3", "y3_y3", "y4_y5", "y5_x6", "y6_x5"]},
  { Setlist: "Set2", feedback_set: "Set2", feedback: "", correct_response: "L,L,R", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set2", feedback_set: "Set2b", feedback: "", correct_response: "R,L,L", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_y6", "x3_x3", "x4_x4", "x5_x5", "x6_y4", "y1_y1", "y2_y2", "y3_y3", "y4_x2", "y5_y5", "y6_x6"]},
  { Setlist: "Set2b", feedback_set: "Set2c", feedback: "", correct_response: "R,L,R", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_y2", "x3_y5", "x4_y3", "x5_x5", "x6_x6", "y1_y1", "y2_x3", "y3_x4", "y4_y4", "y5_x2", "y6_y6"]},
  { Setlist: "Set3", feedback_set: "Set3", feedback: "", correct_response: "R,R,L", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set3", feedback_set: "Set3b", feedback: "", correct_response: "L,R,R", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_y6", "x3_y4", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_x2", "y5_y5", "y6_x3"]},
  { Setlist: "Set3b", feedback_set: "Set3c", feedback: "", correct_response: "R,L,L", stimulus:["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_y5", "x2_x2", "x3_x3", "x4_y4", "x5_y6", "x6_y1", "y1_x4", "y2_y2", "y3_y3", "y4_x1", "y5_x5", "y6_x6"]},
  { Setlist: "Set4", feedback_set: "Set4", feedback: "", correct_response: "R,R,L", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set4", feedback_set: "Set4b", feedback: "", correct_response: "L,R,R", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_y3", "x6_y1", "y1_x5", "y2_y2", "y3_x6", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set4b", feedback_set: "Set4c", feedback: "", correct_response: "L,R,L", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_y2", "x3_y4", "x4_x4", "x5_x5", "x6_y5", "y1_x3", "y2_y2", "y3_y3", "y4_x2", "y5_x6", "y6_y6"]},
  { Setlist: "Set5", feedback_set: "Set5", feedback: "", correct_response: "L,R,L", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set5", feedback_set: "Set5b", feedback: "", correct_response: "L,R,R", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_y6", "x3_x3", "x4_y1", "x5_y3", "x6_x6", "y1_x2", "y2_y2", "y3_x4", "y4_y4", "y5_y5", "y6_x5"]},
  { Setlist: "Set5b", feedback_set: "Set5c", feedback: "", correct_response: "R,L,L", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_y4", "x3_x3", "x4_y1", "x5_x5", "x6_x6", "y1_x4", "y2_y2", "y3_y3", "y4_x2", "y5_y5", "y6_y6"]},
  { Setlist: "Set6", feedback_set: "Set6", feedback: "", correct_response: "R,L,R", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_x1", "x2_x2", "x3_x3", "x4_x4", "x5_x5", "x6_x6", "y1_y1", "y2_y2", "y3_y3", "y4_y4", "y5_y5", "y6_y6"]},
  { Setlist: "Set6", feedback_set: "Set6b", feedback: "", correct_response: "R,L,L", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_y3", "x2_x2", "x3_x3", "x4_y5", "x5_y4", "x6_x6", "y1_y1", "y2_y2", "y3_x5", "y4_x1", "y5_x4", "y6_y6"]},
  { Setlist: "Set6b", feedback_set: "Set6c", feedback: "", correct_response: "R,R,L", stimulus: ["prompt_1", "prompt_2", "prompt_3"], movelist: ["x1_y3", "x2_y5", "x3_y6", "x4_x4", "x5_y1", "x6_x6", "y1_x3", "y2_x1", "y3_y2", "y4_y4", "y5_x2", "y6_x5"]},
  ]

  }



  jsPsych.init({
         timeline: [preload, instructions, bongard_drag_block],
         on_timeline_start: function(){
             trialnum = 1
         },
         on_finish: function(data){
      jsPsych.data.displayData('csv');
      var filestore = ID + '.csv'; var all_data = jsPsych.data.get(); saveData(filestore, experimentname, all_data.csv()); alert(end_message); goHome()}
     });
