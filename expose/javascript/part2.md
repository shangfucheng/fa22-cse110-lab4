1. 3 , i is defined by var which is global scope.
2. 150, discountedPrice is defined by var which is a global scope.
3. 150, final is defined by var in function scope, and can be accessed anywhere inside the function.
4. [50,100,150], discounted is a list of all value got pushed in in the for loop
5. i is defined by let which is in the scope of loop, can not be accessed outside of for loop.
6. error, cause discountedPrice is defined in scope of for loop by let, can not call outside of scope.
7. 150, because finalprice is defined in function scope, which can be accessed anythere in the function.  
8. [50,100,150], the return value discounted is defined as a list in function scope, and values are pushed into the list in the for loop.
9. error, i is defined by let in the for loop scope, and won't be able to access outside of for loop.
10. 3 , length is defined by const in the beginning of function, and never changed.
11. [50,100,150], discounted declared in the beginning of function, and values are added in for loop.  
12. a) student.name <br/>
    b) student['Grad Year'] <br/>
    c) student.greeting() <br/>
    d) student['Favorite Teacher'].name <br/>
    e) student.courseLoad[0] <br/>
13. A. 32 <br/>
    B. 1 <br/>
    C. 3 <br/>
    D. 3null <br/>
    E. 4 <br/>
    F. 0 <br/>
    G. 3undefined <br/>
    H. NaN <br/>
14. A. true  <br/>
    B. false <br/>
    C. true <br/>
    D. false <br/>
    E. false <br/>
    F. true <br/>
15. == is loose equal and === is strictly equal, which means the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands.
17. when call modifyArray, it will create an empty array and loop the input array that calls another function doSomething, and push the return value of doSomething into the empty array, and return the array at end which is [2,4,6]

19. 1 4 3 2


