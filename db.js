import * as sqlite from 'sqlite';
import  sqlite3  from 'sqlite3';
const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});
await db.migrate()



//const result = await db.all('select * from greetings');
//console.log(result)

//db
   //.all('select * from greetings')
   //.then(result => {
    // console.log(result)
   //})

  // const countResult = await db.get('select count(*) as count greeting');
   //console.log(countResult.count);



   export async function getGreetings () {
    const result = await db.all('select * from greetings');
    return result;
  
  }
  
  //const result = await getGreetings()
  //console.log(result)   


  export async function addGreeting(language, greeting) {
    const sql ='insert into greetings (language, greeting) values (?,?)'
    await db.run (sql, [language, greeting]);
  }

  //const result1 = await getGreetings()
  //console.log(result1);

 // console.log('================')
  //await addGreeting('Sepedi', 'Dumela');

  //console.log('==================')

  //const result2 = await getGreetings ()
  //console.log(result2);


export async function deleteGtreeting(id) {
  const sql='delete from greetings where id=?';
 await  db.run(sql, [id]);
 
}
  
//await deleteGtreeting(2), 
//await deleteGtreeting(1)


export async function updateGreeting(language, greeting, id) {
  const sql = 'update greetings set language= ?, greeting=? where id=?';
  await db.run(sql, [language, greeting, id])
}
//await updateGreeting('Sepedi', 'Thobela', 6)


