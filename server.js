//test1.js
var ibmdb = require('ibm_db');
var sql_str = "select ID from DB2WML.HOME_SALES"

ibmdb.open("DRIVER={DB2};DATABASE=sampledb;HOSTNAME=165.192.77.234;UID=db2inst1;PWD=cicdtest;PORT=30428;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);

  conn.query( sql_str, function( err, data ){
    if( err ) console.log( err );

    console.log( data );

    conn.close( function(){
      console.log( 'done' );
    });
  });
});