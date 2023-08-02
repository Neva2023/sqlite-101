-- create the table DDL (database defination language)

create table greetings(
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text
);

--DML database manupaltion langage)

select * from greetings;
select count(*) from greetings;

insert into greetings (language, greeting) values ('zulu', 'Sawubona');
insert into greetings (language, greeting) values ('xhosa', 'Molo');
insert into greetings (language, greeting) values ('english', 'Hello');
insert into greetings (language, greeting) values ('shona', 'Wakadini');





--add two more languages