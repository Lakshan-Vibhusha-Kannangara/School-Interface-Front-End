# School Information System-Web Api



<img width="200" alt="Screenshot 2023-09-22 at 11 54 28" src="https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/a6ab681a-f771-49fd-b1ff-8b50826bb0a6">







https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/138dbaab-0ae3-4b56-8dfa-6813a98196ec









https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/531651e4-77e6-42e9-81e3-1eab1ad8a79c



# Database Design
# Database is in accordance to First, Second and Third Normal Forms
# Used an Inner Join to get data from Table relations >>>
  from tc in _studentDbContext.AllocateClassroom
  join ts in _studentDbContext.SubjectTeacher on tc.TeacherID equals ts.TeacherID
  where tc.ClassroomID == student.ClassroomID


<img width="1550" alt="Screenshot 2023-09-25 at 00 53 27" src="https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/36076418-de4a-4f62-b03d-b413e28e12c4">







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
