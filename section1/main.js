const postal = {

  postalCode: '123-4567',

  checkPstalCode() {
    const replaced = this.postalCode.replace('-', '').length;

    if (replaced === 7) {
      return true;
    }
    return false;
  }
}

console.log(postal.checkPstalCode());
