import $ from 'jquery';
const Contact = () => {
function clickMe(){
let str="GoodBye";
var a=$("#number").val();
if(a<10)
str="Hello";
alert(str);
}
return (
<div>
<div>
<label for="t1">Number</label>
<input type="text" id="number"/>
</div>
<div>
<button type="button" onClick={() => clickMe()}>Click me</button>
</div>
</div>
);

};
export default Contact;
