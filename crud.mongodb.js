// CRUD OPPERATION IN MongoDB
/* CRUD Full Form
   C For Create
   R For Read
   U For Update
   D For Delete
*/


//Step-1 Create New database
use("company")

//Step-2 Create a New Collection
const employee = "value"
db.createCollection("employee")

//Step-3 Data Inserted in the Collection
const checked = db.employee.insertOne([
  {
    "name": "Jack Ma",
    "emp_id": 2,
    "blood_g": "B+",
    "doj": "20-01-2022"
  },
  {
    "name": "Elon Musk",
    "emp_id": 3,
    "blood_g": "O+",
    "doj": "15-03-2021"
  },
  {
    "name": "Sundar Pichai",
    "emp_id": 4,
    "blood_g": "A+",
    "doj": "10-06-2020"
  },
  {
    "name": "Satya Nadella",
    "emp_id": 5,
    "blood_g": "B-",
    "doj": "01-12-2019"
  },
  {
    "name": "Tim Cook",
    "emp_id": 6,
    "blood_g": "AB+",
    "doj": "23-07-2018"
  },
  {
    "name": "Sheryl Sandberg",
    "emp_id": 7,
    "blood_g": "O-",
    "doj": "09-09-2020"
  },
  {
    "name": "Mark Zuckerberg",
    "emp_id": 8,
    "blood_g": "A-",
    "doj": "17-05-2017"
  },
  {
    "name": "Jeff Bezos",
    "emp_id": 9,
    "blood_g": "B+",
    "doj": "11-11-2016"
  },
  {
    "name": "Susan Wojcicki",
    "emp_id": 10,
    "blood_g": "AB-",
    "doj": "28-02-2021"
  },
  {
    "name": "Larry Page",
    "emp_id": 11,
    "blood_g": "O+",
    "doj": "05-08-2015"
  }
]
)
console.log(checked,"Data Inserted In a Collection successful")

// Step-4 Data Read
const read_all = db.employee.find()
console.log(read_all, "Show Total Data");

const read_limit = db.employee.find().limit(1)
console.log(read_limit, "Show data as per your limit-set")

// Step-5 Delete/Drop Data
const delete_drop = db.employee.drop({"emp_id": 2})
console.log(delete_drop,"Data Delete successful")