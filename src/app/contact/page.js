import Carousel from "@/component/Carousel";

export default function Home() {
  return (
    <main>
      <Carousel />
<div>
  <div className="text-center my-4 fs-5 fw-bold"><h1>contact</h1></div>
  <section id="contact" className="text-primary contact" /> 
  <div className="container max-width-container">
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30214.618968496696!2d98.96247307638849!3d18.8058450835695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1671708540352!5m2!1sth!2sth" width="100%" height={600} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <p className="has-medium-font-size">
        <strong>วิทยาลัยเทคนิคเชียงใหม่ สถาบันการอาชีวศึกษาภาคเหนือ 1</strong>
        <br />เลขที่ 9 ถนนเวียงแก้ว ตำบลศรีภูมิ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50200<br />
        <strong>โทรศัพท์</strong> : 053 217 708 | 
        <strong>โทรสาร</strong> : 053 221 599 | 
        <strong>อีเมล</strong> : ctc@cmtc.ac.th 
      </p>
    </div>
  </div>
</div>

    </main>
  );
}
