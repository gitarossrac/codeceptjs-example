// in this file you can append custom step methods to 'I' object

export = function() {
  return actor({

    acceptCookiesPolicy() {
      this.click('ELFOGADOM')
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
