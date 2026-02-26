//задание 2
let a=7;
let sum=1;
for(let i=1;i<=a;i++)
{
	sum*=i;
}
console.log(sum);
//задание 3
class T
{
  product;
	price;
}
let array={
	new: T("prod1",30),
	new: T("prod2",70),
	new: T("prod3",55)
}
let sum=0;
let average=0;
function getAverage(mas)
{
	for(let i=0;i<mas.length;i++)
	{
		sum+=mas[i.price];
	}
	average=sum/mas.length;
	console.log("Средняя цена:",average);
}
getAverage(array);
