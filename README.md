# _Ping-Pong_

#### _A text based web application, 7/7/2017_

#### By _**Carson Canales**_

## Description

_Ping-Pongr is a  webpage that takes a number input from a user and returns a range of numbers as well as strings at certain intervals. results are displayed on the screen and in some instances you may notice  the words ping , pong, and pingpong!_

## Development Specifications


| Behavior      | Input         | Output        |
| ------------- | ------------- | ------------- |
|Take a number and produce the numbers range in a list|11|(1,2,3,4,5,6,7,8,9,0,11)|
|Take look at each number in the range starting with the lowest value and determine if the number is divisible by 3. if it is not divisible by 3 seperate the number from the list and pass it along to another list if it is divisible by 3 replace the number with the word "ping" and pass it along to the other list | (1,2,3,4,) |  (1,2,"ping,4")             |
|Take look a at each number in the new list starting with the lowest value and determine if the number is divisible by 5. if it is not divisible by 5 seperate the number from the list and pass it along to another list if it is divisible by 5 replace the number with the word "pong" and pass it along to the other list|   (1,2,"ping",4,5,6)|(1,2,"ping",4,"pong",6)|
|Take look a at each number in the new list starting with the lowest value and determine if the number is divisible by 15. if it is not divisible by 15 seperate the number from the list and pass it along to another list if it is divisible by 15 replace the number with the word "pong-pong" and pass it along to the other list|(....13,14,15,16)|(....13,14,"ping-pong",16) |
|take the newest list and return each item in the list in sequencial order from left to right|(1,2,"ping",4,"pong")|(1)...(2)...(ping)...(4)....(pong)....|
|               |               |               |


## Setup/Installation Requirements

* _Clone this repository_
* https://github.com/7tacocat7/ping-pong.git
* _Locate Ping-Pong directory & html file named index.html_
* _open HTML file in any web browser_


## Known Bugs



## Support and contact details

_If you encounter any issues with this HTML in a web browser please contact Carson Canales_

## Technologies Used

_This file was written in HTML and utilises CSS, Bootstrap, and JQuery_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Carson Canales_**
