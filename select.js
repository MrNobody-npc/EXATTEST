const sql = require("msnodesqlv8");

const connectionstring = "server=.;Database=EXAT;Trusted_Connection=Yes;Driver={Sql Server Native Client 11.0}";
const query ="SELECT * FROM dbo.exat3 WHERE CREATE_BY = N'สรชัย'";

sql.query(connectionstring, query, (err, rows) => {
    console.log(rows);
});