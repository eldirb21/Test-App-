const Func = {
	//write your code here
	
  convertDate(date) {
    // var date = new Date();
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return (
      yyyy +
      '-' +
      (mmChars[1] ? mm : '0' + mmChars[0]) +
      '-' +
      (ddChars[1] ? dd : '0' + ddChars[0]) +
      'T00:00:00'
    );
  },

  mountly(type) {
    switch (type) {
      case 'FUll':
        var months = [
          'January',
          'February',
          'Maret',
          'April',
          'May',
          'Juni',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        return months;
      default:
        var months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        return months;
    }
  },
  formatingdate(date) {
    var day = new Date();
    if (date == 'Today')
      return this.mountly()[day.getMonth()] + ' ' + day.getDate();
    if (date == 'Tomorrow')
      return this.mountly()[day.getMonth()] + ' ' + (day.getDate() + 1);
    if (date == 'Yesterday')
      return this.mountly()[day.getMonth()] + ' ' + (day.getDate() - 1);
  },
  formatDateTimes(date) {
    if (date != undefined) {
      var strSplitDate = String(date).split(' ');
      var dates = new Date(strSplitDate[0]);
      var today = new Date();
      var yesterday = new Date(Date.now() - 86400000);
      var year = dates.getFullYear();
      var month = this.mountly()[dates.getMonth()];
      var date = dates.getDate();
      var hour = dates.getHours();
      var min = dates.getMinutes();
      if (dates.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0))
        return 'today, ' + hour + ':' + min;
      else if (dates.setHours(0, 0, 0, 0) == yesterday.setHours(0, 0, 0, 0))
        return 'yesterday, ' + hour + ':' + min;
      // else if (dates.setHours(24, 0, 0, 0) == yesterday.setHours(0, 0, 0, 0))
      //     return 'tomorrow, ' + hour + ':' + min;
      else if (year == today.getFullYear())
        return date + ' ' + month + ', ' + hour + ':' + min;
      else return date + ' ' + month + ' ' + year + ', ' + hour + ':' + min;
    } else return '';
  },

  uniqueArray(model, value) {
    const set = new Set();
    const unique = model.filter(item => {
      const alreadyHas = set.has(item[value]);
      set.add(item[value]);

      return !alreadyHas;
    });
    return unique;
  },
  uncurInput(money, type) {
    if (money != '' || money != undefined || money != 0) {
      let str = money.toString().replace(/[^\w\s]/gi, '');
      if (str != '' && str != 'Rp ') {
        let newstr = str.match(/\d+/)[0];
        if (type == 'string') return newstr.toString();
        else return parseInt(newstr);
      } else {
        if (type == 'string') return '0';
        else return 0;
      }
    }
  },
  curInput(money, code) {
    var prefix = '';
    if (money != undefined) {
      var balance = money ? money.toString() : '';
      var bal = balance.split('')[0];
      var amount = money.toString(),
        amount_string = amount.replace(/[^,\d]/g, '').toString(),
        number_split = amount_string.split(','),
        remainder = number_split[0].length % 3,
        hundreds = number_split[0].substr(0, remainder),
        thousand = number_split[0].substr(remainder).match(/\d{3}/gi);

      if (thousand) {
        var separator = remainder ? '.' : '';
        hundreds += separator + thousand.join('.');
      }
      if (code) {
        hundreds =
          number_split[1] != undefined
            ? hundreds + ',' + number_split[1]
            : hundreds;
        return prefix == undefined ? hundreds : hundreds ? hundreds : '';
      }
      hundreds =
        number_split[1] != undefined
          ? hundreds + ',' + number_split[1]
          : hundreds;
      if (bal == '-')
        return prefix == undefined
          ? hundreds
          : hundreds
          ? 'Rp. -' + hundreds
          : '';
      return prefix == undefined ? hundreds : hundreds ? 'Rp. ' + hundreds : '';
    }
  },

  toStrings(val) {
    var res = typeof val == 'number' ? (val == 0 ? '' : val.toString()) : val;
    return res;
  },

  formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var newData = cleaned.replace('62', '0');
    var match =
      newData.match(/^(1|)?(\d{4})\D*(\d{4})\D*(\d{4})\D*/) ||
      newData.match(/^(1|)?(\d{4})\D*(\d{4})\D*(\d{3})\D*/) ||
      newData.match(/^(1|)?(\d{4})\D*(\d{4})\D*(\d{2})\D*/);
    if (match) {
      var intlCode = match[0] ? '+62 ' : '';
      return [intlCode, match[2], '-', match[3], '-', match[4]].join('');
    }
    return null;
  },

  sortArray(Arr, variable) {
    var newArr = [];
    if (Arr.length != 0)
      newArr = Arr.sort((a, b) =>
        a[variable].toLowerCase() === b[variable].toLowerCase()
          ? 0
          : a[variable].toLowerCase() < b[variable].toLowerCase()
          ? -1
          : 1,
      );
    return newArr;
  },
  sumArray(Arr, variable, current) {
    var total = 0;
    if (Arr.length != 0) {
      if (variable) {
        if (current)
          total = Arr.map(x => Func.uncurInput(x[variable][current])).reduce(
            (a, b) => a + b,
          );
        else
          total = Arr.map(x => Func.uncurInput(x[variable])).reduce(
            (a, b) => a + b,
          );
      } else total = Arr.map(x => Func.uncurInput(x)).reduce((a, b) => a + b);
    }
    if (current) return (total = Func.uncurInput(total));
    else return Func.curInput(total);
  },
  setStates(key, value, model) {
    var _model = model;
    _model[key] = value;
    return _model;
  },
};

export default Func;
