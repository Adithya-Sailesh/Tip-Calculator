let bamount=document.getElementById("billamount")
let bpercent=document.getElementById("billpercent")
let number=document.getElementById("numpeople")
let sButton=document.getElementById("btsubmit")
let out=document.getElementById("output")
function amount(){
    bill=Number(bamount.value)
    percent=Number(bpercent.value)
    num=Number(number.value)
    if(bill==''|| num==''){
        return 0.00
    }
    totalTip=(bill*percent)/100
    pertip=totalTip/num
    perpersonamount=bill/num
    perperson=perpersonamount+pertip
    return Math.floor(perperson)
}
sButton.onclick=function(){
    x=amount()
    out.innerText=x+"₹"
}