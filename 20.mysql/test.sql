show databases;
use zfpx;
create database zfpx;

create table student
(
id int auto_increment primary key,
`name` varchar(32) not null,
age int default 18
)
select * from student;

show tables;

show columns from student;

show columns from student like '%name%';

insert into student(name)
values('zpfx3');

select * from student;

alter table student add home varchar(32)

select home,count(*),avg(age),max(age),min(age)
from student
where age>0
group by home
having max(age)<=100
order by max(age) desc
limit 0,3

create table score (
stuid int,
course varchar(32),
score int
)
select * from score;

1.zfpx1的所有课程平均分是多少?
2.所有学生的语文平均分是多少？
3.所有同学数学成绩最高的人的姓名是什么？
student 3
score 5
select avg(sc.score) from student s,score sc
where  sc.stuid=s.id
and s.name = 'zpfx1'

select avg(sc.score) from score sc
where course = '语文'

select  s.name,sc.score from student s,score sc
where  sc.stuid=s.id
and  course = '数学'
order by sc.score desc
limit 1

select  s.name,sc.score from student s inner join score sc on sc.stuid=s.id
inner join (select max(sc.score) score from score sc where  course = '数学') as maxscore on sc.score = maxscore.score

where  sc.stuid=s.id

;