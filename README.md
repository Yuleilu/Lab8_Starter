# Lab 8 - Starter
Yulei Lu and Jessie Ouyang 

https://yuleilu.github.io/Lab8_Starter/

## Question 1: Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
We would fit my automated tests within a Github action that runs whenever code is pushed. Because we cannot guarantee or trust that everyone will manually run the tests locally before pushing to Github, some may forget and it could mess up the later project if a bug did not get caught. Run test all after all development is completed is not an good idea neither because the program would be large and very hard to debug, we want to know which part causes the problems and being able to fix them before proceeding building on top of it. Thus if we have them test automatically after each push, we can know where the error occur before we proceed to write other feature.


## Question 2: Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No, we use unit test to see if individual function is returning the correct putput. The E2E test validates the complete functionality of a system or application from start to finish.

## Question 3: Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, the "message" feature is consisted of mutiple functions, for example write function and send function. We would still use an E2E test since it is a complete feature, not individual functions.

## Question 4: Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, because the “max message length” will be a single function that checks if message length < max_length. 

