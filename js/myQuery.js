function $(selector){
  return document.querySelectorAll(selector);
}
HTMLElement.prototype.find=function(selector){
  return this.querySelectorAll(selector);
}