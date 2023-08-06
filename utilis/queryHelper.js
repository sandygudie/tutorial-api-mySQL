const getConnection = require("../db/db")

const addEmployeeQuery = async (name, department, address) => {
 
  const connection = await getConnection()
  return connection.execute(
    "INSERT INTO EMPLOYEE (name,department,address) values (?,?,?)",
    [name, department, address]
  )
}

const getEmployeeQuery = async id => {
    const connection = await getConnection()
    return connection.execute(
      "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id and e.id=?",
      [id]
    )
  }
  
  module.exports = {
    addEmployeeQuery,
    getEmployeeQuery,
  }