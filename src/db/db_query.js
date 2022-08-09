const db_query = {
  tbl_user: {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    name: ' VARCHAR(50)',
    phone: ' VARCHAR(50)',
    email: ' VARCHAR(50)',
    userName: ' VARCHAR(50)',
    password: ' VARCHAR(50)',
    image: ' VARCHAR(150)',
  },
  // tbl_project: {
  //   id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
  //   name: ' VARCHAR(20)',
  // },
  // tbl_porto: {
  //   id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
  //   name: ' VARCHAR(20)',
  // },
  // tbl_article: {
  //   id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
  //   name: ' VARCHAR(20)',
  // },
};
export default db_query;
