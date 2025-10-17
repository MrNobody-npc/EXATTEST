const sql = require("msnodesqlv8");

const connectionstring = "server=.;Database=EXAT;Trusted_Connection=Yes;Driver={Sql Server Native Client 11.0}";
const query = `
INSERT INTO dbo.exat3 (
  EMP_ID, EMP_CODE, EMP_PREFIX, EMP_FNAME, EMP_LNAME, EMP_SEX, 
  CREATE_BY, CREATE_DATE, EDIT_BY, EDIT_DATE, FLAG
)
VALUES (
  13, 24360595, N'นาย', N'ภาณุวัฒน์', N'ทองดี', 'M', 
  N'ปาณิสรา', '2025-04-27 07:02:04', N'ชลธิชา', '2023-08-01 17:32:29', '0'
)
`;

sql.query(connectionstring, query, (err, rows) => {
    console.log(rows);
});