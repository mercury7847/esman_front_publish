<template>
  <div class="l-service">
  <gnb />
  <div class="shipping">
    <div class="search-area">
      <button class="search-btn"></button>
      <div class="search-inner">
        <button class="select-button">선택</button>
      </div>
    </div>
    
    <div class="card list">
      <div class="simple">
        <div class="status">
          <div class="left">
            <span class="shipping-label post-payment">착불</span>
            <span class="shipping-code">610587461481</span>
          </div>

          <div class="right">
            <span class="distance"><span>22</span> m 이내</span>
            <button class="moer"></button>
          </div>

        </div>

        <div class="shipping-address">
          <span class="address">용산구 청파동 1가 62-20</span>  
          <button class="foldding-btn onq"></button>
        </div>

      </div>
      <div class="detail is-on">
        <div class="row">
          <div class="col-12">
            <em>상품명</em>
            <p class="point-color">간장개장</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <em>송하인</em>
            <p>한배송</p>
          </div>
          <div class="col-6">
            <em>수하인</em>
            <p>이수령</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <em>고객요청 사항</em>
            <p>간장개장</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <em>화주요청 사항</em>
            <p>깨지기 쉬운 물품입니다. 운반시 조심해 주세요. 감사합니다.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <em>착불비용</em>
            <p  class="pay-color">2,500 <span>원</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="card list">
      <div class="simple">
        <div class="status">
          <div class="left">
            <span class="shipping-label pre-payment">선불</span>
            <span class="shipping-code">610587461481</span>
          </div>

          <div class="right">
            <span class="distance"><span>1</span> Km 이내</span>
            <button class="moer"></button>
          </div>

        </div>

        <div class="shipping-address">
          <span class="address">용산구 청파동 1가 62-20</span>  
          <button class="foldding-btn"></button>
        </div>

      </div>
      <div class="detail">

      </div>
    </div>
    <div class="card list">
      <div class="simple">
        <div class="status">
          <div class="left">
            <span class="shipping-label pre-payment">선불</span>
            <span class="shipping-code">610587461481</span>
          </div>

          <div class="right">
            <span class="distance"><span>76</span> m 이내</span>
            <button class="moer"></button>
          </div>

        </div>

        <div class="shipping-address">
          <span class="address">용산구 청파동 1가 62-20</span>  
          <button class="foldding-btn"></button>
        </div>

      </div>
      <div class="detail">

      </div>
    </div>

    <div class="card list">
      <div class="simple">
        <div class="status">
          <div class="left">
            <span class="shipping-label pre-payment">선불</span>
            <span class="shipping-code">610587461481</span>
          </div>

          <div class="right">
            <span class="distance"><span>76</span> m 이내</span>
            <button class="moer"></button>
          </div>

        </div>

        <div class="shipping-address">
          <span class="address">용산구 청파동 1가 62-20</span>  
          <button class="foldding-btn"></button>
        </div>

      </div>
      <div class="detail">

      </div>
    </div>

    <div class="card list">
      <div class="simple">
        <div class="status">
          <div class="left">
            <span class="shipping-label pre-payment">선불</span>
            <span class="shipping-code">610587461481</span>
          </div>

          <div class="right">
            <span class="distance"><span>76</span> m 이내</span>
            <button class="moer"></button>
          </div>

        </div>

        <div class="shipping-address">
          <span class="address">용산구 청파동 1가 62-20</span>  
          <button class="foldding-btn"></button>
        </div>

      </div>
      <div class="detail">

      </div>
    </div>
    <div class="card list">
      <div class="simple">
        <div class="status">
          <div class="left">
            <span class="shipping-label pre-payment">선불</span>
            <span class="shipping-code">610587461481</span>
          </div>

          <div class="right">
            <span class="distance"><span>76</span> m 이내</span>
            <button class="moer"></button>
          </div>

        </div>

        <div class="shipping-address">
          <span class="address">용산구 청파동 1가 62-20</span>  
          <button class="foldding-btn"></button>
        </div>
      </div>

      
    </div>
  </div>
  <foot-menu />
</div>
</template>

<script>
import Gnb from '../../components/layout/Gnb'
import FootMenu from '../../components/layout/FootMenu'
export default {
  components: { FootMenu,Gnb },
  name:'Shipping',
}
</script>