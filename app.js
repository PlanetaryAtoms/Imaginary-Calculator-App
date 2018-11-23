function ImaginaryNumbers(realNum, imaginary) {
    this.realNum = 0;
    this.imaginary = 0;
    this.realNum = (typeof realNum === 'undefined') ? this.realNum : parseFloat(realNum);
    this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);  
}

ImaginaryNumbers.transform = function(num) {
    var imaginaryNumbers;
    imaginaryNumbers = (num instanceof ImaginaryNumbers) ? num : imaginaryNumbers;
    imaginaryNumbers = (typeof num === 'number') ? new ImaginaryNumbers(num, 0) : num;
    return imaginaryNumbers;
};

function display_complex(real, imagine) {
    if(imagine === '0') return '' + real;
    if(real === 0) return '' + imagine + 'i';
    if(imagine < 0) return '' + real + imagine + 'i';
    return '' + real + '+' + imagine + 'i';
}

function addingComplexNumbers() {
  var first = new ImaginaryNumbers(parseInt(document.getElementById("firstRealNumber").value), parseInt(document.getElementById("firstComplexNumber").value) || 0);
  var second = new ImaginaryNumbers(parseInt(document.getElementById("secondRealNumber").value), parseInt(document.getElementById("secondComplexNumber").value) || 0);
  var realNum = first.realNum + second.realNum;
  var imaginary = first.imaginary + second.imaginary;
  return document.getElementById("results").innerHTML = display_complex(realNum, imaginary);
}

function subtractingComplexNumbers() {
  var first = new ImaginaryNumbers(parseInt(document.getElementById("firstRealNumber").value), parseInt(document.getElementById("firstComplexNumber").value) || 0);
  var second = new ImaginaryNumbers(parseInt(document.getElementById("secondRealNumber").value), parseInt(document.getElementById("secondComplexNumber").value) || 0);
  var realNum = first.realNum - second.realNum;
  var imaginary = first.imaginary - second.imaginary;
  return document.getElementById("results").innerHTML = display_complex(realNum, imaginary);
}

function multiplyingComplexNumbers() {
  var first = new ImaginaryNumbers(parseInt(document.getElementById("firstRealNumber").value), parseInt(document.getElementById("firstComplexNumber").value) || 0);
  var second = new ImaginaryNumbers(parseInt(document.getElementById("secondRealNumber").value), parseInt(document.getElementById("secondComplexNumber").value) || 0);
  var realNum = (first.realNum * second.realNum) - (first.imaginary * second.imaginary);
  var imaginary = (first.realNum * second.imaginary) + (first.imaginary * second.realNum);
  return document.getElementById("results").innerHTML = display_complex(realNum, imaginary);
}

function dividingComplexNumbers() {
  var first = new ImaginaryNumbers(parseInt(document.getElementById("firstRealNumber").value), parseInt(document.getElementById("firstComplexNumber").value) || 0);
  var second = new ImaginaryNumbers(parseInt(document.getElementById("secondRealNumber").value), parseInt(document.getElementById("secondComplexNumber").value) || 0);
  var denominator = second.imaginary * second.imaginary + second.realNum * second.realNum;
  var realNum = (first.realNum * second.realNum + first.imaginary * second.imaginary) / denominator;
  var imaginary = (second.realNum * first.imaginary - first.realNum * second.imaginary) / denominator;
  return document.getElementById("results").innerHTML = display_complex(realNum, imaginary);
}

/*****************************************************************************/