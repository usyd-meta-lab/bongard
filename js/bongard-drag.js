/**
 * jspsych-bongard-drag
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a button response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["bongard-drag"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'bongard-drag',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Choices',
        default: undefined,
        array: true,
        description: 'The labels for the buttons.'
      },
      button_html: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button HTML',
        default: '<button style = "background-color: white;font-size: 16px;margin: 4px 2px;color: black;border: 2px solid #e7e7e7;position: absolute; left: 49%; top: 90%; class="jspsych-btn">%choice%</button>',
        array: true,
        description: 'The html of the button. Can create own style.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed under the button.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      margin_vertical: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Margin vertical',
        default: '0px',
        description: 'The vertical margin of the button.'
      },
      margin_horizontal: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Margin horizontal',
        default: '8px',
        description: 'The horizontal margin of the button.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, then trial will end when user responds.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // display stimulus
    var html = '<div id="jspsych-bongard-drag-stimulus">'+trial.stimulus+'</div>';


    var   html = '<div id = matrices>'
      html+= '<div id = "x_matrix">'
      html+= '</div>'
      html+= '<div id = "x1" class = "square" style = "left: 34%; top: 10%;"></div>'
      html+= '<div id = "x2" class = "square" style = "left: 41%; top: 10%;"></div>'
      html+= '<div id = "x3" class = "square" style = "left: 34%; top: 22%;"></div>'
      html+= '<div id = "x4" class = "square" style = "left: 41%; top: 22%;"></div>'
      html+= '<div id = "x5" class = "square" style = "left: 34%; top: 34%;"></div>'
      html+= '<div id = "x6" class = "square" style = "left: 41%; top: 34%;"></div>'

      html+= '<div id = "y_matrix">'
      html+= '</div>'
      html+= '<div id = "y1" class = "square" style = "left: 52%; top: 10%;"></div>'
      html+= '<div id = "y2" class = "square" style = "left: 59%; top: 10%;"></div>'
      html+= '<div id = "y3" class = "square" style = "left: 52%; top: 22%;"></div>'
      html+= '<div id = "y4" class = "square" style = "left: 59%; top: 22%;"></div>'
      html+= '<div id = "y5" class = "square" style = "left: 52%; top: 34%;"></div>'
      html+= '<div id = "y6" class = "square" style = "left: 59%; top: 34%;"></div>'

      html+= '</div>'

      if(trial.feedback == false & trial.CRs == false){
          html+= '<img class = "'+trial.movelist[0]+'" id = "x1" src="assets/'+ trial.set+'/x1.png">'
          html+= '<img class = "'+trial.movelist[1]+'" id = "x2" src="assets/'+ trial.set+'/x2.png">'
          html+= '<img class = "'+trial.movelist[2]+'" id = "x3" src="assets/'+ trial.set+'/x3.png">'
          html+= '<img class = "'+trial.movelist[3]+'" id = "x4" src="assets/'+ trial.set+'/x4.png">'
          html+= '<img class = "'+trial.movelist[4]+'" id = "x5" src="assets/'+ trial.set+'/x5.png">'
          html+= '<img class = "'+trial.movelist[5]+'" id = "x6" src="assets/'+ trial.set+'/x6.png">'
          html+= '<img class = "'+trial.movelist[6]+'" id = "y1" src="assets/'+ trial.set+'/y1.png">'
          html+= '<img class = "'+trial.movelist[7]+'" id = "y2" src="assets/'+ trial.set+'/y2.png">'
          html+= '<img class = "'+trial.movelist[8]+'" id = "y3" src="assets/'+ trial.set+'/y3.png">'
          html+= '<img class = "'+trial.movelist[9]+'" id = "y4" src="assets/'+ trial.set+'/y4.png">'
          html+= '<img class = "'+trial.movelist[10]+'" id = "y5" src="assets/'+ trial.set+'/y5.png">'
          html+= '<img class = "'+trial.movelist[11]+'" id = "y6" src="assets/'+ trial.set+'/y6.png">'
          // display stimulus as an image element
          html += '<div id = "stimbox1">'
          html += '<img height="30%"; src="assets/'+ trial.set+'/'+trial.stimulus[0]+'.png" id="jspsych-bongard-key-stimulus1">';
          html += '<div style = "font-size:24pt" id = "stim1_indicator">L or R?</div>'
          html += '</div>'
          html += '<div id = "stimbox2">'
          html += '<img height="30%"; src="assets/'+ trial.set+'/'+trial.stimulus[1]+'.png" id="jspsych-bongard-key-stimulus2">';
          html += '<div  style = "font-size:24pt" id = "stim2_indicator">L or R?</div>'
          html += '</div>'
          html += '<div id = "stimbox3">'
          html += '<img height="30%"; src="assets/'+ trial.set+'/'+trial.stimulus[2]+'.png" id="jspsych-bongard-key-stimulus3">';
          html += '<div style = "font-size:24pt" id = "stim3_indicator">L or R?</div>'
          html += '</div>'


    }

    if(trial.feedback == true | trial.CRs == false){
      html+= '<img class = "x1_x1" id = "x1" src="assets/'+ trial.set+'/x1.png">'
      html+= '<img class = "x2_x2" id = "x2" src="assets/'+ trial.set+'/x2.png">'
      html+= '<img class = "x3_x3" id = "x3" src="assets/'+ trial.set+'/x3.png">'
      html+= '<img class = "x4_x4" id = "x4" src="assets/'+ trial.set+'/x4.png">'
      html+= '<img class = "x5_x5" id = "x5" src="assets/'+ trial.set+'/x5.png">'
      html+= '<img class = "x6_x6" id = "x6" src="assets/'+ trial.set+'/x6.png">'
      html+= '<img class = "y1_y1" id = "y1" src="assets/'+ trial.set+'/y1.png">'
      html+= '<img class = "y2_y2" id = "y2" src="assets/'+ trial.set+'/y2.png">'
      html+= '<img class = "y3_y3" id = "y3" src="assets/'+ trial.set+'/y3.png">'
      html+= '<img class = "y4_y4" id = "y4" src="assets/'+ trial.set+'/y4.png">'
      html+= '<img class = "y5_y5" id = "y5" src="assets/'+ trial.set+'/y5.png">'
      html+= '<img class = "y6_y6" id = "y6" src="assets/'+ trial.set+'/y6.png">'


    }

  if(trial.feedback == false & trial.CRs == true){
    html+= '<img class = "x1_x1" id = "x1" src="assets/'+ trial.set+'/x1.png">'
    html+= '<img class = "x2_x2" id = "x2" src="assets/'+ trial.set+'/x2.png">'
    html+= '<img class = "x3_x3" id = "x3" src="assets/'+ trial.set+'/x3.png">'
    html+= '<img class = "x4_x4" id = "x4" src="assets/'+ trial.set+'/x4.png">'
    html+= '<img class = "x5_x5" id = "x5" src="assets/'+ trial.set+'/x5.png">'
    html+= '<img class = "x6_x6" id = "x6" src="assets/'+ trial.set+'/x6.png">'
    html+= '<img class = "y1_y1" id = "y1" src="assets/'+ trial.set+'/y1.png">'
    html+= '<img class = "y2_y2" id = "y2" src="assets/'+ trial.set+'/y2.png">'
    html+= '<img class = "y3_y3" id = "y3" src="assets/'+ trial.set+'/y3.png">'
    html+= '<img class = "y4_y4" id = "y4" src="assets/'+ trial.set+'/y4.png">'
    html+= '<img class = "y5_y5" id = "y5" src="assets/'+ trial.set+'/y5.png">'
    html+= '<img class = "y6_y6" id = "y6" src="assets/'+ trial.set+'/y6.png">'
    // display stimulus as an image element
    html += '<div id = "stimbox1">'
    html += '<img height="30%"; src="assets/'+ trial.set+'/'+trial.stimulus[0]+'.png" id="jspsych-bongard-key-stimulus1">';
    html += '<div style = "font-size:24pt" id = "stim1_indicator">L or R?</div>'
    html += '</div>'
    html += '<div id = "stimbox2">'
    html += '<img height="30%"; src="assets/'+ trial.set+'/'+trial.stimulus[1]+'.png" id="jspsych-bongard-key-stimulus2">';
    html += '<div  style = "font-size:24pt" id = "stim2_indicator">L or R?</div>'
    html += '</div>'
    html += '<div id = "stimbox3">'
    html += '<img height="30%"; src="assets/'+ trial.set+'/'+trial.stimulus[2]+'.png" id="jspsych-bongard-key-stimulus3">';
    html += '<div style = "font-size:24pt" id = "stim3_indicator">L or R?</div>'
    html += '</div>'


  }



    stim1_lock = 0;
    stim2_lock = 0;
    stim3_lock = 0;

    //display buttons
    var buttons = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.choices.length) {
        buttons = trial.button_html;
      } else {
        console.error('Error in bongard-drag plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.choices.length; i++) {
        buttons.push(trial.button_html);
      }
    }
    html += '<div id="jspsych-bongard-drag-btngroup">';
    for (var i = 0; i < trial.choices.length; i++) {
      var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
      html += '<div style="display: inline-block; margin:'+trial.margin_vertical+' '+trial.margin_horizontal+'" id="jspsych-bongard-drag-button-' + i +'" data-choice="'+i+'">'+str+'</div>';
    }
    html += '</div>';

    //show prompt if there is one
    if (trial.prompt !== null) {
      html += trial.prompt;
    }
    display_element.innerHTML = html;

if(trial.feedback == false){
    $( function() {
        $("#jspsych-bongard-drag-button-0").hide();
      })}

              $( function() {

                 $('#x_matrix').droppable({
                   drop: handleDropEvent_LEFT
                 });
                 $('#y_matrix').droppable({
                   drop: handleDropEvent_RIGHT
                 });
                $( "#jspsych-bongard-key-stimulus1").draggable({
                   helper: 'clone',
                });
                $( "#jspsych-bongard-key-stimulus2").draggable({
                   helper: 'clone',
                });
                $( "#jspsych-bongard-key-stimulus3").draggable({
                   helper: 'clone',
                });
              } );



              function handleDropEvent_LEFT( event, ui ) {
                var draggable = ui.draggable;
              //  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
              if(draggable.attr('id') == "jspsych-bongard-key-stimulus1"){$("#stim1_indicator").text("L");stim1_lock = 1; R1 = "L"}
              if(draggable.attr('id') == "jspsych-bongard-key-stimulus2"){$("#stim2_indicator").text("L");stim2_lock = 1; R2 = "L"}
              if(draggable.attr('id') == "jspsych-bongard-key-stimulus3"){$("#stim3_indicator").text("L");stim3_lock = 1; R3 = "L"}
              if(stim1_lock == 1 & stim2_lock == 1 & stim3_lock == 1){
                $("#jspsych-bongard-drag-button-0").show();

              }
              }


              function handleDropEvent_RIGHT( event, ui ) {
                var draggable = ui.draggable;
                //alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
                if(draggable.attr('id') == "jspsych-bongard-key-stimulus1"){$("#stim1_indicator").text("R");stim1_lock = 1; R1 = "R"}
                if(draggable.attr('id') == "jspsych-bongard-key-stimulus2"){$("#stim2_indicator").text("R");stim2_lock = 1; R2 = "R"}
                if(draggable.attr('id') == "jspsych-bongard-key-stimulus3"){$("#stim3_indicator").text("R");stim3_lock = 1; R3 = "R"}
                if(stim1_lock == 1 & stim2_lock == 1 & stim3_lock == 1){
                  $("#jspsych-bongard-drag-button-0").show();

                }
              }




    // start time
    var start_time = performance.now();

    // add event listeners to buttons
    for (var i = 0; i < trial.choices.length; i++) {
      display_element.querySelector('#jspsych-bongard-drag-button-' + i).addEventListener('click', function(e){
        var choice = [R1,R2,R3];

        after_response(choice);
      });
    }

    // store response
    var response = {
      rt: null,
      button: null
    };

    // function to handle responses by the subject
    function after_response(choice) {

      // measure rt
      var end_time = performance.now();
      var rt = end_time - start_time;
      response.button = choice.toString();
      response.rt = rt;

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded


      // disable all the buttons after a response
      var btns = document.querySelectorAll('.jspsych-bongard-drag-button button');
      for(var i=0; i<btns.length; i++){
        //btns[i].removeEventListener('click');
        btns[i].setAttribute('disabled', 'disabled');
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        rt: response.rt,
        stimulus: trial.stimulus,
        response: response.button
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // hide image if timing is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-bongard-drag-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if time limit is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
