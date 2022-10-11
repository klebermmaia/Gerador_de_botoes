const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
  element: btn,
  texto(value){
    this.element.innerText = value;
  },
  tipoPaletaText(value){
    const hexadecimal = document.getElementById('hexadecimalText');
    const paleta = document.getElementById('paletaText');
    if(value == hexadecimal.id){
      if(hexadecimal.style.display = 'none'){
        hexadecimal.style.display = 'block';
        paleta.style.display = 'none';
      } else{
        hexadecimal.style.display = 'none';
      }
    } else{
      if(paleta.style.display = 'none'){
        paleta.style.display = 'block';
        hexadecimal.style.display = 'none';
      } else{
        paleta.style.display = 'none';
      }
    }
  },
  color(value){
    this.element.style.color = value;
  },
  tipoPaletaBG(value){
    const hexadecimal = document.getElementById('hexadecimalBG');
    const paleta = document.getElementById('paletaBG');
    if(value == hexadecimal.id){
      if(hexadecimal.style.display = 'none'){
        hexadecimal.style.display = 'block';
        paleta.style.display = 'none';
      } else{
        hexadecimal.style.display = 'none';
      }
    } else{
      if(paleta.style.display = 'none'){
        paleta.style.display = 'block';
        hexadecimal.style.display = 'none';
      } else{
        paleta.style.display = 'none';
      }
    }
  },
  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  paddingY(value){
    this.element.style.paddingTop = value + 'px';
    this.element.style.paddingBottom = value + 'px';
  },
  paddingX(value){
    this.element.style.paddingLeft = value + 'px';
    this.element.style.paddingRight = value + 'px';
  },
  width(value){
    this.element.style.width = value + 'px';
  },
  borderWidth(value){
    this.element.style.borderWidth = value + 'px';
  },
  borderStyle(value){
    this.element.style.borderStyle = value;
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

function handleChange(evente){
  const name = evente.target.name;
  const value = evente.target.value;
  handleStyle[name](value)
  showCss();
}

function showCss(){
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

controles.addEventListener('change', handleChange);