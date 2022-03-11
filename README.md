# ExpenseSharingApp

Create an expense sharing application.
An expense sharing application is where you can add your expenses and split them among different people. The app keeps balances between people as in who owes how much to whom.
Requirements: 
Define service layer + entities for below-defined functionality. Please assume the things which are not mentioned in the requirements to proceed further. 
Create User flow: Each user should have a userId, name, email, mobile number.
Expense Calculations and Management: 
Could either be EQUAL, EXACT or PERCENT
Users can add any amount, select any type of expense and split with any of the available users.
The percent and amount provided could have decimals up to two decimal places.
In the case of percent, you need to verify if the total sum of percentage shares is 100 or not.
In case of exact, you need to verify if the total sum of shares is equal to the total amount or not.
Showing expense of the users:
The application should have the capability to show expenses for a single user as well as balances for everyone.
When asked to show balances, the application should show balances of a user with all the users where there is a non-zero balance.

Weightage
65% - For Entity and service definition, the design principle  and code organisation
35% - Correctness of the solution

Sample test cases
 Add 5 user [1,2,3,4,5]


a) Add PETROL expense: equal split of 600 paid by user 2 between (1,2,5) - Petrol


b) Add MOVIE expense percentage split 400 paid by user 1 between (1,2,4,5) [ 30%, 20%, 40%, 10%]  - Movie
 

c) Add FOOD expense: exact split of 700 paid by user 4 btw (1,2,5) [ 100, 200,  400] - Food
    
