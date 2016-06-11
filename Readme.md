## Goal:
* What is Functional Programming
* Simple example to simulate the Imperative and Function style implementation 
* Bring Redux and show how to manage Single app state  

## Functional Programming
* Finding a consistent definition for FP is difficult, May be we can say , “Functions as first-class objects” and “Eliminating side effects”
* Pure functions are one of the main pillars of functional programming.
* Functional programs contain no assignment statements, so variables, once given a value, never change
* functional programs contain no side-effects at all

## Begin a beginner, what we need to understand about FP is
* Data in FP should be immutable
* Immutability and Statelessness are core concepts of FP to understand 

## What are they brining on table ? 
* Make concurrency easier
* Brings the Scalability 
* Parallel Processing 

## Basic rules to follow to define Pure function :)
* All the functions must accept at least one argument 
* All the functions must return the value or another fucntion 
* No Loops!!!

##### pure functions 
* easily testable and less bug prone

FP are used when system’s performance and integrity are critical, i.e. program needs to perform the same exactly everytime when we pass same input  

## Simple example, you can try!!!!
* Display the all the users (First Name + Last Name) seperated by comma(,) whoes city is Hyd

```javascript
const users= [
    {
        fName: 'Alice',
        lName: 'Sir',
        city: 'Hyd'
    },
    {
        fName: 'Bob',
        lName: 'Prof',
        city: 'Che'
    },
    {
        fName: 'Caterine',
        lName: 'Mam',
        city: 'Hyd'
    }
]
```

## Output if city is Hyd
* 'Alice Sir, Caterine Mam'
