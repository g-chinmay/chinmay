create database people;
create table person(first_name varchar(250),last_name varchar(250));
insert into person values("chinmay","garikipati");
select concat(first_name," ",last_name) as full_name from person;
