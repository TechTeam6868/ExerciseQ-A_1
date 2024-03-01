var pro=new Promise(
    function (resolve, reject)
    {
        setTimeout(resolve,2000);// Lúc này nó sẽ được chuyển vào hàng đợi và chờ cho các lệnh ở dưới 
        //thực hiện xong sau đó mới vào setTimeout wait 2s sau đó mới thực hiện các lệnh khi điều kiện setTimeout thoả mãn
        if(reject)
        {
            console.log('Ohnu');
        }
        console.log('3');
    }
);
pro
.then(function(){
    console.log('1');
    return new Promise(function(resolve,reject)// create 1 promise mới. lúc này function sẽ được thay bằng function ở dưới này
    {
        setTimeout(resolve,4000);//Lúc này resolve sẽ nhận .then ngay ở dưới do setTimeout nhận là resolve chứ nếu nhận là reject thì nhận .catch ạ
    })
})
.then(function(){
    return 3;//Hàm trả về giá trị 3 và  đang bị delay 4000ms theo câu lệnh ở trên
})
.then (function(data){// function ở đây sẽ kế thừa dữ liệu từ .then ngay trước nó (là cái .then mà return về 3).
    console.log(data);//vậy lúc này data có giá trị là data = 3.
})
.catch(function()
{
    console.log('6');
    return new Promise(function(resolve,reject)
    {
        setTimeout(resolve,2000);
    })
})
.finally(function(){
    console.log('Anti A Dang');// finally có nghĩa là dù cho có resolve hay reject thì nó cũng sẽ thực hiện ra yêu cầu.
});