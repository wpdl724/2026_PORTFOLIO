<!-- 2026 포트폴리오 -->
## 포트폴리오 구성
1. 개인 프로필 
2. 프로젝트 1 - 탬버린즈 
3. 프로젝트 2 - 무림 
4. 프로젝트 3 - 라코스테
5. 프로젝트 4 - 로얄캐닌
6. 디자인 작업 - 배너 , SNS디자인, 상세페이지
7. contact me

### 폰트 구성
1. font-family: 'NanumBarunGothicUltraLight';
2. font-family: 'NanumBarunGothicLight';
3. font-family: 'NanumBarunGothic';
4. font-family: 'NanumBarunGothicBold';

## 2026 좌우 배치... 
* div -> positon을 줄것인가...?
                    <div class="span">
                        <span class="year_left">2026</span>
                        <span class="year_left">2026</span>
                    </div>

## 텍스트 위 텍스트 겹치기..? 
- 이미지 위 텍스트로 변경하는게 나을듯..

/* span 2026 디자인 */
/* ---------------- 이미지 삽입 */
#wrap .swiper-wrapper #intro .center h1{}
#wrap .swiper-wrapper #intro .center h1 img{width: 100%; height: 100vh;}
#wrap .swiper-wrapper #intro .center .span{
    /* position: relative; left: 140px; right: 140px; */
}
#wrap .swiper-wrapper #intro .center .year_left{
    /* position: absolute; */
    /* background-color: yellow;
    text-orientation: upright;
    writing-mode: vertical-lr; */
}
#wrap .swiper-wrapper #intro .center .year_right{
        /* position: absolute;
    background-color: yellow;
    text-orientation: upright;
    writing-mode: vertical-rl; */
}
    
#wrap .swiper-wrapper #intro .center h1{
    /* background-color: yellow; */
    /* color: #A8B7DB;
    font-size: 13.75rem;
    font-weight: 700;
    margin-top: 170px;
    text-align: center; */
}
#wrap .swiper-wrapper #intro .center .roles_txt{}
#wrap .swiper-wrapper #intro .center .roles_txt p{}



/* ------------------ 포트폴리오 바로가기 버튼 */
#wrap .swiper-wrapper #intro .btn {
    margin: 0 auto;
    text-align: center;
    width: 214px; height: 46px;
    border-radius: 15px;
    /* margin-top: 188px; */
    background-color: #D9D9D9;
}
#wrap .swiper-wrapper #intro .btn:hover {
    background-color: yellow;
    color: #fff;
}
#wrap .swiper-wrapper #intro .btn a {
    color: red;
    line-height: 46px;
    font-weight: 500;
    font-size: 2rem;
}
/* 포트폴리오 btn */
#wrap #intro .btn {
    /* background-color: #c4c4c4; */
    border: 1px solid #fff;
    position: absolute;
    top: 720px; left: 860px;
    margin: 0 auto;
    width: 214px; height: 66px;
    text-align: center;
    line-height: 46px;
    font-size: 2rem;
    font-weight: 500;
    border-radius: 30px;
   
}
#wrap #intro .btn:hover {
    width: 214px; height: 46px;
    background-color: #020202;  
}
#wrap #intro .btn a {    
    display: block;
    /* background-color: yellow; */
    width: 214px; height: 46px;
    line-height: 46px;
}
#wrap #intro .btn a:hover{
    color: #fff;
}