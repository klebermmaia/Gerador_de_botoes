const controles = document.querySelector('#controles');
const checkLadosIguais = document.querySelector('#checkLadosIguais');
const cssText = document.querySelector('[data-resultado="css"]');
const btn = document.querySelector('[data-resultado="btn"]');
const expanded = document.querySelectorAll('[data-expanded="btn"]');

const handleStyle = {
  element: btn,
  texto(value){
    this.element.innerText = value;
  },
  color(value){
    this.element.style.color = value;
  },
  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  paddingCheckLadosIguais(){
    const checkbox = document.getElementById('checkLadosIguais');
    const groupPadding = document.querySelectorAll('[data-padding]');
    if(checkbox.checked){
      groupPadding[0].style.display = 'none'
      groupPadding[1].style.display = 'block'
    } else{
      groupPadding[0].style.display = 'block'
      groupPadding[1].style.display = 'none'
    }
  },
  paddingY(value){
    this.element.style.paddingTop = value + 'px';
    this.element.style.paddingBottom = value + 'px';
  },
  paddingX(value){
    this.element.style.paddingRight = value + 'px';
    this.element.style.paddingLeft = value + 'px';
  },
  paddingT(value){
    this.element.style.paddingTop = value + 'px';
  },
  paddingB(value){
    this.element.style.paddingBottom = value + 'px';
  },
  paddingD(value){
    this.element.style.paddingRight = value + 'px';
  },
  paddingE(value){
    this.element.style.paddingLeft = value + 'px';
  },
  width(value){
    this.element.style.width = value + 'px';
  },
  borderWidth(value){
    this.element.style.borderWidth = value + 'px';
  },
  borderStyle(value){
    this.element.style.borderStyle = value;
    const borderOptions = document.querySelectorAll('[data-border]');
    if(value != 'none'){
      borderOptions.forEach(item => {
        item.classList.remove('none');
      });
    } else{
      borderOptions.forEach(item => {
        item.classList.add('none');
      });
    }
  },
  borderColor(value){
    this.element.style.borderColor = value;
  },
  borderRadius(value){
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value){
    this.element.style.fontFamily = value;
  },
  fontSize(value){
    this.element.style.fontSize = value + 'rem';
  },
}

function showCss(){
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}
function handleChange(event){
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  showCss();
}

function checkHeight(event){
  console.log(event.target)
  const nextElement = event.target.nextElementSibling;
  const settingsOptionsChildrens = event.target.nextElementSibling.children;
  const children = [...settingsOptionsChildrens];
  let heightChildren = 0;
  children.forEach(child=>{
    heightChildren += child.clientHeight
  })
  if(event.target.classList.contains('active')){
    nextElement.style.height = heightChildren + 'px';
  } else {
    nextElement.style.height = 0;
  }
}
function setHeight(){
  
}
function toggleExpanded(event){
  event.stopPropagation();
  const nextElement = event.target.nextElementSibling;
  event.target.classList.toggle('active');
  nextElement.classList.toggle('active');
  checkHeight(event);
}

controles.addEventListener('change', handleChange);
expanded.forEach(element => element.addEventListener('click', toggleExpanded));
checkLadosIguais.addEventListener('click', checkHeight)