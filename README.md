# School Information System-Front End


<img width="1039" alt="Screenshot 2023-09-22 at 11 54 28" src="https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/a6ab681a-f771-49fd-b1ff-8b50826bb0a6">







https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/97df770e-cc20-4663-bcba-deb77a96e886.mp4




https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End/assets/77208138/05f09269-0314-40fc-9fc9-9525747c5801.mp4




# ECS link For Angular Front-End-
# ECS link For Dotnet Core Back-End-   
# AWS RDB link -database-1.cl2nped3ffqw.ap-south-1.rds.amazonaws.com  ?? will change the username and password acess and share later
# Docker File Link for Front-End - 
# Docker File Link for Back-End API- https://hub.docker.com/repository/docker/vibhushak/dotnet/general
# Front End Repo Link-https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Front-End.git
# Backend API Repo Link-https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-RegApi.git 
# Database Repo Link-https://github.com/Lakshan-Vibhusha-Kannangara/School-Interface-Database.git 
# 
# Introduction

Welcome to the Student Information System (SIS) software development project! In this endeavor, we aim to create a comprehensive and user-friendly Student Information System that leverages modern technologies for both the front end and back end. The key components of our system include:

# Front End: I'm using Angular framework to develop an intuitive and interactive user interface. A dynamic and responsive user experience.
* Angular component Reuse - 
* State of the whole SPA - I maintained a single state( Single source of truth) by creating a state service and passing the same reference to every constructor(dependency injection) I made sure all the components have the state.
* To be implemented-> Alert message after analysizing the response subscription error code

Back End API: The Web API will be built using Dotnet Core
 * 
Database:
 I'm utilizing MySql as our database management system to store and manage student information efficiently. Our database design will incorporate best practices, including primary keys, foreign keys, and unique constraints, to ensure data integrity.
        * I created Base entity(Student Table ,Teacher Table, Subject Table,Classroom Table) and 
        * SubjectTeacher Table has a foreign key mapping to subject and teacher tables and subject and teacher columns union should be unique( 1 constraint)
        * Did the same for AllocateSubject Table and AllocateClassroom Table.
        * For usual request data fetching I used Entity Framework's ORM mapping to interact with the MySql DBMS and for StudentReport and other few requests I wrote a particular querry to fetch data (Inner Join)
        *

# System Architecture 
