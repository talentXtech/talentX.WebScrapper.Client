function inputFieldValidation(input) {
    if (input.value.length < 1 && input.isTouched) return true;
  }

  export {inputFieldValidation};