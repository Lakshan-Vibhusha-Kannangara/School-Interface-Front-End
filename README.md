# School Information System-Front End




<img width="300" alt="Screenshot 2023-09-22 at 11 54 28" src="https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/aad36698-82a9-4c02-8ff1-373a418f6170">






https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/512a2346-1b65-4154-af39-f866c21f4fa8






https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/31c0af89-612c-43ab-b3c7-ae11315a3be5












# Database Design
# Database is in accordance to First, Second and Third Normal Forms
# Used an Inner Join to get data from Table relations >>>
  from tc in _studentDbContext.AllocateClassroom
  join ts in _studentDbContext.SubjectTeacher on tc.TeacherID equals ts.TeacherID
  where tc.ClassroomID == student.ClassroomID
  

<img width="1106" alt="Screenshot 2023-09-25 at 00 22 03" src="https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/b24c6ae2-cdf9-454b-9b05-3b04f28018ca">





<img width="533" alt="Screenshot 2023-09-25 at 09 20 27" src="https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/6a37fefb-accd-4257-94a1-fa4f7e352907">





# ECS link For Angular Front-End-
# ECS link For Dotnet Core Back-End-   
# AWS RDB link -database-1.cl2nped3ffqw.ap-south-1.rds.amazonaws.com  ?? will change the username and password acess and share later
# Docker File Link for Front-End - 
# Docker File Link for Back-End API- https://hub.docker.com/repository/docker/vibhushak/school-web-api/general
# Front End Repo Link-https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End.git
# Backend API Repo Link-https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-RegApi.git 
# Database Repo Link-https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Database.git 
# 
# Introduction

Welcome to the Student Information System (SIS) software development project! In this endeavor, we aim to create a comprehensive and user-friendly Student Information System that leverages modern technologies for both the front end and back end. The key components of our system include:

Front End: I'm using Angular framework to develop an intuitive and interactive user interface. A dynamic and responsive user experience.

Back End: The Web API will be built using Dotnet Core

Database: I'm utilizing MySql as our database management system to store and manage student information efficiently. Our database design will incorporate best practices, including primary keys, foreign keys, and unique constraints, to ensure data integrity.


# System Architecture 
