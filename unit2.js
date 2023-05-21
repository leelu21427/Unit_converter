function convert() {
    // Get input value and units
    const inputValue = parseFloat(document.getElementById("input").value);
    const inputUnit = document.getElementById("from").value;
    const outputUnit = document.getElementById("to").value;
  
    let result;
  
    // Perform conversion
    if (inputUnit === "meters") {
      if (outputUnit === "feet") {
        result = inputValue * 3.281;
      } else if (outputUnit === "inches") {
        result = inputValue * 39.37;
      } else if(outputUnit === "kilometers") {
        result = inputValue / 1000;
      }
      else if(outputUnit==="miles") {
        result = inputValue/1609;
      }
      else if(outputUnit==="yards") {
        result = inputValue*1.0936133;
      }
      else if(outputUnit==="centimeters") {
        result = inputValue/100;
      }
      else if(outputUnit==="millimeters") {
        result = inputValue*1000;
      }
      else if(outputUnit==="micrometers") {
        result = inputValue*1000000;
      }
      else{
        result=inputUnit;
      }

    } 
    else if (inputUnit === "feet") {
      if (outputUnit === "meters") {
        result = inputValue / 3.281;
      } else if (outputUnit === "inches") {
        result = inputValue * 12;
      }
      else if(outputUnit==="kilometers") {
        result = inputValue* 0.0003048;
      }else if(outputUnit==="miles") {
        result = inputValue*0.000189394;
      }else if(outputUnit==="yards") {
        result = inputValue*0.333333;
      }else if(outputUnit==="centimeters") {
        result = inputValue*30.48;
      }else if(outputUnit==="millimeters") {
        result = inputValue*304.8;
      }else if(outputUnit==="micrometers") {
        result = inputValue*304800;
      }
      else {
        result = inputValue;
      }
    }
    else if (inputUnit === "inches") {
      if (outputUnit === "meters") {
        result = inputValue / 39.37;
      } else if (outputUnit === "feet") {
        result = inputValue / 12;
      } 
      else if(outputUnit==="kilometers") {
        result = inputValue/39370;
      }else if(outputUnit==="miles") {
        result = inputValue/63360;
      }else if(outputUnit==="yards") {
        result = inputValue/36;
      }else if(outputUnit==="centimeters") {
        result = inputValue*2.54;
      }else if(outputUnit==="millimeters") {
        result = inputValue*25.4;
      }
      else if(outputUnit==="micrometers") {
        result = inputValue*25400;
      }
      else {
        result = inputValue;
      }
    }
    else if (inputUnit === "kilometers") {
        if (outputUnit === "meters") {
          result = inputValue * 1000;
        } else if (outputUnit === "feet") {
          result = inputValue *3281;
        } 
        else if(outputUnit==="inches") {
          result = inputValue*39370;
        }else if(outputUnit==="miles") {
          result = inputValue/1.609;
        }else if(outputUnit==="yards") {
          result = inputValue*1094;
        }else if(outputUnit==="centimeters") {
          result = inputValue*100000;
        }else if(outputUnit==="millimeters") {
          result = inputValue*1000000;
        }
        else if(outputUnit==="micrometers") {
          result = inputValue*1000000000;
        }
        else {
          result = inputValue;
        }
      }
      else if (inputUnit === "miles") {
        if (outputUnit === "meters") {
          result = inputValue * 1609;
        } else if (outputUnit === "feet") {
          result = inputValue *5280;
        } 
        else if(outputUnit==="inches") {
          result = inputValue*63360;
        }else if(outputUnit==="kilometers") {
          result = inputValue*1.609;
        }else if(outputUnit==="yards") {
          result = inputValue*1760;
        }else if(outputUnit==="centimeters") {
          result = inputValue*160900;
        }else if(outputUnit==="millimeters") {
          result = inputValue*1609344;
        }
        else if(outputUnit==="micrometers") {
          result = inputValue*1609344000;
        }
        else {
          result = inputValue;
        }
      }
      else if (inputUnit === "yards") {
        if (outputUnit === "meters") {
          result = inputValue / 1.094;
        } else if (outputUnit === "feet") {
          result = inputValue *3 ;
        } 
        else if(outputUnit==="inches") {
          result = inputValue*36;
        }else if(outputUnit==="kilometers") {
          result = inputValue/1094;
        }else if(outputUnit==="miles") {
          result = inputValue/1760;
        }else if(outputUnit==="centimeters") {
          result = inputValue*91.44;
        }else if(outputUnit==="millimeters") {
          result = inputValue*914.4;
        }
        else if(outputUnit==="micrometers") {
          result = inputValue*914400;
        }
        else {
          result = inputValue;
        }
      }
      else if (inputUnit ==="centimeters") {
        if (outputUnit === "meters") {
          result = inputValue / 100;
        } else if (outputUnit === "feet") {
          result = inputValue / 30.48;
        }
        else if(outputUnit==="inches") {
            result = inputValue/2.54;
          } 

        else if(outputUnit==="kilometers") {
          result = inputValue/100000;
        }else if(outputUnit==="miles") {
          result = inputValue/160900;
        }else if(outputUnit==="yards") {
          result = inputValue/91.44;
        }else if(outputUnit==="millimeters") {
          result = inputValue*10;
        }
        else if(outputUnit==="micrometers") {
          result = inputValue*10000;
        }
        else {
          result = inputValue;
        }
      }
      else if (inputUnit ==="millimeters") {
        if (outputUnit === "meters") {
          result = inputValue / 1000;
        } else if (outputUnit === "feet") {
          result = inputValue / 304.8;
        }
        else if(outputUnit==="inches") {
            result = inputValue/25.4;
          } 

        else if(outputUnit==="kilometers") {
          result = inputValue/1000000;
        }else if(outputUnit==="miles") {
          result = inputValue/1609000;
        }else if(outputUnit==="yards") {
          result = inputValue/914.4;
        }else if(outputUnit==="centimeters") {
          result = inputValue/10;
        }
        else if(outputUnit==="micrometers") {
          result = inputValue*1000;
        }
        else {
          result = inputValue;
        }
      }
      else if (inputUnit ==="micrometers") {
        if (outputUnit === "meters") {
          result = inputValue / 1000000;
        } else if (outputUnit === "feet") {
          result = inputValue / 3048000;
        }
        else if(outputUnit==="inches") {
            result = inputValue/25400;
          } 

        else if(outputUnit==="kilometers") {
          result = inputValue/1000000000;
        }else if(outputUnit==="miles") {
          result = inputValue/1609000000;
        }else if(outputUnit==="yards") {
          result = inputValue/914400;
        }else if(outputUnit==="centimeters") {
          result = inputValue/10000;
        }
        else if(outputUnit==="millimeters") {
          result = inputValue/1000;
        }
        else {
          result = inputValue;
        }
      }
    // Display result
    document.getElementById("output").value = result.toFixed(2);
  }
  