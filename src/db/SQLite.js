import {openDatabase} from 'react-native-sqlite-storage';

export const sqlite = openDatabase({
  name: 'NATIVE_DB',
});

const DB = {
  // /** CREATE TABLE
  //  *
  //  * var values = { (values)
  //  * 	 id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
  //  * 	 name: ' VARCHAR(20)',
  //  * };
  //  *
  //  */
  createTable(table, values) {
    const objEntries = Object.entries(values);
    const z = objEntries.map(x => x.join(' ').replace(/,/g, ' ')).join(', ');

    sqlite.transaction(txn => {
      // txn.executeSql(`DROP TABLE IF EXISTS ${table}`, []);
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS ${table} (${z})`,
        [],
        (sqlTxn, res) => {
          console.log(`Table "${table}" created successfully`);
        },
        err => console.log(`Table "${table}" creating error => ` + err.message),
      );
    });
  },

  showTable() {
    sqlite.transaction(tx => {
      tx.executeSql(
        'SHOW TABLES',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          console.log('TABLE LIST ', temp);
        },
        err => console.log(`TABLE LIST  => ` + err.message),
      );
    });
  },

  //======== GETSIGLE, GETLIST, POST, UPDATE, DELETE ==============

  /** GETSINGLE
   *
   * var orderBy = { (orderBy)
   * 	 id: 1,
   * };
   *
   */
  getSingle(table, orderBy) {
    return new Promise((resolve, reject) => {
      var ok = Object.keys(orderBy);
      var val = Object.values(orderBy);
      var where = null;
      var values = null;

      if (ok.length == 1) {
        var o = ok.map((x, i) => x.replace(x, '?')).join(', ');
        var k = ok.join(', ');
        where = k + ' = ' + o;
        values = val.map(x => `${x}`);
      } else if (ok.length == 2) {
        values = val.map(x => `${x}`);
        where = Object.entries(orderBy)
          .map(x => {
            x.reduce((strs, key) => {
              x = strs + ' = ?';
            });
            return x;
          })
          .reduce((strs, key) => {
            return strs + ' AND ' + key;
          });
      }
      sqlite.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM ${table} WHERE ${where}`,
          values,
          (sqlTxn, res) => {
            setTimeout(() => {
              let len = res.rows.length;
              if (len > 0) {
                let results = [];
                for (let i = 0; i < len; i++) {
                  let item = res.rows.item(i);
                  results.push(item);
                  // results.push({id: item.id, name: item.name});
                }
                resolve({
                  length: len,
                  data: results,
                });
              } else {
                resolve({
                  length: 0,
                  data: [],
                });
              }
            }, 1500);
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  },

  /** GETLIST
   *
   * 'id' (orderBy)
   *
   */
  getList(table, orderBy) {
    return new Promise((resolve, reject) => {
      var query = `SELECT * FROM ${table}`;
      if (orderBy) {
        query = `SELECT * FROM ${table} ORDER BY ${orderBy} DESC`;
      }
      sqlite.transaction(txn => {
        txn.executeSql(
          query,
          [],
          (sqlTxn, res) => {
            setTimeout(() => {
              let len = res.rows.length;
              if (len > 0) {
                let results = [];
                for (let i = 0; i < len; i++) {
                  let item = res.rows.item(i);
                  results.push(item);
                  // results.push({id: item.id, name: item.name});
                }
                resolve({
                  length: len,
                  data: results,
                });
              } else {
                resolve({
                  length: 0,
                  data: [],
                });
              }
            }, 1500);
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  },

  /** POST
   *
   * var object = { (object)
   * 	 id: 1,
   * 	 name:'Test'
   * };
   *
   */
  post(table, object) {
    return new Promise((resolve, reject) => {
      var value = Object.values(object).map(x => `${x}`);
      var b = Object.keys(object).join(', ');
      var o = Object.keys(object)
        .map((x, i) => x.replace(x, '?'))
        .join(', ');

      sqlite.transaction(txn => {
        txn.executeSql(
          `INSERT INTO ${table} (${b}) VALUES (${o})`,
          value,
          (sqlTxn, res) => {
            setTimeout(() => {
              resolve(res);
            }, 1500);
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  },

  /** UPDATE
   *
   * 'id' (key)
   *
   * var object = { (object)
   * 	 id: 1,
   * 	 name:'Test'
   * };
   *
   */
  update(table, object, key) {
    return new Promise((resolve, reject) => {
      var value = Object.values(object).map(x => `${x}`);
      var o = Object.entries(object)
        .map(x => {
          x.reduce((strs, key) => (x = strs + ' = ?'));
          return x;
        })
        .join(', ');
      sqlite.transaction(txn => {
        txn.executeSql(
          `UPDATE ${table} SET ${o} WHERE ${key} = ?`,
          value.concat(`${object[key]}`),
          (sqlTxn, res) => {
            setTimeout(() => {
              resolve(res);
            }, 1500);
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  },

  /** DELETE
   *
   * var object = { (object)
   * 	 id: 1,
   * };
   *
   */
  delete(table, object) {
    return new Promise((resolve, reject) => {
      var value = Object.values(object).map(x => `${x}`);
      var ky = Object.keys(object);
      sqlite.transaction(txn => {
        txn.executeSql(
          `DELETE FROM ${table} WHERE ${ky} = ?`,
          value,
          (sqlTxn, res) => {
            setTimeout(() => {
              resolve(res);
            }, 1500);
          },
          err => {
            setTimeout(() => {
              reject(err);
            }, 1500);
          },
        );
      });
    });
  },
};
export default DB;
