var bucketlist = [];
var container = document.getElementById("container");

function addvalue(){
var input = document.getElementById("input").value;
bucketlist.push(input);
showlist();
}

function remove(i){
  bucketlist.splice(i,1);
  showlist();
}

function showlist(){
  container.innerHTML=""
  for(var i=0; i<bucketlist.length;i++){
  var li = document.createElement('li');
  li.innerHTML = bucketlist[i]+""+`<span><img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"></span>`;
  container.append(li);
  }
}

function reset(){
  bucketlist = [];
  showlist();
}
