// Bài Tập 1: viết 1 hàm: đặt 1 biến time, function, x, => mỗi time thì x + 1
// let x = 0;
// const siu = (time) => {
//     setInterval(()=>{x++;console.log(x)},time)`
// }
// siu(1000);
// Bài tập 2: time hiện tại, timeN, function, mỗi timeN thì thời gian hiện + x, 8:10:22, timeN:  2s, 8:10:24, 8:10:26, time: 1p, 8:11:22
// let date = new Date();
// let Hours = date.getHours();
// let Minutes = date.getMinutes();
// let Seconds = date.getSeconds();
// const siuu = (timeN) => {
//     setInterval(() => {
//         Seconds+=(timeN/1000);
//         if (Seconds>=60) {
//             Seconds-=60;
//             Minutes+=1;
//         };
//         if (Minutes>=60) {
//             Minutes-=60;
//             Hours+=1;
//         }
//         if (Hours>=24) {
//             Hours-=24;
//         }

//         console.log(`${Hours} : ${Minutes} : ${Seconds}`);
//     },
//     timeN)
// }
// siuu(2000);
// bài tập 3: làm giúp input: nhập vào tên của các thành phố, thay dổi link api bằng giá trị đã nhập vào
// const input =document.getElementById("API");
// document.getElementById("siuuuu").addEventListener("submit", (e)=>{
//     let APIlink = "";
//     APIlink=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&vn&appid=4269652c5e1b6a66a34f9d3d16ecc098`;
//     console.log(APIlink);
//     e.preventDefault();
// })




// const timeNow = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
// b5b3492ee4b22489b94afcb9557e77e9
// 4269652c5e1b6a66a34f9d3d16ecc098https://api.openweathermap.org/data/2.5/weather?q=London&vn&appid=4269652c5e1b6a66a34f9d3d16ecc098
// api.openweathermap.org/data/3.0/onecall?lat=38.8&lon=12.09&vn=test
// ...