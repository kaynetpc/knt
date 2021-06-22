// import React from 'react';
import moment from 'moment';

/**
 *
 * @param {*} name
 * @param {*} data
 */
export const biKeyObjectBuilder = (name = '', data) => {
  var temp = {
    name: name,
    data: data,
  };
  return temp;
};

/**
 * @param {reportUrl} url
 * @param {reportsSubLinks} reportSubUrl
 * @param {id} key
 */

export const handleTriUrl = (url, subUrl, key) => {
  let id = key;
  return `${url}${subUrl}` + id;
};

/**
 * supply linked url branched
 * @param {baseUrl} url
 * @param {subLink} subUrl
 */
export const handleBiUrl = (url, subUrl) => {
  return `${url}${subUrl}`;
};
/**
 * supply any single url
 * @param {url} url
 */
export const handleUrl = (url) => {
  return `${url}`;
};

// export const EmptyText = (props) => {
//     return (
//         <div>
//         {
//             (props.data !== "" || props.data !== null || props.data !== undefined)?
//             props.children
//             :
//             ""
//         }
//         </div>
//     )
// }

export const exportCsv = (data = [], heading = [], output = '') => {
  var csvRow = [];
  var content = [heading];
  if (heading === undefined || heading === [] || heading === null) {
    content = [getArrayObjectKeys(data)];
  }

  for (let item = 0; item < data.length; item++) {
    let builder = [];
    getArrayObjectKeys(data).forEach((element) => {
      builder.push(data[item][element]);
    });
    content.push(builder);
  }

  for (let i = 0; i < content.length; i++) {
    csvRow.push(content[i].join(','));
  }
  var csvString = csvRow.join('%0A');

  var a = document.createElement('a');
  a.href = 'data:attachment/csv,' + csvString;
  a.target = '_Blank';
  let outputName = output === '' || output === undefined ? 'document' : output;
  a.download = outputName.concat('.csv');
  document.body.appendChild(a);
  a.click();
};

export const getArrayObjectKeys = (data) => {
  var dataKey = [];
  for (const key in data[0]) {
    dataKey.push(key);
  }
  return dataKey;
};

/**
 * string value expected
 * @param {string} item
 */

export const joinCovertToLowerCase = (string = '') => {
  if (string !== null && string !== '') {
    return string.replace(/ /g, '').toLowerCase();
  }
};

export const KNTArray = {
  /**
   *
   * @param {add up items in an array} data
   */
  addAll: function (data = []) {
    var res = 0;

    for (let k = 0; k < data.length; k++) {
      res += parseFloat(data[k]);
    }
    return res;
  },
  /**
   *
   * @param {total sum} total
   * @param {number} item
   * it will return percentage of number from total sum
   */
  cent: function (total, item) {
    let cal = (item / total) * 100;
    return cal.toFixed(1);
  },
  /**
   *
   * @param {array of Numbers} data
   * ite will return array of percent
   * adding all as total
   */
  percent: function (data) {
    var res = [];
    let total = this.addAll(data);
    for (let i = 0; i < data.length; i++) {
      res.push(this.cent(total, parseFloat(data[i])));
    }
    return res;
  },
  /**
   *
   * @param {total sum expected} total
   * @param {array of numbers} data
   * it will return array of percentage
   */
  percentWithTotal: function (total, data = []) {
    let res = [];
    for (let k = 0; k < data.length; k++) {
      res.push(this.cent(total, parseFloat(data[k])));
    }
    return res;
  },
};

// export const KNTObject = {
//     optionList:function(data = []){
//         return Object.entries(data).map(([x, v], y) => (
//             <option key={y} name={v} value={x}>{v}</option>
//         ));
//     }
// };

export const roundArray = (data) => {
  data = [];
  let res = [];
  for (let i = 0; i <= data.length; i++) {
    res = Math.round(data[i]);
  }
  return res;
};

export const KNTGraph = {
  /**
   * bar Chart data of two series type
   */
  bar: function (data1, data2, label) {
    return {
      type: 'bar',
      label: label,
      series: [
        {
          data: Object.entries(data1).map(([key, v], i) => v),
          name: 'male',
        },
        {
          data: Object.entries(data2).map(([key, v], i) => v),
          name: 'Female',
        },
      ],
      categories: Object.entries(data1).map(([key], i) => key),
    };
  },
  /**
   * line Chart data of two series type
   */
  line: function (data1, data2, label) {
    return {
      type: 'line',
      label: label,
      series: [
        {
          data: Object.entries(data1).map(([key, v], i) => v),
          name: 'Male',
        },
        {
          data: Object.entries(data2).map(([key, v], i) => v),
          name: 'Female',
        },
      ],
      categories: Object.entries(data1).map(([key], i) => key),
    };
  },
  donut: function (data, subject) {
    var res = data;
    return {
      type: 'donut',
      labels: Object.entries(res).map(([k, v], i) => k),
      data: Object.entries(res).map(([k, v], i) => v),
      subject: subject,
    };
  },
  radial: function (data, subject) {
    var res = data;
    return {
      type: 'radial',
      labels: Object.entries(res).map(([k, v], i) => k),
      data: Object.entries(res).map(([k, v], i) => v),
      subject: subject,
    };
  },
};

export const KNTDate = {
  getCurrentYear: function getYear() {
    return new Date().getFullYear();
  },
  getPreviousYear: function getYear() {
    return new Date().getFullYear() - 1;
  },
  getNextYear: function getYear() {
    return new Date().getFullYear() + 1;
  },
  getCustomYear: function (period = Number) {
    // period.toString()
    if (period !== String || '' || NaN) {
      return new Date().getFullYear() + period;
    } else {
      return console.debug(
        'Sorry Kindly Supply an Number At KNTDate.getCustomYear() e.g KNTDate.getCustomYear(5)'
      );
    }
  },
  getTodayDate: {
    full: function () {
      var day = new Date().getUTCDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      let date = `${day}/${month}/${year}`;
      return date;
    },
    day: function () {
      return new Date().getUTCDate();
    },
    time: function () {
      return new Date().toLocaleTimeString();
    },
  },
};

export const getPercentage = () => {
  // var data = []
  // convert back to 100%
  // let data = [50,120,70,67,150]
  // let sum = [data.reduce((i, e)=>{
  //     return i + e;
  // })];
  // let cent = 100;
  // let cal = cent / sum
  // var result = data.map((data) => data * cal  );
  // console.log(result)
};

// export progressDiv = (undoneTask, doneTask, initialTask) =>{
//     return (
//         <div className="knt-d-progress-fill knt-d-width-change" style={{"--w": `${100/initialTask*doneTask}%`}} >
//              {Math.trunc(100/initialTask*doneTask)}%
//         </div>
//     )
//  }

/**
 * KNT VERSION 2.0
 * start
 */
export const KNT = {
  /**Array */
  array: {
    /**
     * 
     * @param {arrayOfObjects} data 
     * @param {keySearch*} keyVal 
     * @returns it's return distinct array of value sorted by key supplied []
     */
      getValuesArrayByKey: function(data = [], keyVal){
        let res = [];
        let str = keyVal.toString();          
        var arr = data;
        // let type = typeof value;
        // if(type === "number"){
        // }
        arr.forEach(el => {
            for (const key in el) {
                if (key ===  str) {
                    res.push(el[key]);               
                }
            }
        })
        return res;
    },
    getDistinctValuesArrayByKey: function(data = [], keyVal){
        let res = [];
        let str = keyVal.toString();          
        var arr = data;
        // let type = typeof value;
        // if(type === "number"){
        // }
        arr.forEach(el => {
            for (const key in el) {
                if (key ===  str) {
                    let re = el[key].toString();
                      if(!KNT.array.include(re, res)){
                          res.push(re);
                      }                
                }
            }
        })
        return res;
    },
    getObjectValueByKey: function(obj = {}, objKey){
      let val = "";
      for (const key in obj) {
        if(key.toString().toLowerCase() === objKey.toLowerCase()){
          val = obj[key]
        }
      }
      return val;
    },
    filterByValue: function (data = [], keys = { key: '', value: '' }) {
      let res = [];

      data.forEach((el) => {
        let val1 = el[keys.key].toString(), val2 = keys.value.toString();
        if (KNT.string.equalsIgnoreCase(val1, val2)) {
          // if(!this.find.getBoolean(res, el))
          res.push(el);
        }
      });

      return res;
    },
    filterByMultipleValues: function(data = [], keys =[{ key: '', value: '' }]){
      let res = [];
      console.log(keys)
      //loop each data
      data.forEach(el => {
        //loop keys
        keys.forEach(k => {
          // console.log(k)
          let newKeys = KNT.array.getValuesArrayByKey([k], "key")
          console.log(newKeys)
          //assign each key values
          // let val1 = el[k.key].toString(), val2 = k.value.toString();
          // compare values
          // if(KNT.string.equalsIgnoreCase(val1, val2)){
          //   res.push(el)
          // }
        });
      });
      return res;
    },
    filterByValueGetDistinct: function ( data = [], keys = { key: '', value: '' } ) {
      let res = [];

      data.forEach((el) => {
        if (KNT.string.equalsIgnoreCase(el[keys.key], keys.value)) {
          if (!res.length > 0) res.push(el); //need to be review
        }
      });

      return res;
    },
    /**
     *
     * @param {*} str
     * @param {*} range
     * @returns
     */
    makeMultipleStyle: function (str, range = []) {
      let minRange = range[0];
      let maxRange = range[1];
      let res = [];
      let num = KNT.array.makeNumbers(minRange, maxRange);

      num.forEach((num) => {
        res.push(
          `.${str}${num} {
                            ${str}: ${num};
                        }`
        );
      });

      return res;
    },
    makeNumbers: function (min, max) {
      let res = [];
      for (var i = min; i <= max, i++; ) {
        res.push(i);
      }
      return res;
    },
    search: function (array = [], string) {
      let search = string.toLowerCase();
      let res = [];
      array.forEach((el) => {
        if (el.toLowerCase().includes(search)) {
          res.push(el);
        }
      });
      return res;
    },
    marge: function (data = []) {
      // let data = [arr1, arr2]
      var res = [];
      for (let k = 0; k < data.length; k++) {
        if (Array.isArray(data[k])) {
          data[k].forEach((el) => {
            res.push(el);
          });
        } else {
          console.warn('Invalid Data Supplied');
        }
      }
      // arr1.forEach(el => {
      //     res.push(el);
      // });
      // arr2.forEach(el => {
      //     res.push(el);
      // });
      return res;
    },
    /**
     *
     * @param {add up items in an array} data
     */
    addAll: function (data = []) {
      var res = 0;

      for (let k = 0; k < data.length; k++) {
        res += parseFloat(data[k]);
      }
      return res;
    },
    /**
     * It return Boolean True/False
     * @param {string to search} string
     * @param {array of data} arrayOfData
     */
    include: function (string = '', arrayOfData) {
      var res = false;
      arrayOfData.forEach(data => {
        if(KNT.string.equalsIgnoreCase(data.toString(), string)){
          res = true;
        }
      })
      // return arrayOfData.indexOf(string) > 0;
      return res;
    },
    find: {
      getBoolean: function (data = [], value) {
        let res = false;
        let type = typeof value;
        if (type === 'number') {
          value = parseInt(value);
        } else if (type === 'string') {
          value = value.toString();
        }

        data.forEach((element) => {
          if (element === value) {
            return (res = true);
          }
        });
        return res;
      },
      findObjectKey: function(data = [], str){
        let res = [];
        let status = false;

        data.forEach(element => {
          for (const key in element) {
            if(KNT.string.equalsIgnoreCase(key, str)){
              status = true;
              res.push(element);
              return;
            }
          }          
        });
        return {status: status, data: res};
      }
    },
    object: {
      getKeyByValue: function(obj = {}, strVal) {
        let objects = obj;
        var keys = [];
        let res = "";
        for (const key in objects) {
          if(!KNT.array.include(key, keys)){
            keys.push(key);
          }
        } 
        keys.forEach(el => {
          if(objects[el] == strVal){
            res = el;
          }
        });
        return res;      
      },
      replaceValue: function(data = [], key = "", prevValue= "", value = ""){
        let temp = [];

        let newData = data;
          newData.forEach(el => {
            if(el[key] == prevValue){
              el[key] = value;
            } 
            temp.push(el);
          });
          return temp;
      },
      replaceMultipleValue: function(data = [], key ="", params = [{previousValue:"", newValue: ""}]){
        let temp = [];

        let newData = data;
          newData.forEach(el => {
            params.forEach(p => {
              if(el[key] == p.previousValue){
                el[key] = p.newValue
              }
            })
            temp.push(el);
          });
          return temp;
      },
      // changeKeyName: function(data, key, newKey){
      //   let temp = [];
      //   data.forEach(element => {
      //     if(element == key){
      //       element = newKey
      //       temp.push(element);
      //     }
      //   });
      //   return temp;
      // }
    },
    remove: function (string = "", data = []) {
      return data.filter((e) => e !== string);
    },
    removeMultiple: function (toRemove = [], data = []) {
      let res = [];
      data.forEach((el) => {
        if (!this.find.getBoolean(toRemove, el)) {
          res.push(el);
        }
      });
      return res;
    },
    maxNumInArr: function (arr = []) {
      return Math.max(...arr);
    },
    getDistinct: function (arr) {
      let temp = [];

      arr.forEach((element) => {
        if (!this.find.getBoolean(temp, element)) {
          temp.push(element);
        }
      });
      return temp;
    },
    // getDistinctByKeyValue: function(arr = [], key = ""){

    //     let temp = [];

    //     arr.forEach(element => {
    //       if(temp[element[key]]){

    //         temp.push(element);
    //       }

    //     });

    //     return temp
    // },
    customList: function (label, total = 0, startFrom = 0) {
      let res = [];
      for (
        var i = startFrom !== 0 || null || undefined ? startFrom : 0;
        i <= total;
        i++
      ) {
        res.push(label + i);
      }
      return res;
    },
    /**
     *
     * @param {total sum} total
     * @param {number} item
     * it will return percentage of number from total sum
     */
    cent: function (total, item) {
      let cal = (item / total) * 100;
      return cal.toFixed(1);
    },
    /**
     *
     * @param {array of Numbers} data
     * ite will return array of percent
     * adding all as total [2%, 40%, n%]
     */
    percent: function (data) {
      var res = [];
      let total = this.addAll(data);
      for (let i = 0; i < data.length; i++) {
        res.push(this.cent(total, parseFloat(data[i])));
      }
      return res;
    },
    /**
     *
     * @param {total sum expected} total
     * @param {array of numbers} data
     * it will return array of percentage
     */
    percentWithTotal: function (total, data = []) {
      let res = [];
      for (let k = 0; k < data.length; k++) {
        res.push(this.cent(total, parseFloat(data[k])));
      }
      return res;
    },
    getKeys: function (data, func) {
      var dataKey = [];
      for (const key in data[0]) {
        dataKey.push(key);

        if (func) {
          func(key);
        }
      }
      return dataKey;
    },
    /**
     * 
     * @param {any array of object} data 
     * @returns array of object with key name and values
     */
    buildObjToNameAndValue : function(data = []){
        var temp = [];
        let arr = data;
        arr.forEach(el => {
            for (const key in el) {
                temp.push(
                    {name: key, value: el[key]}
                )                
            }
        })
        return temp;
    },
    extractByKeys: function (data = [], keys = []) {
      if (data === []) {
          console.error("Data to extract from cannot be empty");
      }

      let list = [];
      data.forEach(element => {
          let temp = {};
          for (const key in element) {
              let masterKey = false;
              keys.forEach(item => {
                  if (KNT.string.equalsIgnoreCase(item, key)) {
                      return masterKey = true;
                  }
              });

              if (masterKey) {
                  temp[key] = element[key];
              }
          }
          list.push(temp);
      });

      return list;
  },
    // arr: function(mainArray = [], subArray = []){
    //     let arr = [];
    //     subArray.forEach(el => {
    //         mainArray.forEach(mr => {
    //             mr.search(el)? arr.push(el): arr.push("")
    //         })
    //     });
    //     return arr;
    // }
    // arrayToString: function(data = []){
    //     let res = '';
    //     let temp = [];
    //     data.forEach(el => {
    //         ree += el;
    //     });
    //     return res;
    // }
  },
  validateField: {
    checkNumber: function (supp) {
      let res = isNaN(supp);
      return !res;
    },
    digitRestriction: function (value = 0, maxValue = 0, length = 0) {
      value = parseInt(value);
      if (value <= maxValue && value.toString().length <= length) {
        return value;
      } else return 0;
    },
  },

  /**Strings */
  string: {
    includes: function(mainString = "", searchStr){

      // var store = [];
      // var str = ""
      // str.indexOf(searchStr,0) > -1

      // searchStr.split('').forEach(s = store.push(s));

      return mainString.includes(searchStr);
    },
    equal: function (value1, value2) {
      let res = false;
      // let type1 = typeof value1;
      // let  type2 = typeof value2;

      if (value1 === value2) {
        return (res = true);
      }
      return res;
    },
    titleCase: function (string) {
      let str  = string.toString()+""
      return str.replace(/(\w*\W*|\w*)\s*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    toUpperCase: function (string = '') {
      return string.toUpperCase();
    },
    toLowerCase: function (string = '') {
      return string.toLowerCase();
    },
    /**
     * 
     * @param {param} string1 
     * @param {param} string2 
     * @returns  boolean
     */
    equalsIgnoreCase: function (string1 = "", string2 = "") {
      string1 = string1.toLowerCase();
      string2 = string2.toLowerCase();
      if (string1 === string2) {
        return true;
      }
      return false;
    },
    /**
     * It return String Base on Range Specify
     * @param {Supply String} str
     * @param {Define Start} start
     * @param {Define End} end
     */
    extract: function (str = '', start = 0, end = 0) {
      let res = '';
      for (let i = start; i <= end; i++) {
        res += str[i];
      }
      return res;
    },
    /**
     * it return true if text has space
     * @param {Word to check} string
     */
    hasWhiteSpace: function (string) {
      return /\s/g.test(string);
    },
    /**
     * it will get acronyms by first letter and capital letters in the string supplied
     * and Return it in Upper Case
     * string expected should be identify by space or camel case all through
     * @param {String} string e.g emmanuelSmith will return ES
     */
    getAcronyms: function (str) {
      // const string = str.indexOf(by? by : ' ') >= 0? this.titleCase(str): str;
      const string = this.hasWhiteSpace(str) ? this.titleCase(str) : str;

      var arrString = string.split('');

      // console.log(string)
      var acronym = '';
      var firstLetter = '';

      if (arrString[0].toLowerCase() === arrString[0]) {
        firstLetter += arrString[0].toUpperCase();
      }
      for (var i in arrString) {
        if (arrString[i].toUpperCase() === arrString[i]) {
          acronym += '' + arrString[i].toUpperCase();
        }
        // if(acronym.length > 1 && this.hasWhiteSpace(str)){
        //     return this.titleCase()
        // }
      }
      return firstLetter ? firstLetter + acronym : acronym;
    },
    /**
     * it will return supplied string with space or specified character before each capital letter in string supplied
     * @param {camelCase} string
     * @param {*} toSet
     */
    filterCamelCase: function (string, toSet, caseSentence) {
      var str = string.toString();
      var stringArray = str.split('');
      var res = '';
      let fixPoint = toSet ? toSet : ' ';

      for (var i in stringArray) {
        if (stringArray[i].toUpperCase() === stringArray[i]) {
          res += fixPoint + stringArray[i].toLowerCase();
        } else {
          res += stringArray[i];
        }
      }
      switch (caseSentence) {
        case kntCase.lowerCase:
          return this.toLowerCase(res);
        case kntCase.upperCase:
          return this.toUpperCase(res);
        case kntCase.titleCase:
          return this.titleCase(res);
        default:
          return res;
      }
    },
    makeId: function (prevData, length) {
      let previous = prevData;
      var result = '';
      var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      if (KNT.array.include(result, previous)) {
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
      } else {
        return result;
      }
    },
  },
  /**Date And Moments */
  date: {
    /**
     * 
     * @param {date} expireDate 
     * @returns 
     * it copmrae with current date
     */
    isExpired: function(expireDate){
      let result = false;
      var d1 = new Date(expireDate);
      var d2 = new Date();
      if(d1 >= d2){
        result = true;
      }
      return result;
    },
    /**
     * it will return arrays of years from current
     * @param {Number Expected} num
     * @param {symbol (+ or -)} type // Year Back as - and year ahead as +
     */
    getPeriod: function (num, type) {
      let curYear = new Date().getFullYear();
      let range = KNT.validateField.checkNumber(num) ? num : 5;
      let years = [];
      for (let i = 0; i < range; i++) {
        if (type === '-') {
          years.push(curYear - i);
        } else if (type === '+') {
          years.push(curYear + i);
        } else {
          years.push(curYear - i);
        }
      }
      return years;
    },
    getCurrentYear: function getYear() {
      return new Date().getFullYear();
    },
    getPreviousYear: function getYear() {
      return new Date().getFullYear() - 1;
    },
    getNextYear: function getYear() {
      return new Date().getFullYear() + 1;
    },
    getCustomYear: function (period = Number) {
      // period.toString()
      if (period !== String || '' || NaN) {
        return new Date().getFullYear() + period;
      } else {
        return console.debug(
          'Sorry Kindly Supply an Number At KNTDate.getCustomYear() e.g KNTDate.getCustomYear(5)'
        );
      }
    },
    getTodayDate: {
      current: new Date(),
      full: function () {
        var day = new Date().getUTCDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        let date = `${day}/${month}/${year}`;
        return date;
      },
      day: function () {
        return new Date().getUTCDate();
      },
      time: function () {
        return new Date().toLocaleTimeString();
      },
    },
    /**
     * Supply the current moment
     * it return Morning, Afternoon Or Evening
     * @param {moment()} m Optional
     */
    getGreetingTime: function (m = moment()) {
      var g = null;

      if (!m || !m.isValid()) {
        return;
      }

      var split_afternoon = 12;
      var split_evening = 16;
      var currentHour = parseFloat(m.format('HH'));

      if (currentHour >= split_afternoon && currentHour <= split_evening) {
        g = 'Afternoon';
      } else if (currentHour >= split_evening) {
        g = 'Evening';
      } else {
        g = 'Morning';
      }
      return g;
    },
    dateFormats: function () {
      let temp = [];

      dateAndCountryDateFormat.forEach((el) => {
        if (!KNT.array.include(el.data.short, temp)) {
          temp.push(el.data.short);
        }
        if (!KNT.array.include(el.data.long, temp)) {
          temp.push(el.data.long);
        }
      });

      return temp;
    },

    /**
     *
     * @param {mainDate} date
     * @param {} divider
     * @returns "yyyy/MM/dd"
     */
    formatDate: function (date, divider) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join(!divider ? '-' : divider);
    },
    dateFormatter: function (date, format) {
      var month = '' + (date.getMonth() + 1);
      var day = '' + date.getDate();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      const map = {
        mm: month,
        MM: month,
        dd: day,
        DD: day,
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear(),
        YYYY: date.getFullYear(),
      };
      var newDate = format.replace(
        /mm|dd|yyyy|MM|DD|YYYY/gi,
        (matched) => map[matched]
      );
      console.log(newDate, month, day);
      return newDate;
    },
  },
  /**
   * supply url to convert
   * @param {imageUrl} base64
   */
  // image: function(base64 = "", className =""){
  //     return <img src={base64}  className={className} alt=""/>
  // },
  getBase64Image: function (img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  },
  /**
   * 
   * private int id;
    private int fromVal, toVal;
    private double gradePoint;
    private String letterGrade;
   */
  makeGrading: function(data= [{fromVal: 0, toVal: 0, letterGrade: "", point: 0}], attained){
    let res = {letterGrade: "", wordGrade: ""};
    data.forEach(el => {
      console.log(el)
      if(attained >= el.fromVal && attained <= el.toVal){
        console.log("YESSS")
        res = el;
      }
    })
    return res;
  },
  grade: function (gradeScoreOverHundred) {
    if (gradeScoreOverHundred >= 95 && gradeScoreOverHundred <= 100) {
      return 'A+';
    } else if (gradeScoreOverHundred >= 90 && gradeScoreOverHundred <= 94) {
      return 'A';
    } else if (gradeScoreOverHundred >= 85 && gradeScoreOverHundred <= 89) {
      return 'B+';
    } else if (gradeScoreOverHundred >= 80 && gradeScoreOverHundred <= 84) {
      return 'B';
    } else if (gradeScoreOverHundred >= 75 && gradeScoreOverHundred <= 79) {
      return 'C+';
    } else if (gradeScoreOverHundred >= 70 && gradeScoreOverHundred <= 74) {
      return 'C';
    } else if (gradeScoreOverHundred >= 65 && gradeScoreOverHundred <= 69) {
      return 'D+';
    } else if (gradeScoreOverHundred >= 60 && gradeScoreOverHundred <= 64) {
      return 'D';
    } else if (gradeScoreOverHundred >= 0 && gradeScoreOverHundred <= 59) {
      return 'F';
    } else return 'Failed';
  },
  credit: function (gradeScoreOverHundred = Number, limit) {
    // console.log("YUP",gradeScoreOverHundred)
    // let ninetyCent = 0.9;
    // let seventyFiveCent = 0.75;
    // let fiftyCent = 0.5;
    // let fourtyCent = 0.04;
    // var gradeScoreOverHundred = this.array.cent(expected, score);
    if (
      gradeScoreOverHundred >= 95 &&
      gradeScoreOverHundred <= (limit ? limit : 100)
    ) {
      return 'Excellent';
    } else if (gradeScoreOverHundred >= 75 && gradeScoreOverHundred <= 94) {
      return 'Credit';
    } else if (gradeScoreOverHundred >= 41 && gradeScoreOverHundred <= 74) {
      return 'Pass';
    } else if (gradeScoreOverHundred >= 0 && gradeScoreOverHundred <= 40) {
      return 'Fair';
    } else return '';
  },
  promotion: function (
    classes = [],
    hierarchy = [],
    stage = 0,
    pass = false,
    toggle = false
  ) {
    // let toggle = true;
    // let pass = true;
    let highest = KNT.array.maxNumInArr(hierarchy);
    let curStage = stage;
    let newStage = 0;
    for (let i = 0; i <= highest; i++) {
      if (pass) {
        if (classes[i] === classes[curStage]) {
          return toggle
            ? (newStage = i + 1 > highest ? 'FINISHED!!!' : i + 1)
            : false;
        }
      } else return curStage;
    }
    return newStage;
  },
  passed: function (aim = 0, score = 0) {
    if (score + 1 >= aim + 1) {
      return true;
    } else return false;
  },
  convert: {
    numberToWord: function (num, afterDecimal = '') {
      var th = ['', 'thousand', 'million', 'billion', 'trillion'];
      var dg = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
      ];
      var tn = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
      ];
      var tw = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
      ];

      num = num.toString();
      num = num.replace(/[\, ]/g, '');
      if (num != parseFloat(num)) return 'not a number';
      var x = num.indexOf('.');
      if (x == -1) x = num.length;
      if (x > 15) return 'too big';
      var n = num.split('');
      var str = '';
      var sk = 0;
      for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
          if (n[i] == '1') {
            str += tn[Number(n[i + 1])] + ' ';
            i++;
            sk = 1;
          } else if (n[i] != 0) {
            str += tw[n[i] - 2] + ' ';
            sk = 1;
          }
        } else if (n[i] != 0) {
          // 0235
          str += dg[n[i]] + ' ';
          if ((x - i) % 3 == 0) str += 'hundred, ';
          sk = 1;
        }
        if ((x - i) % 3 == 1) {
          if (sk) str += th[(x - i - 1) / 3] + ' ';
          sk = 0;
        }
      }

      if (x != num.length) {
        var y = num.length;
        str += afterDecimal + ' ';
        for (var i = x + 1; i < y; i++) str += dg[n[i]] + ' ';
      }
      return str.replace(/\s+/g, ' ');
    },
  },
  cal: {
    roundUpNum: function(num){
      var n = num;
      return Math.round((n + Number.EPSILON) * 100 ) / 100;
    }
  }
};

/**
 * KNT VERSION 2.0
 * end
 */

export const kntCase = {
  lowerCase: 'lowerCase',
  upperCase: 'upperCase',
  titleCase: 'titleCase',
};

//   export const formatDate = (date, format) => {
//     const map = {
//         mm: date.getMonth() + 1,
//         MM: date.getMonth() + 1,
//         dd: date.getDate(),
//         DD: date.getDate(),
//         yy: date.getFullYear().toString(),
//         yyyy: date.getFullYear(),
//         YYYY: date.getFullYear()
//     }

//     return format.replace(/mm|dd|yyyy|MM|DD|YYYY/gi, matched => map[matched])
// }

const dateAndCountryDateFormat = [
  {
    country: 'Albania',
    data: { short: 'yyyy-MM-dd', long: 'yyyy-MMMM-dd' },
  },
  {
    country: 'United Arab Emirates',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Argentina',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Australia',
    data: { short: 'd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Austria',
    data: { short: 'd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Belgium',
    data: { short: 'd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Bulgaria',
    data: { short: 'yyyy-MM-d', long: 'yyyy-MMMM-dd' },
  },
  {
    country: 'Bahrain',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Bosnia and Herzegovina',
    data: { short: 'yyyy-MM-dd', long: 'yyyy-MMMM-dd' },
  },
  {
    country: 'Belarus',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Bolivia',
    data: { short: 'd-MM-yyyy', long: 'dd-MMMM-yyyy' },
  },
  {
    country: 'Brazil',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Canada',
    data: { short: 'yyyy-MM-dd', long: 'yyyy-MMMM-dd' },
  },
  {
    country: 'Canada',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Switzerland',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Chile',
    data: { short: 'dd-MM-yyyy', long: 'dd-MMMM-yyyy' },
  },
  {
    country: 'China',
    data: { short: 'yyyy-M-d', long: 'yyyy-MMMM-dd' },
  },
  {
    country: 'Colombia',
    data: { short: 'd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Costa Rica',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Cyprus',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Czech Republic',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Germany',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Denmark',
    data: { short: 'dd-MM-yyyy', long: 'dd-MMMM-yyyy' },
  },
  {
    country: 'Dominican Republic',
    data: { short: 'MM/dd/yyyy', long: 'MMMM/dd/yyyy' },
  },
  {
    country: 'Algeria',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Ecuador',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Egypt',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Spain',
    data: { short: 'd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Spain',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Estonia',
    data: { short: 'd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Finland',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'France',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'United Kingdom',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Greece',
    data: { short: 'd/M/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Guatemala',
    data: { short: 'd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Hong Kong',
    data: { short: 'yyyy年M月d日', long: 'yyyy年M月d日' },
  },
  {
    country: 'Honduras',
    data: { short: 'MM-dd-yyyy', long: 'MMMM-dd-yyyy' },
  },
  {
    country: 'Croatia',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Hungary',
    data: { short: 'yyyy.MM.dd', long: 'yyyy.MMMM.dd' },
  },
  {
    country: 'Indonesia',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'India',
    data: { short: '३/६/१२', long: '३/६/१२' },
  },
  {
    country: 'India',
    data: { short: 'd/M/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Ireland',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Ireland',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Iraq',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Iceland',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Israel',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Italy',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Jordan',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Japan',
    data: { short: 'yyyy/MM/dd', long: 'yyyy/MMMM/dd' },
  },
  {
    country: 'Japan',
    data: { short: 'H24.MM.dd', long: 'H24.MM.dd' },
  },
  {
    country: 'South Korea',
    data: { short: 'yyyy.M.d', long: 'yyyy.MMMM.d' },
  },
  {
    country: 'Kuwait',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Lebanon',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Libya',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Lithuania',
    data: { short: 'yyyy.M.d', long: 'yyyy.MMMM.dd' },
  },
  {
    country: 'Luxembourg',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Latvia',
    data: { short: 'yyyy.d.M', long: 'yyyy.dd.MMMM' },
  },
  {
    country: 'Morocco',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Mexico',
    data: { short: 'd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Macedonia',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Malta',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Malta',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Montenegro',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Malaysia',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Nicaragua',
    data: { short: 'MM-dd-yyyy', long: 'MMMM-dd-yyyy' },
  },
  {
    country: 'Netherlands',
    data: { short: 'd-M-yyyy', long: 'dd-MMMM-yyyy' },
  },
  {
    country: 'Norway',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Norway',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'New Zealand',
    data: { short: 'd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Oman',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Panama',
    data: { short: 'MM/dd/yyyy', long: 'MMMM/dd/yyyy' },
  },
  {
    country: 'Peru',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Philippines',
    data: { short: 'M/d/yyyy', long: 'MMMM/dd/yyyy' },
  },
  {
    country: 'Poland',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Puerto Rico',
    data: { short: 'MM-dd-yyyy', long: 'MMMM-dd-yyyy' },
  },
  {
    country: 'Portugal',
    data: { short: 'dd-MM-yyyy', long: 'dd-MMMM-yyyy' },
  },
  {
    country: 'Paraguay',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Qatar',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Romania',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Russia',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Saudi Arabia',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Serbia and Montenegro',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Sudan',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Singapore',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Singapore',
    data: { short: 'M/d/yyyy', long: 'MMMM/dd/yyyy' },
  },
  {
    country: 'El Salvador',
    data: { short: 'MM-dd-yyyy', long: 'MMMM-dd-yyyy' },
  },
  {
    country: 'Serbia',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Slovakia',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Slovenia',
    data: { short: 'd.M.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Sweden',
    data: { short: 'yyyy/MM/dd', long: 'yyyy/MMMM/dd' },
  },
  {
    country: 'Syria',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Thailand',
    data: { short: 'd/M/2555', long: 'dd/MMMM/2555' },
  },
  {
    country: 'Thailand',
    data: { short: '๓/๖/๒๕๕๕', long: '๓/๖/๒๕๕๕' },
  },
  {
    country: 'Tunisia',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Turkey',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Taiwan',
    data: { short: 'yyyy/M/d', long: 'yyyy/MMMM/dd' },
  },
  {
    country: 'Ukraine',
    data: { short: 'dd.MM.yyyy', long: 'dd.MMMM.yyyy' },
  },
  {
    country: 'Uruguay',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'United States',
    data: { short: 'M/d/yyyy', long: 'MMMM/dd/yyyy' },
  },
  {
    country: 'United States',
    data: { short: 'M/d/yyyy', long: 'MMMM/dd/yyyy' },
  },
  {
    country: 'Venezuela',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Vietnam',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'Yemen',
    data: { short: 'dd/MM/yyyy', long: 'dd/MMMM/yyyy' },
  },
  {
    country: 'South Africa',
    data: { short: 'yyyy/MM/dd', long: 'yyyy/MMMM/dd' },
  },
];
