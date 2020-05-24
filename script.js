const outputArea = document.getElementById('supreme-area');

function updateLogo () {
  const textInputValue = document.getElementById('text-input').value;
  const sizeSliderValue = document.getElementById('size-slider').value;
  const outputStyle = 'font-size:' + sizeSliderValue + 'pt;' + 'padding-left:' + (sizeSliderValue / 30) + 'vh;' + 'padding-right:' + (sizeSliderValue / 30) + 'vh;' + 'padding-bottom:' + (sizeSliderValue / 40) + 'vh;';

  outputArea.setAttribute('style', outputStyle);

  if (textInputValue !== '') {
    outputArea.innerHTML = textInputValue;
  } else {
    outputArea.innerHTML = 'Supreme';
  }
}

setInterval(updateLogo, 30);
