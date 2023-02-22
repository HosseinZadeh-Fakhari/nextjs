import {handleClick} from '../public/site-template/Handles'
import { bandicam1, bandicam2 } from '../public/site-template/bandicam';

export const getServerSideProps = async () =>{
  const res =  await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return{
    props:{amir:data}
  }
}

export default function Home({amir}) {

  return (
<div>

<bdi>
<br/>

<h1>پروژه‌ با فریمورک Next Js</h1>
<br/>


<p>در این پروژه از 3 مبحث Fetching Data و Layout و Pre-rendering استفاده شده. </p>
<br/>

<h4>توضیح مختصر Fetching Data :</h4>
<br/>

<p>
برای دریافت اطلاعات از یک سایت یا فایلی دیگر از Fetching Data استفاده می‌کنیم.
درون فریمورک Next Js از متد getServerSideProps کمک میگیریم.
<br/>
جدول زیر از سایت <a href = "https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a> است  که id ٬ name و website انهارا برداشتم و درون این جدول قرار دادم
. این تابع یک props برمیگرداند که آن را به ورودی تابع اصلی میدهیم </p>
<br/>

</bdi>

  <botton className="btn btn-success" onClick ={handleClick}>برای نابودی جدول کلیک کنید</botton>
  <br/>
<br/>
  <table  id="open" className=" table table-dark table-bordered border-warning table-width" >
    <thead key = {1005}>
      <tr key = {1112}>
        <th key = {7987} scope="col">Id</th>
        <th key = {46813} scope="col">Name</th>
        <th key = {58645} scope="col">Website</th>
      </tr>
    </thead>
    {amir.map(amir => (
    <tbody key = {amir.id*19} className="table-active">
      <tr key = {amir.id*29}>
        <th key = {amir.id} scope="row">{amir.id}</th>
        <td key = {amir.id*2}>{amir.name}</td>
        <td key = {amir.id*3}>{amir.website}</td>
      </tr>
    </tbody>))}
  </table>

  <bdi>
  <br/>
  <br/>

  <h4>توضیح مختصر Layout :</h4>
  <br/>

برای لایه‌بندی کردن سایت ابتدا باید یک فایل  Layout , که نام متد آن Layout با ورودی children هست را بسازیم.
<br/>
بعد از آن  درون فایل  -app.js تغییراتی بوجود می‌آوریم.


  
  <br/>
  <br/>

  <h4>توضیح مختصر Pre-rendering :</h4>
  <br/>

</bdi>
  <bdi>

اگر به وارد inspect همین سایت شویم و بعد روی icon تنظیمات کلیک کنیم .
<br/>دربخش preferences گزینه‌ی disable javascript وجود دارد که اگر فعال کنیم ودوباره سایت رو refresh کنیم می بینیم :
<botton className="bandicam1"  onClick={bandicam1}>-o0-op</botton>

      <br/>
          و اگر همین کار را روی پروژه react انجام دهیم :
          <br/>
<div className="bandicam2"  onLoad={bandicam2}></div>
  </bdi>

</div>
 )


}
